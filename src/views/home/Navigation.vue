<template>
  <!------------------------ 底部导航 ---------------------->
  <div id="bottom-nav">
    <div class="nav-list">
      <router-link class="nav" :to="`/`">
        <div class="ico-logo iconfont">&#xe64f;</div>
        <div class="list">首页</div>
      </router-link>
      <router-link class="nav" :to="`/user/order`">
        <div class="ico-logo iconfont">&#xe645;</div>
        <div class="list">订单</div>
      </router-link>
      <router-link class="nav" :to="`/user/my`">
        <div class="ico-logo iconfont">&#xe614;</div>
        <div class="list">我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
#bottom-nav{
  background: #fafafa;
  position: fixed;
  z-index: 10;
  width: 100%;
  bottom: 0;
 .nav-list{
   display: flex;
    .nav{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
      height: 0.49rem;
      .ico-logo{
        width: 0.3rem;
        height: 0.3rem;
        margin-top: 2px;
        display: inline-block;
        font-size: 7vw;
        text-align: center;
        color: $content-fontcolor;
      }
      .list{
        width: 0.3rem;
        color: $content-fontcolor;
        margin-bottom: 3px;
        font-size: 0.12rem;
        line-height: 0.14rem;
        width: 0.3rem;
        text-align: center;
        display: inline-block;
      }
   }
   .router-link-active{
     .ico-logo{
       color: #FFCC33;
     }
     .list{
       color: rgba(0, 0, 0, 0.747);
     }
   }
 }
}
</style>
