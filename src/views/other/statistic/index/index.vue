<!--
 * @Author: Benny
 * @Date: 2020-01-19 22:07:52
 * @Description:
 * @LastEditTime : 2020-02-12 22:50:47
 -->

<template>
    <div class="index">
       <div id="office" ref="office" style="width: 600px;height: 400px;"></div>
       <div>医院病历记录共有xx条，其中妇产科x5</div>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
 import echarts from 'echarts'
export default {

    name: 'Index',
    data() {
        return {

        };
    },

    methods: {
      officeTotal(){
        let office = this.$refs.office;
        let myChart  = echarts.init(this.$refs.office)

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
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ],
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
    },
    mounted() {
      this.officeTotal()
    },
};
</script>
