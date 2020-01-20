<template>
    <el-table :data="tableData"  style="width:60%" stripe >
        <el-table-column prop="bookDate" column-key="bookDate" sortable label="预约时间" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="gender" label="用户性别" width="100" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" align="center">
        </el-table-column>
         <el-table-column prop="reason" label="患者自述" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
           <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="look">看诊</el-button>
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
                gender:'男',
                age:20,
                bookDate: '2020-1-20',
                mobile:'13242270901',
                reason:'肚子痛'
            },
           {
                userName: '王二虎',
                gender:'女',
                age:20,
                bookDate: '2020-1-19',
                mobile:'13242270901',
                reason:'肚子痛'
            },
              {
                userName: '王二虎',
                gender:'女',
                age:20,
                bookDate: '2020-1-29',
                mobile:'13242270901',
                reason:'肚子痛'
            },
                  {
                userName: '王二虎',
                gender:'女',
                age:20,
                bookDate: '2020-1-28',
                mobile:'13242270901',
                reason:'肚子痛'
            },
            ]

        }
    },
    methods:{
        look(){
            this.$router.push('/doctor/add')
        }
    }
}


</script>
