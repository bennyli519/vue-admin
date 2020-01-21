<!--
 * @Description: 
 * @Author: Benny
 * @Date: 2020-01-20 11:08:51
 * @LastEditTime : 2020-01-21 14:32:13
 -->
<template>
  <div class="dashboard-container">
    <div class="dashboard-left">
      <div class="dashboard-text">下午好，{{ name }}</div>
      <div class="content">
        “一切以病人为中心”是我院一贯的办院宗旨，我们坚持质量建院，把医疗质量作为医院生存发展的生命线。并提出了“质量靠管理、服务靠观念、水平靠创新，岗位靠竞争”等一系列管理理念，以管理促效益，向管理要质量，全面提高医疗质量和服务水平。" 
      </div>
      <div class="content1">
        艰苦创业&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求真务实&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;勇于开拓
      </div>
    </div>
    <div>
      <img src="../../assets//404_images/1.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-left{
    width: 800px;
    .content{
      margin-top: 20px;
      letter-spacing: 2px;
      font-size: 16px;
      color:#666;
    }
    .content1{
      font-size: 14px;
      margin-top: 80px;
      color:red;
    }
  }
  &-container {
    display: flex;
    justify-content: space-around;
    img{
      height: 90vh;
    }
    // margin: 30px;
  }
  &-text {
    margin-top: 100px;
    font-size: 30px;
  }
}
</style>
