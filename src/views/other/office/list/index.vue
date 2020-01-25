<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Benny
 * @LastEditTime : 2020-01-20 00:11:05
 -->
<template>
    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="office_id" label="科室id" align="center">
        </el-table-column>
        <el-table-column prop="o_name" label="科室名" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
           <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="_delete(scope.$index,scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
    </el-table>

</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>

import { getList,deleteOffice } from '@/api/offices'
export default {
    name: 'List',
    data() {
        return {
            tableData: []

        }
    },
     created(){
        getList().then(res=>{
            this.tableData = res.data
            console.log(res)
        })
    },
    methods:{
        _delete(currentIndex,item){
            deleteOffice({
                officeId:item.office_id
            }).then(res=>{
                if(res.status){
                    this.$message.success(res.msg);
                    this.tableData.splice(currentIndex,1);
                }
                console.log(res)
            })
        }
    }
}


</script>
