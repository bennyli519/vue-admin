<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:36:02
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-02-07 19:43:51
 -->
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="门诊科室" prop="officeId">
        <el-select v-model="ruleForm.officeId" placeholder="请选择所要预约的门诊科室" @change="_selectOffice">
            <el-option v-for="(officeItem,id) in officeList" :label="officeItem.o_name" :value="officeItem.office_id" :key="id"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="医生" prop="doctorId">
        <el-select v-model="ruleForm.doctorId" placeholder="请选择所要预约的医生">
            <el-option v-for="(doctorItem,dId) in doctorList" :label="doctorItem.d_name" :value="doctorItem.doctor_id" :key="dId"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="预约手机号" prop="appointPhone">
        <el-input v-model="ruleForm.appointPhone" placeholder="请选择预约手机号" maxlength="11">

        </el-input>
    </el-form-item>
    <el-form-item label="自述症状" prop="appointReason">
        <el-input v-model="ruleForm.appointReason" placeholder="请描述下你的症状">

        </el-input>
    </el-form-item>
    <el-form-item label="看病日期" prop="appointDate">
        <el-date-picker v-model="ruleForm.appointDate" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="isLoading">立即预约</el-button>
    </el-form-item>
</el-form>
</template>

<style lang="sass" scoped>

</style>

<script>
import { getList } from '@/api/offices'
import { book,getDoctor } from '@/api/appoint'

export default {
    name: 'Add',
    data() {
        return {
            isLoading: false,
            ruleForm: {
                officeId: '',
                doctorId: '',
                appointDate: '',
                appointPhone: '',
                appointReason: ''
            },
            officeList:[],
            doctorList:[],
            rules: {
                officeId: [
                    { required: true, message: "请选择科室", trigger: "blur" },
                ],
            }
        };
    },
    created(){
      getList().then(res=>{
        console.log(res);

        this.officeList = res.data
      })
    },
    methods: {
        //选择科室
        _selectOffice(id){
          console.log(id)
          getDoctor({
            officeId:id
          }).then(res=>{
            this.doctorList = res.data
          })
        },

        //提交预约表单
        submitForm(formName) {

            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.ruleForm)
                    this.isLoading = true;
                  book(this.ruleForm).then(res=>{
                    console.log(res)
                    this.isLoading = false;
                    if(res.status){
                      this.$message.success('预约成功')
                    }else{
                      this.$message.error('预约失败')
                    }

                  }).catch(err=>{
                    this.isLoading = false;
                  })
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>
