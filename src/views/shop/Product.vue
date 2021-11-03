<template>
  <div class="products">
    <div class="nav">
      <div class="nav-item">
        <div class="menu">点菜</div>
        <div class="repo">评价</div>
        <div class="business">商家</div>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索">
        <i class="iconfont">&#xe62b;</i>
      </div>
    </div>
    <div class="product">
      <div class="category">
        <a class="show-prolist"
        v-for="(item,index) in ShopList.item.categories"
        :key="index"
        :class="{active:index==currentTab}"
        @click="()=>handleTabClick(index)"
        >{{item}}</a>
      </div>
      <Content :ShopList="ShopList"/>
    </div>
  </div>
</template>
<script>
import Content from './Content.vue'
import { ref } from 'vue'

const useTabEffect = () => {
  const currentTab = ref(0)
  const handleTabClick = (index) => {
    currentTab.value = index
  }
  return { currentTab, handleTabClick }
}
export default {
  name: 'Product',
  components: { Content },
  props: ['ShopList'],
  setup () {
    const { currentTab, handleTabClick } = useTabEffect()
    // console.log(currentTab)
    return { currentTab, handleTabClick }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.products{
  display: flex;
  flex-direction: column;
  font-size: 16px;
  flex: 1 0 auto;
  height: 100vh;
  .nav{
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 40px;
    min-height: 40px;
    background-color: #ffffff;
    .nav-item{
      display: flex;
      flex: 0 0 60%;
      div{
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .menu::after{
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0px;
        left: 50%;
        width: 20px;
        margin-left: -10px;
        border-bottom: solid 2px #ffd300;
      }
    }
    .search{
      flex: 0 0 57px;
      display: flex;
      margin: 0 10px;
      position: relative;
      background: #fff;
      border-radius: 100px;
      input{
        width: 100%;
        background: #eee;
        align-self: center;
        border: none;
        height: 25px;
        padding-left: 23px;
        box-sizing: border-box;
        border-radius: 15px;
        overflow: hidden;
        font-size: 12px;
        opacity: 1;
      }
      .iconfont{
        position: absolute;
        font-size: 13px;
        top: 13px;
        left: 6px;
      }
    }
  }
  .nav::after{
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #e4e4e4;
  }
  .product{
    display: flex;
    .category{
      min-height: 100%;
      display: flex;
      flex: 0 1 80px;
      height: 100%;
      flex-direction: column;
      margin-left: -15px;
      padding-left: 15px;
      background: #f5f5f5;
      .active{
        background-color: #fff;
      }
      a{
        line-height: 20px;
        padding: 12px 10px;
        color: #666666;
        font-size: 14px;
        text-align: left;
        font-size: 13px;
        .iconfont{
          color: rgba(247, 52, 26, 0.87);
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
