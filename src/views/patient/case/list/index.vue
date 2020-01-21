<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-21 11:30:14
 -->
<template>
    <el-table :data="tableData"  style="width:80%" stripe >
        <el-table-column prop="caseId" label="编号" align="center">
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
        <el-table-column prop="caseDate" label="日期" align="center">
        </el-table-column>
    </el-table>

</template>



<script>
export default {
    name: 'caseList',
    data() {
        return {
            tableData: [{
                userName: '王小虎',
                userTypeName: '管理员',
                gender:'男',
                age:20,
                mobile:'13242270901'
            },
            {
                userId: '10088',
                userName: '王小asdfsdaf虎',
                userTypeName: '管理员',
                gender:'男',
                age:20,
                mobile:'13242270901'
            },
            ]

        }
    },
    methods:{

    }
}


</script>
