<template>
  <div class="main">
    <div class="head">
      <img src="../../assets/my.jpg">
      <p class="username">王宠贤</p>
    </div>
    <div class="program">
      <ul>
        <li>
          <img src="../../assets/my1.png" alt="ico">
          <p>美团红包</p>
        </li>
        <li>
          <img src="../../assets/my2.png" alt="ico">
          <p>收货地址</p>
        </li>
        <li>
          <img src="../../assets/my3.png" alt="ico">
          <p>常见问题</p>
        </li>
        <li>
          <img src="../../assets/my4.png" alt="ico">
          <p>美团协议与说明</p>
        </li>
        <li>
          <img src="../../assets/my5.png" alt="ico">
          <p>退出登录</p>
        </li>
      </ul>
    </div>
    <div class="service">
      <p>客服电话：10109777</p>
    </div>
    <div class="service-time">
      <p>服务时间：9:00-23:00</p>
    </div>
    <Navigation />
  </div>

</template>
<script>
import Navigation from '../home/Navigation.vue'
export default {
  name: 'Home',
  components: { Navigation }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.main{
  height: 100vh;
  background: #f0f0f0;
}
.head{
  width: 100%;
  padding: 10% 0 5%;
  background: url('../../assets/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 20%;
    height: 20%;
    border-radius: 50%;
  }
  .username{
    font-size: 16px;
    margin-top: 8px;
    cursor: pointer;
    color: #333333;
    max-width: 100%;
    @include ellipsis;
  }
}
.program{
  font-size: 16px;
  background-color: #fff;
  ul{
    width: 97%;
    margin-left: 3%;
    li{
      padding: 10px 0;
      border-bottom: 1px solid #e3e3e3;
      cursor: pointer;
      img{
        width: 15px;
        margin: 3px 10px 0 0;
        float: left;
      }
      p{
        font-size: 14px;
        line-height: 20px;
        color: $order-color;
      }
    }
    li::after{
      content: '>';
      float: right;
      margin-right: 22px;
      font-size: 18px;
      line-height: 18px;
      color: #AAAAAA;
      transform: scaleY(1.5) translateY(-75%);
    }
  }
}
.service{
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  color: #ffb000;
  padding: 10px 0;
  background: white;
}
.service-time{
  font-size: 12px;
  text-align: center;
  color: #999999;
  padding: 10px 0;
  margin-bottom: 65px;
}
</style>
