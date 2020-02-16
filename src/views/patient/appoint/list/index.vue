<!--
 * @Description: 看诊记录
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-02-16 15:09:35
 -->
<template>
    <div>
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
                      v-if="scope.row.status == '待取药'"
                      size="mini"
                      type="primary"
                      @click="getMedicine(scope.row)">取药</el-button>
                  <el-button
                      v-else-if="scope.row.status == '看诊结束'"
                      size="mini"
                      type="primary"
                      @click="getCase(scope.row)">我的病历</el-button>
                  <div v-else>暂无</div>
              </template>
          </el-table-column>
      </el-table>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          >
          <div>你要取得药品列表如下:</div><Br/>
          <div>{{this.cures}}</div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确认取药</el-button>
          </span>
        </el-dialog>
    </div>

</template>

<script>
import { getRecord,getMedicine,updateStatus } from '@/api/appoint'
import moment from 'moment';
export default {
    name: 'List',
    data() {
        return {
            tableData: [],
            dialogVisible:false,
            cures:"",
            appointId:'',

        }
    },
    created(){
      this.getRecord();
    },
    methods: {
      getRecord(){
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
      getMedicine(row){
        this.dialogVisible = true;
        this.appointId = row.appointId;
        getMedicine({
          patientId:row.patientId
        }).then(res=>{
          this.cures = res.data.c_cure;
          console.log(res)
        })
      },
      confirm(){
        updateStatus({
          appointId:this.appointId
        }).then(res=>{
          this.$message.success('取药成功,看诊状态改为看诊结束');
          this.getRecord();
          this.dialogVisible =false;
        })
      },
      getCase(row) {
          this.$router.push({
            path:'/case/detail',
            query:{
              patientId:row.patientId
            }
          })
      }
    }
}
</script>
