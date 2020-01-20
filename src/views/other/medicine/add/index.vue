<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:36:02
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-20 15:59:56
 -->
<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="药品名称">
            <el-input v-model="ruleForm.drugName" placeholder="请输入药品名称"></el-input>
        </el-form-item>
        <el-form-item label="包装规格">
            <el-select v-model="ruleForm.drugSize" placeholder="请输入包装规格">
                <el-option label="24" value="24"></el-option>
                <el-option label="12" value="18"></el-option>
                <el-option label="12" value="12"></el-option>
                <el-option label="6" value="6"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="单位">
            <el-select v-model="ruleForm.drugType" placeholder="请输入药品剂型">
                <el-option label="包" value="包"></el-option>
                <el-option label="片" value="片"></el-option>
                <el-option label="颗" value="颗"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="生产厂家">
            <el-input v-model="ruleForm.drugFrom" placeholder="请输入生产厂家"></el-input>
        </el-form-item>
        <el-form-item label="批准文号">
            <el-input v-model="ruleForm.drugNum" placeholder="请输入批准文号"></el-input>
        </el-form-item>
        <el-form-item label="数量">
            <el-input v-model="ruleForm.drugCount" placeholder="请输入数量"></el-input>
        </el-form-item>
        <el-form-item label="用途">
            <el-input
                type="textarea"
                :rows="3"
                v-model="ruleForm.drugReason"
                placeholder="请输入用途"></el-input>
        </el-form-item>
        <el-form-item label="保质期">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
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
            value1: '',
            ruleForm: {
                drugName: '',
                drugSize: '',
                drugFrom: '',
                drugNum: '',
                drugType: '',
                drugCount: '',

            },
            rules: {
                name: [{
                    required: true,
                    message: "请输入科室名",
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
