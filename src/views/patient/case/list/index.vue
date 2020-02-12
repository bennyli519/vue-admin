<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-02-12 14:25:24
 -->
<template>
    <el-table :data="tableData"  style="width:80%" stripe >
        <el-table-column prop="caseId" label="编号" align="center">
        </el-table-column>
        <el-table-column prop="caseDate" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="patientName" label="患者名称" align="center">
        </el-table-column>
         <el-table-column prop="office" label="科室" width="100" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="caseContent" label="症状" align="center">
        </el-table-column>
        <el-table-column prop="caseConclude" label="诊断结果" align="center">
        </el-table-column>
        <el-table-column prop="caseSuggest" label="建议" align="center">
        </el-table-column>
         <el-table-column prop="caseCure" label="处方" align="center">
        </el-table-column>

    </el-table>

</template>



<script>
import { getCasetList } from '@/api/doctor'
import moment from 'moment';
export default {
    name: 'caseList',
    data() {
        return {
            tableData: [{
                caseId: '104787',
                caseDate: '2020-1-20',
                patientName:'李二傻',
                office:'儿科',
                gender:'男',
                age: 20,
                caseContent: '头痛肚子痛',
                caseConclude:'阑尾炎',
                caseSuggest:'多喝热水，少吃辣辛刺激的食物，清淡饮食',
                caseCure:'止痛片x5,消炎片x10',
            },
           {
                caseId: '104787',
                caseDate: '2020-1-20',
                patientName:'李二傻',
                office:'儿科',
                gender:'男',
                age: 20,
                caseContent: '头痛肚子痛',
                caseConclude:'阑尾炎',
                caseSuggest:'多喝热水，少吃辣辛刺激的食物，清淡饮食',
                caseCure:'止痛片x5,消炎片x10',
            },,
            ]

        }
    },
    created() {
      getCasetList().then(res=>{
        if(res.status){
           res.data.map(item=>{
            item.caseDate = moment(item.caseDate).format('YYYY-MM-DD hh:mm:ss')
          })
          this.tableData = res.data
        }else{
          this.$message.error('获取记录失败')
        }
      })
    },
    methods:{

    }
}


</script>
