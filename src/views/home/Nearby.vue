<template>
  <!---------- 店铺信息 -------->
    <div class="shop">
      <ul>
        <li v-for="item in nearbyList" :key="item.id" >
          <router-link class="shoplink" :to="`/shop/${item.id}`">
            <div class="shop-img"><img :src="item.imgUrl"></div>
            <div class="sub-info">
              <div class="shop-name">{{item.name}}</div>
              <div class="info1">
                <div>
                  <span class="star"><img src="../../assets/star.png" alt="icon"></span>
                  <span class="score">{{item.score}}</span>
                  <span class="salehot">月售{{item.sale}}</span>
                </div>
                <div class="spend">
                  <span class="time">{{item.time}}</span>
                  <span class="distance">{{item.distance}}</span>
                </div>
              </div>
              <div class="info2">
                <span v-for="item2 in item.info2" :key="item2">{{item2}}</span>
              </div>
              <div class="info3">
                <div class="wrap">
                  <span v-for="item3 in item.info3" :key="item3">{{item3}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <!---------- 提示到底了 ------>
      <div class="warn">
        已无更多商户
      </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../untils/request'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/user/nearbylist')
    if (result?.error === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.shop{
    font-size: 11px;
    min-height: calc(100vh - 140px);
    ul{
      li{
        .shoplink{
          display: flex;
          padding: 12px;
          margin-bottom: 6px;
          .shop-img{
            width: 82px;
            height: 61px;
            position: relative;
            box-sizing: border-box;
            margin-right: 8px;
            flex-shrink: 0;
            overflow: hidden;
            img{
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 6px;
            }
          }
          .sub-info{
            flex: 1 0;
            .shop-name{
              font-size: 16px;
              color: #222426;
              line-height: 20px;
              width: 80%;
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
                margin-left: 4px;
                font-size: 14px;
                color: #FF8000;
                font-weight: 600;
              }
              .salehot{
                margin-left: 10px;
                @include subinfo;
              }
              .spend{
                flex: 1 0;
                text-align: right;
                @include subinfo;
                .distance{
                  margin-left: 3px;
                }
              }
            }
            .info2{
              margin-top: 4px;
              @include subinfo;
              span{
                margin-right: 5px;
              }
            }
            .info3{
              margin-top: 6px;
              display: flex;
              font-size: 10px;
              color: #fb4e44;
              .wrap{
                display: flex;
                flex: 0 0 auto;
                border: 1px solid #fb4e44;
                border-radius: 2px;
                  span{
                    display: inline-block;
                    padding: 0 3.5px;
                    height: 16px;
                    line-height: 16px;
                  }
                  span:not(:first-child){
                    border-left: 1px solid #fb4e44;
                  }
              }
            }
          }
        }
      }
    }
    .warn{
      text-align: center;
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .warn::before{
      content: '';
      height: 1px;
      width: 100px;
      background: #c4c4c4;
      margin-right: 5px;
    }
    .warn::after{
      content: '';
      height: 1px;
      width: 100px;
      background: #c4c4c4;
      margin-right: 5px;
    }
  }
</style>
