<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-20 16:34:41
 -->
<template>
    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="userId" label="用户id" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="userTypeName" label="用户类型" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" align="center">
        </el-table-column>
    </el-table>

</template>



<script>
export default {
    name: 'caseList',
    data() {
        return {
            tableData: [{
                userId: '10086',
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
