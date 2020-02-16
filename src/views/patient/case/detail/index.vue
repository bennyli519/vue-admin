<!--
 * @Description: 病历详情
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-02-16 15:19:24
 -->
<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        disabled
        class="demo-ruleForm">
        <el-form-item label="看诊日期">
            <el-input v-model="ruleForm.date"></el-input>
        </el-form-item>
        <el-form-item label="患者名称">
            <el-input v-model="ruleForm.name" placeholder="患者名称"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="ruleForm.gender" placeholder="性别">
                <el-option label="男" value="'male'"></el-option>
                <el-option label="女" value="'female'"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="年龄">
            <el-input v-model="ruleForm.age" placeholder="年龄"></el-input>
        </el-form-item>
        <el-form-item label="症状">
            <el-input
                type="textarea"
                :rows="4"
                v-model="ruleForm.content"
                placeholder="症状"></el-input>
        </el-form-item>
        <el-form-item label="诊断结果">
            <el-input
                type="textarea"
                :rows="4"
                v-model="ruleForm.conclude"
                placeholder="诊断结果"></el-input>
        </el-form-item>
        <el-form-item label="建议">
            <el-input
                type="textarea"
                :rows="4"
                v-model="ruleForm.suggest"
                placeholder="建议"></el-input>
        </el-form-item>
          <el-form-item label="处方">
            <el-input
                type="textarea"
                :rows="4"
                v-model="ruleForm.medicine"
                placeholder="处方"></el-input>
        </el-form-item>

    </el-form>
</template>

<style scoped>
.text-red{
  color:red;
}
</style>

<script>
import { getMedicine } from '@/api/appoint'
import moment from 'moment';
export default {
    name: 'detail',
    data() {
        return {
            isLoading:false,
            ruleForm: {
                name: '',
                gender:'',
                age: '',
                content: '',
                conclude: '',
                suggest:'',
                medicine:'',
                date:''
            },
            rules: {
                name: [{
                    required: true,
                    message: "请输入xx",
                    trigger: "blur"
                }, ],
            },
            patientId:this.$route.query.patientId
        };
    },
  created() {
    this.getMedicine(this.patientId)
  },
  methods: {
     getMedicine(){
        getMedicine({
          patientId:this.patientId
        }).then(res=>{
          let data = res.data
          let patient =res.data.patient
          this.ruleForm.name = patient.p_name
          this.ruleForm.gender = patient.p_gender
          this.ruleForm.age = patient.p_age
          this.ruleForm.content = data.c_content
          this.ruleForm.suggest = data.c_suggest
          this.ruleForm.conclude = data.c_conclude
          this.ruleForm.date =  moment(data.c_date).format('YYYY-MM-DD hh:mm:ss')
          this.ruleForm.medicine = data.c_cure
          console.log(data.c_date)
          console.log(res)
        })
     },
  }
};
</script>
