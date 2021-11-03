<template>
  <div class="bgpic">
    <div class="back" @click="handelBackClick">
      <i class="iconfont">&#xe600;</i>
    </div>
  </div>
  <div class="shopinfo">
    <div class="shop-img"><img :src="ShopList.item.imgUrl"></div>
    <div class="shop-name">{{ShopList.item.name}}</div>
    <div class="info1">
      <div>
        <span class="star"><img src="../../assets/star.png" alt="icon"></span>
        <span class="score">{{ShopList.item.score}}</span>
        <span class="time">配送约{{ShopList.item.time}}</span>
      </div>
    </div>
    <div class="info2">
      <div class="wrap">
        <span v-for="item in ShopList.item.info3" :key="item">{{item}}</span>
      </div>
    </div>
    <div class="info3">
      <span class="notice">
        公告：
        {{ShopList.item.notice}}
      </span>
      <i class="iconfont">&#xeb8b;</i>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

// 点击返回上个页面的函数
const useBackEffect = () => {
  const router = useRouter()
  const handelBackClick = () => {
    // 退回上一个
    router.back()
  }
  return handelBackClick
}

export default {
  name: 'ShopInfo',
  props: ['ShopList'],
  setup () {
    const handelBackClick = useBackEffect()
    return { handelBackClick }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.bgpic{
  position: relative;
  color: rgb(255, 255, 255);
  height: 111.5px;
  background: linear-gradient(rgba(34, 36, 38, 0.5), rgba(34, 36, 38, 0.5)), url("../../assets/shopbgpic.png") center top / cover no-repeat;
  .back{
    width: 40px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
  }
}
.shopinfo{
    box-sizing: border-box;
    font-size: 0.08rem;
    margin-top: -8.4vw;
    min-height: 10.66666667vw;
    position: relative;
    background: white;
    width: 100%;
    padding: 3.33333333vw 4.26666667vw;
    border-radius: 3.2vw 3.2vw 0 0;
    .shop-img{
        position: absolute;
        right: 4.26666667vw;
        top: -1.6vw;
        width: 17.33333333vw;
        height: 17.33333333vw;
        border-radius: 1.6vw;
        img{
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
    }
    .shop-name{
        width: 67.73333333vw;
        font-size: 5.33333333vw;
        color: #222426;
        line-height: 7.46666667vw;
        font-weight: 400;
        @include ellipsis;
    }
    .info1{
      display: flex;
      margin-top: 3px;
      .star{
        display: inline-block;
        img{
          width: 11px;
          height: 11px;
        }
      }
      .score{
        margin-left: .04rem;
        color: #FF8000;
        font-weight: 600;
      }
      .time{
        margin-left: 10px;
        font-size: 2.66666667vw;
        color: #858687;
      }
    }
    .info2{
      margin-top: 3.2vw;
      display: flex;
      color: #fb4e44;
      .wrap{
        display: flex;
        flex: 0 0 auto;
        border: .3px solid #fb4e44;
        border-radius: 2px;
          span{
            display: inline-block;
            padding: 0 .02rem;
            height: .16rem;
            line-height: .16rem;
          }
          span:not(:first-child){
            border-left: .5px solid #fb4e44;
          }
      }
    }
    .info3{
      display: flex;
      font-size: 2.93333333vw;
      .notice{
        height: 3.73333333vw;
        margin-top: 1.6vw;
        max-width: 88vw;
        color: #858687;
        @include ellipsis;
      }
      .iconfont{
        font-size: 5.93333333vw;
      }
    }
}
</style>
