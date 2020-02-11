<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:36:02
 * @Description  : 待看诊列表
 * @LastEditTime : 2020-02-11 20:45:02
 -->
<template>
    <el-table :data="tableData"  style="width:60%" stripe >

        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column prop="date" column-key="date" sortable label="预约时间" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" align="center">
        </el-table-column>
         <el-table-column prop="reason" label="患者自述" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
           <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="look(scope.row)">看诊</el-button>
          </template>
        </el-table-column>
    </el-table>

</template>
<script>
import moment from 'moment';
import { getRecord } from '@/api/doctor'
export default {
    name: 'List',
    data() {
        return {
            tableData: []

        }
    },
    created() {
      getRecord().then(res=>{
        console.log(res)
         if(res.status){
          res.data.map(item=>{
            item.date = moment(item.date).format('YYYY-MM-DD hh:mm:ss')
          })
          this.tableData = res.data
        }else{
          this.$message.error('获取记录失败')
        }
      })
    },
    methods:{
        look(row){
            this.$router.push({
              path:'/doctor/add',
              query:{
                patientId:row.patientId,
                name:row.userName,
                age:row.age,
                gender:row.gender
              }
            })
        }
    }
}


</script>
