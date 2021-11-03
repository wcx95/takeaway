<template>
  <div class="product-list">
        <div class="product-title">热销</div>
        <div class="hotsale">
          <div class="hot-list">
            <dl>
              <dd v-for="item in ShopList.item.product" :key="item.id">
                <div class="pro-img"><img :src="item.imgUrl"></div>
                <div class="pro-info">
                  <div class="pro-title">{{item.title}}</div>
                  <div class="pro-intro">{{item.intro}}</div>
                  <div class="sale">
                    <span v-for="inneritem in item.intro.sale" :key="inneritem">{{inneritem}}</span>
                  </div>
                  <div class="price">
                    <span class="one-price">￥{{item.price}}</span>
                    <span>/1杯起</span>
                  </div>
                  <div class="choose">
                    <span class="sub" @click="() => { changeCartItemInfo(shopId, item.id, item,-1) }"></span>
                    <span class="num">{{cartList?.[shopId]?.[item.id]?.count || 0}}</span>
                    <span class="add" @click="() => { changeCartItemInfo(shopId, item.id, item,1) }"></span>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
          <span class="warn">已经到底啦</span>
        </div>
      </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'
export default {
  name: 'Content',
  props: ['ShopList'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartList, changeCartItemInfo } = useCommonCartEffect()
    return {
      cartList, changeCartItemInfo, shopId
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.product-list{
      display: flex;
      flex: 1 1 auto;
      overflow: hidden;
      position: relative;
      .product-title{
        position: absolute;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        font-size: 12px;
        background-color: #fff;
        color: #333333;
      }
      .hotsale{
        display: flex;
        flex: 1 1;
        flex-direction: column;
        .hot-list{
          margin-top: 30px;
          background-color: #fff;
          dl{
            padding: 0 10px;
            dd{
              padding-bottom: 22px;
              display: flex;
              justify-content: space-between;
              .pro-img{
                width: 75px;
                height: 75px;
                img{
                  width: 75px;
                  height: 75px;
                }
              }
              .pro-info{
                flex: 1;
                padding-left: 10px;
                margin-top: -5px;
                display: flex;
                flex-direction: column;
                position: relative;
                width: 0;
                // @include ellipsis;
                .pro-title{
                  font-size: 16px;
                  color: #333333;
                  font-weight: bold;
                  @include ellipsis;
                  line-height: 22.5px;
                }
                .pro-intro{
                  margin-bottom: 3px;
                  line-height: 15px;
                  font-size: 11px;
                  color: #666666;
                  @include ellipsis;
                }
                .sale{
                  margin-bottom: 3px;
                  height: 15px;
                  line-height: 15px;
                  font-size: 11px;
                  color: #666;
                  span{
                    margin-right: 5px;
                  }
                }
                .price{
                  font-size: 12px;
                  color: #999;
                  .one-price{
                    color: #fb4e44;
                    font-size: 18px;
                  }
                }
                .choose{
                  position: absolute;
                  right: 0;
                  bottom: -2px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .sub,.add{
                    width: 5.33333333vw;
                    height: 5.33333333vw;
                    border-radius: 1.6vw;
                    border: 1px solid #FFCC33;
                    background-repeat: no-repeat;
                    background-size: 2.66666667vw;
                    background-position: center center;
                  }
                  .sub{
                    background-image: url("../../assets/sub.png");
                  }
                  .add{
                    background-image: url("../../assets/add.png");
                    background-color: #FFCC33;
                  }
                  .num{
                    width: 10vw;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        .warn{
          display: flex;
          padding: 5px 10px;
          padding-bottom: 150px;
          justify-content: center;
          align-items: center;
          font-size: 11px;
          color: #999999;
        }
        .warn::before{
          content: '';
          flex: 1 1;
          height: 1px;
          background-color: #e4e4e4;
        }
        .warn::after{
          content: '';
          flex: 1 1;
          height: 1px;
          background-color: #e4e4e4;
        }
      }
    }
</style>
