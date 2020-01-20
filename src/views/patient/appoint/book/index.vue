<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:36:02
 * @LastEditors  : Benny
 * @LastEditTime : 2020-01-20 01:43:53
 -->
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="门诊科室">
        <el-select v-model="ruleForm.region" placeholder="请选择所要预约的门诊科室">
            <el-option label="儿科" value="shanghai"></el-option>
            <el-option label="xx" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="医生">
        <el-select v-model="ruleForm.region" placeholder="请选择所要预约的医生">
            <el-option label="李三" value="shanghai"></el-option>
            <el-option label="xx" value="beijing"></el-option>
        </el-select>
    </el-form-item>
      <el-form-item label="看病日期">
            <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即预约</el-button>
    </el-form-item>
</el-form>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
    name: 'Add',
    data() {
        return {
            value1:'',
            ruleForm: {
                name: '',
                region: '',
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
