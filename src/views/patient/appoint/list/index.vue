<!--
 * @Description: 看诊记录
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-02-07 19:43:35
 -->
<template>
    <el-table
        :data="tableData"
        style="width:80%"
        stripe>
        <el-table-column
            prop="date"
            column-key="date"
            sortable
            label="预约时间"
            align="center">
        </el-table-column>
        <el-table-column
            prop="doctorName"
            label="医生"
            width="100"
            align="center">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="用户名"
            align="center">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="手机号"
            align="center">
        </el-table-column>
        <el-table-column
            prop="reason"
            label="患者自述"
            align="center">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="300">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="primary"
                    @click="look">取药</el-button>
                <el-button
                    size="mini"
                    type="primary"
                    @click="look">我的病历</el-button>
            </template>
        </el-table-column>
    </el-table>

</template>

<script>
import { getRecord } from '@/api/appoint'
import moment from 'moment';
export default {
    name: 'List',
    data() {
        return {
            tableData: []

        }
    },
    created(){
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
    methods: {
        look() {
            this.$router.push('/doctor/add')
        }
    }
}
</script>
