<!--
 * @Author: Benny
 * @Date: 2020-01-11 14:34:46
 * @LastEditors  : Benny
 * @LastEditTime : 2020-01-20 00:11:05
 -->
<template>


    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="officeId" label="科室id" align="center">
        </el-table-column>
        <el-table-column prop="officeName" label="科室名" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
           <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
    </el-table>

</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>
export default {
    name: 'List',
    data() {
        return {
            tableData: [{
                officeId: '10086',
                officeName: '骨科',
            },
            {
                officeId: '10086',
                officeName: '药科',
            },
            {
                officeId: '10086',
                officeName: '儿科',
            },
            ]

        }
    },
    methods:{

    }
}


</script>
