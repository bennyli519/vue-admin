<!--
 * @Description: 患者信息列表
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-02-12 13:58:35
 -->
<template>
    <div>
        <div class="btn-group">
            <!-- <el-button size="small" type="primary">全部</el-button>
            <el-button size="small">我负责的</el-button> -->
            <div class="search">

             <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="我所负责的" value="2"></el-option>
                    <el-option label="名字" value="3"></el-option>
                    <el-option label="用户id" value="4"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
            </div>
        </div>
        <el-table :data="tableData"  style="width:60%" stripe >
             <el-table-column prop="userId" label="用户id" align="center">
            </el-table-column>
            <el-table-column prop="userName" label="用户名" align="center">
            </el-table-column>
            <el-table-column prop="gender" label="用户性别" width="100" align="center">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" align="center">
            </el-table-column>
               <el-table-column prop="address" label="家庭地址" align="center">
            </el-table-column>
        </el-table>
    </div>

</template>
<style scoped>
  /deep/  .el-select .el-input {
    width: 130px;
  }
  /deep/ .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
    .btn-group{
        margin: 20px 0;
    }
    .search{
        width: 600px;
    }
</style>
<script>
import { getPatientList } from '@/api/doctor'
export default {
    name: 'List',
    data() {
        return {
            select:'1',
            input3:'',
            tableData: [{
                userName: '王小虎',
                gender:'男',
                age:40,
                office: '内科',
                mobile:'13242270901',
            },
           {
                userName: '王小虎',
                gender:'男',
                age:50,
                office: '儿科',
                mobile:'13242270901',
            },
            ]

        }
    },
    created() {
      getPatientList({
          selectValue:this.select
      }).then(res=>{
        if(res.status)
          this.tableData = res.data
        console.log(res)
      })
    },
    methods:{
      search(){
        console.log(this.select);
        console.log(this.input3)
         getPatientList({
          selectValue:this.select,
          content:this.input3
        }).then(res=>{
          if(res.status)
              this.tableData = res.data
            console.log(res)
          })
        }
    }
}


</script>
