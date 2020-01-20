<!--
 * @Description: 看诊(病人信息，病历录入)
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-01-20 17:16:47
 -->
<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
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
        <el-form-item label="病史">
          <div class="text-red">无</div>
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
                v-model="ruleForm.reason"
                placeholder="建议"></el-input>
        </el-form-item>
          <el-form-item label="处方">
            <el-input
                type="textarea"
                :rows="4"
                v-model="ruleForm.medicine"
                placeholder="处方"></el-input>
        </el-form-item>
       

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.text-red{
  color:red;
}
</style>

<script>
export default {
    name: 'Add',
    data() {
        return {
            value1: '',
            ruleForm: {
                name: '',
                gender: '',
                age: '',
                content: '',
                conclude: '',
                reason:''
            },
            rules: {
                name: [{
                    required: true,
                    message: "请输入xx",
                    trigger: "blur"
                }, ],
            }
        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.ruleForm)
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>
