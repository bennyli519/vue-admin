<!--
 * @Description: 医生信息列表
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-01-20 16:48:57
 -->
<template>
    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="office" label="科室" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" align="center">
        </el-table-column>
    </el-table>

</template>
<script>
export default {
    name: 'List',
    data() {
        return {
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
    methods:{

    }
}


</script>
