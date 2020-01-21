<!--
 * @Description: 看诊记录
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-01-21 14:40:41
 -->
<template>
    <el-table
        :data="tableData"
        style="width:80%"
        stripe>
        <el-table-column
            prop="bookDate"
            column-key="bookDate"
            sortable
            label="预约时间"
            align="center">
        </el-table-column>
        <el-table-column
            prop="doctor"
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
            prop="mobile"
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
export default {
    name: 'List',
    data() {
        return {
            tableData: [{
                    userName: '王小虎',
                    gender: '男',
                    doctor: '张全',
                    bookDate: '2020-1-20',
                    mobile: '13242270901',
                    reason: '肚子痛',
                    status: '正在进行',
                },
                {
                    userName: '王二虎',
                    gender: '女',
                    doctor: '李冰',
                    bookDate: '2020-1-19',
                    mobile: '13242270901',
                    reason: '肚子痛',
                    status: '已完成',
                },
                {
                    userName: '王二虎',
                    gender: '女',
                    doctor: '王太利',
                    bookDate: '2020-1-29',
                    mobile: '13242270901',
                    reason: '肚子痛',
                    status: '已完成',
                },
                {
                    userName: '王二虎',
                    gender: '女',
                    doctor: '刘德华',
                    bookDate: '2020-1-28',
                    mobile: '13242270901',
                    reason: '肚子痛',
                    status: '待看诊',
                },
            ]

        }
    },
    methods: {
        look() {
            this.$router.push('/doctor/add')
        }
    }
}
</script>
