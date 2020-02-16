<!--
 * @Author: Benny
 * @Date: 2020-01-19 22:07:52
 * @Description:
 * @LastEditTime : 2020-02-16 14:07:23
 -->

<template>
    <div class="index">
       <div id="office" ref="office" style="width: 600px;height: 400px;"></div>
       <div>医院病历记录共有{{Rdata.totalCount}}条</div>其中
       <span v-for="(item,i) in Rdata.dataList" :key="i">{{item.office.o_name}}x{{item.count}}<span v-if="i<Rdata.dataList.length-1">、</span></span>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
import { getCheck } from '@/api/statistic'
 import echarts from 'echarts'
export default {

    name: 'Index',
    data() {
        return {
          Rdata:{}
        };
    },
    mounted(){
      getCheck().then(res=>{
        console.log(res)
        if(res.status){
          this.Rdata = res.data;
          this.officeTotal(res.data)
        }
      })
    },
    methods: {
      officeTotal(data){
        let office = this.$refs.office;
        let myChart  = echarts.init(this.$refs.office)
        let list = data.dataList.map(res=>{
          console.log(parseInt(res.count))
          this.Rdata.totalCount += parseInt(res.count);
          return {
            value:res.count,
            name:res.office.o_name
          }
        })
        let option = {
            title: {
                text: '医院病历记录数',
                subtext: '科室统计',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: data.officeList
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data:list,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option)
      }
    }
};
</script>
