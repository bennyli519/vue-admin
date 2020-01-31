<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:36:02
 * @LastEditors  : Benny
 * @LastEditTime : 2020-01-31 10:44:04
 -->
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="科室名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入科室名"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    </el-form-item>
</el-form>
</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>
import { createOffice } from '@/api/offices'
export default {
    name: 'Add',
    data() {
        return {
            ruleForm: {
                name: ''
            },
            rules: {
                name: [
                    { required: true, message: "请输入科室名", trigger: "blur" },
                ],
            }
        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    createOffice({
                        oName:this.ruleForm.name
                    }).then(res=>{
                        if(res.status){
                            this.ruleForm.name = '';
                            this.$message.success('添加科室成功')
                        }else{
                            this.$message.error('添加科室失败')
                        }
                        console.log(res)
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
