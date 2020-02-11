<!--
 * @Description: 医生信息列表
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-02-11 20:21:17
 -->
<template>
    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="officeName" label="科室" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" align="center">
        </el-table-column>
    </el-table>

</template>
<script>
import { getDoctorList } from '@/api/doctor'
export default {
    name: 'List',
    data() {
        return {
            tableData: []

        }
    },
    created() {
      getDoctorList().then(res=>{
        if(res.status){
          this.tableData = res.data
        }
        console.log(res)
      })
    },
    methods:{

    }
}


</script>
