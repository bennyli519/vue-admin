<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:37
 * @LastEditors  : Benny
 * @LastEditTime : 2020-01-20 01:07:39
 -->
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="用户类型" prop="usertype">
        <el-select v-model="ruleForm.usertype" placeholder="请选择用户类型">
            <el-option label="患者" value="1"></el-option>
            <el-option label="医生" value="2"></el-option>
            <el-option label="管理员" value="3"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="科室" prop="usertype">
        <el-select v-model="ruleForm.office" placeholder="请选择科室">
            <el-option label="儿科" value="1"></el-option>
            <el-option label="妇产科" value="2"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender" placeholder="请选择性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="请输入你的年龄"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
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
export default {
    name: "Add",

    data() {
            var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            ruleForm: {
                name: "",
                usertype:"",
                gender:"",
                pass: "",
                checkPass: "",
                age: "",
                office:""
            },
            rules: {
                name: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                ],
                usertype:[{required:true,message:"请选择用户类型",trigger:"blur"}],
                office:[{required:true,message:"请选择科室",trigger:"blur"}],
                pass: [{ required:true,validator: validatePass, trigger: "blur" }],
                checkPass: [{ required:true,validator: validatePass2, trigger: "blur" }],
                age: [{ validator: checkAge, trigger: "blur" }]
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
