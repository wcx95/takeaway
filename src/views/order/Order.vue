<template>
  <ul>
    <li>
      <div>
        <div class="shop">
          <div class="shopimg"><img src="../../assets/shopimg.png"></div>
          <div class="shopname">轻食沙拉</div>
        </div>
        <div class="product">
          <div class="pro">
            <p class="pro-list">
              <span>双拼鸡胸谷物饭</span>
              <span class="part">x1</span>
            </p>
            <p class="time">
              2021-9-21 16:50
              <span class="price">实付¥16.08</span>
            </p>
          </div>
        </div>
        <div class="handle">
          <span class="state">已完成</span>
          <span class="delete">删除</span>
          <span class="again">再来一单</span>
        </div>
      </div>
    </li>
    <li>
      <div>
        <div class="shop">
          <div class="shopimg"><img src="../../assets/shopname1.png"></div>
          <div class="shopname">沙县小吃</div>
        </div>
        <div class="product">
          <div class="pro">
            <p class="pro-list">
              <span>鸡蛋炒米粉</span>
              <span class="part">x1</span>
            </p>
            <p class="time">
              2021-8-27 16:50
              <span class="price">实付¥13.80</span>
            </p>
          </div>
        </div>
        <div class="handle">
          <span class="state">已完成</span>
          <span class="delete">删除</span>
          <span class="again">再来一单</span>
        </div>
      </div>
    </li>
    <li>
      <div>
        <div class="shop">
          <div class="shopimg"><img src="../../assets/shopname2.png"></div>
          <div class="shopname">杨国富麻辣烫</div>
        </div>
        <div class="product">
          <div class="pro">
            <p class="pro-list">
              <span>墨鱼烧</span>
              <span class="part">x1</span>
            </p>
            <p class="pro-list">
              <span>腰花肠</span>
              <span class="part">x2</span>
            </p>
            <p class="pro-list">
              <span>经典骨汤</span>
              <span class="part">x1</span>
            </p>
            <p class="time">
              2021-8-23 16:50
              <span class="price">实付¥20.0</span>
            </p>
          </div>
        </div>
        <div class="handle">
          <span class="state">已完成</span>
          <span class="delete">删除</span>
          <span class="again">再来一单</span>
        </div>
      </div>
    </li>
  </ul>
  <Navigation />
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
ul{
  font-size: 14px;
  color: $order-color;
  background: #f0f0f0;
  padding: 0;
  border-top: none;
  height: 100vh;
  overflow: scroll;
  margin-bottom: 50px;
  li{
    padding-left: 15px;
    background-color: #fff;
    margin-bottom: 10px;
    div{
      .shop{
        padding: 10px 0;
        display: flex;
        position: relative;
        .shopimg{
          margin-right: 10px;
          width: 35px;
          height: 35px;
          img{
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }
        .shopname{
          flex: 1 0 0;
          font-size: 16px;
          padding: 5px 0 5px 0px;
        }
        .shopname::after{
          content: '';
          border: #999 solid 2px;
          position: absolute;
          right: 15px;
          top: 50%;
          margin-top: -5px;
          display: block;
          width: 8px;
          height: 8px;
          border-top: none;
          border-right: none;
          transform: rotate(225deg);
        }
      }
      .shop::after{
        border-top: 1px solid #d7d7d7;
        transform: scaleY(0.5);
        content: ' ';
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .product{
        padding: 10px 0;
        position: relative;
        display: flex;
        .pro{
          flex: 1 0 0;
          line-height: 1.8em;
          padding-right: 14px;
          color: black;
          font-size: 14px;
          .pro-list{
            .part{
              float: right;
            }
          }
          .time{
            font-size: 12px;
            color: #999;
            .price{
              font-size: 14px;
              float: right;
              color: black;
            }
          }
        }
        .pro::after{
          border-top: 1px solid #d7d7d7;
          content: ' ';
          display: block;
          width: 100%;
          position: absolute;
          left: 0;
          transform: scaleY(0.5);
          bottom: 0;
        }
      }
      .handle{
        position: relative;
        line-height: 27px;
        padding: 10px 0 10px 0px;
        height: 27px;
        display: flex;
        align-items: center;
        .state{
          flex: 1 0 0px;
          color: #999;
          font-size: 14px;
          @include ellipsis;
        }
        .delete{
          margin-right: 15px;
          background: #fff;
          line-height: 27px;
          border-radius: 3px;
          display: block;
          color: #858687;
          padding: 0 10px;
          border: 0.5px solid #d3d3d3;
          text-align: center;
          float: right;
        }
        .again{
          margin-right: 15px;
          float: right;
          border: solid 1px #FFD161;
          padding: 0 10px;
          border-radius: 3px;
          background-color: #FFD161;
        }
      }
    }
  }
}
</style>
