<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-31 17:36:34
 * @description:账号列表
 -->
<template>


    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="userId" label="用户id" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="userTypeName" label="用户类型" align="center">
        </el-table-column>
        <!-- <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" align="center">
        </el-table-column> -->
    </el-table>

</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>
import { getInfoList } from '@/api/user'
export default {
    name: 'List',
    data() {
        return {
            tableData: []

        }
    },
    created(){
       getInfoList().then(res=>{
           if(res.status)
            this.tableData = res.data
           console.log(res)
       })
    },
    methods:{

    }
}


</script>
