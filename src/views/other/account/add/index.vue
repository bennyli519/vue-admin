<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:37
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-31 16:18:43
 -->
<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="用户类型" prop="usertype">
      <el-select v-model="ruleForm.usertype" placeholder="请选择用户类型" @change="selectRole">
        <el-option label="患者" value="1"></el-option>
        <el-option label="医生" value="2"></el-option>
        <el-option label="管理员" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item v-if="isDoctor" label="科室" prop="usertype">
      <el-select v-model="ruleForm.office" placeholder="请选择科室">
        <el-option v-for="item,index in officeList" :key="index" :label="item.o_name" :value="item.office_id"></el-option>
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
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model.number="ruleForm.mobile" placeholder="请输入你的手机号" maxlength="11"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
        type="password"
        v-model="ruleForm.checkPass"
        autocomplete="off"
        placeholder="请再次输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button :loading="isLoading" type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>
import { register } from '@/api/user'
import { getList } from '@/api/offices'
export default {
  name: "Add",

  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule,value,callback) =>{
      if(!(/^1[3456789]\d{9}$/.test(value))){
        callback(new Error('手机号格式有误'))
      }else{
        callback();
      }
    }

    return {
      officeList:[],
      isDoctor:false,
      isLoading:false,
      ruleForm: {
        name: "",
        usertype: "",
        gender: "",
        pass: "",
        checkPass: "",
        age: "",
        office: "",
        mobile:"",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        usertype: [
          { required: true, message: "请选择用户类型", trigger: "blur" }
        ],
        office: [{ required: true, message: "请选择科室", trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        age: [{ validator: checkAge, trigger: "blur" }],
        mobile:[{
          required: true, validator: validateMobile,trigger:"blur"
        }]
      }
    };
  },
  created() {
    //获取科室列表
    getList().then(res=>{
      if(res.status)
          this.officeList = res.data
      else
          this.$message.error(res.msg || '获取科室列表失败')
    })
  },
  methods: {
    //选择角色
    selectRole(val){
      //如果是医生则显示科室
      this.isDoctor = val==2
    },
    //注册
    register() {
      this.isLoading = true;
      register(this.ruleForm)
        .then(res => {
          this.isLoading = false;
          if(res.status){
            this.ruleForm ={}
            this.$message.success(res.data)
          }
          else
            this.$message.error('创建失败')
        })
        .catch(error => {
          console.log(error)
        });
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
