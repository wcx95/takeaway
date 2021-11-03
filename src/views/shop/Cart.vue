<template>
  <!-- 是否显示蒙版 -->
  <div class="mask" v-if="showCart"></div>
  <div class="cart">
    <!-- 是否显示清空购物车和全选按钮 -->
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            v-bind:class="{ allchoose:allChecked}"
          >
          &#xe67f;
          </span>
          全选
        </div>
        <div
          class="product__header__clear iconfont"
          @click="() => cleanCartProducts(shopId)"
        >&#xe646;清空购物车</div>
      </div>

      <div
        v-for="item in productList"
        :key="item.id"
      >
        <div class="product__item" v-if="item.count > 0">
          <div class="iconfont product__item__checked"
            v-bind:class="{ allchoose:item.check}"
            @click="()=>{changeCartItemChecked(shopId,item.id)}"
          >
          &#xe67f;
          </div>
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.title}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItemInfo(shopId, item.id, item, -1) }"
            ></span>
            <span>{{item.count || 0}}</span>
            <span
              class="product__number__plus"
              @click="() => { changeCartItemInfo(shopId, item.id, item, 1) }"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <div class="check" @click="handleCartShowChange">
      <div class="check__icon">
        <img
          src="../../assets/cart.png"
          class="check__icon__img"
        />
        <!-- handleCartShowChange 点击购物车是否显示商品 -->
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'
// 获取购物车商品的逻辑处理
const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList
  // 计算商品数量
  const total = computed(() => {
    const productList = cartList[shopId]
    // console.log(productList)
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          count += product.count
        }
      }
    }
    return count
  })
  // 计算商品总价
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          // 反选的信息要做一下判断
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })
  // 计算购物车展示的内容
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  // 计算全选还是没全选
  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.check) {
          result = false
        }
      }
    }
    // console.log(result);
    return result
  })
  // 选择购物车中的内容
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }
  // 清空购物车
  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }
  // 全选功能
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  return {
    total,
    price,
    productList,
    allChecked,
    changeCartItemChecked,
    changeCartItemInfo,
    cleanCartProducts,
    setCartItemsChecked
  }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const showCart = ref(false)
    const handleCartShowChange = () => {
      showCart.value = !showCart.value
    }
    const {
      total, price, productList, setCartItemsChecked, allChecked,
      changeCartItemInfo, changeCartItemChecked, cleanCartProducts
    } = useCartEffect(shopId)
    console.log(productList)
    return {
      total,
      price,
      shopId,
      productList,
      showCart,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      allChecked,
      handleCartShowChange
    }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.mask{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: rgba(0,0,0,0.5);
  z-index:1;
}
.cart {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 80px;
  border-radius: 3.2vw 3.2vw 0 0;
  background-color: #fff;
}
.product {
  margin-bottom: 0.8rem;
  font-size: 16px;
  .allchoose{
    color: #f8c74e;
    vertical-align: middle;
  }
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid #F1F1F1;
    font-size: .14rem;
    color: #333;
    &__all {
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon {
      display: inline-block;
      font-size: .2rem;
      vertical-align: middle;
    }
    &__clear {
      font-size: 3.2vw;
      color: #666666;
      flex: 1;
      margin-right: .16rem;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #F1F1F1;
    &__checked{
      margin:.1rem .1rem 0 0;
      font-size: 0.2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      // color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      color: #fb4e44;
      font-size: 18px;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      // color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      display: flex;
      width: 18.7vw;
      justify-content: space-between;
      align-items: center;
      &__minus, &__plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus,&__plus{
        width: 5.33333333vw;
        height: 5.33333333vw;
        border-radius: 1.6vw;
        border: 1px solid #FFCC33;
        background-repeat: no-repeat;
        background-size: 2.66666667vw;
        background-position: center center;
      }
      &__minus {
        background-image: url("../../assets/sub.png");
      }
      &__plus {
        background-image: url("../../assets/add.png");
        background-color: #FFCC33;
      }
    }
  }
}
.check {
  position: absolute;
  bottom: 11px;
  display: flex;
  width: 100%;
  height: 0.49rem;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: 12.53333333vw;
    height: 18.4vw;
    top: -2.66666667vw;
    margin: 0 2.66666667vw;
    &__img {
      display: block;
      width: 12.53333333vw;
      height: 18.4vw;
    }
    &__tag {
      position: absolute;
      background-color: #FB4E44;
      right: -5px;
      top: 36px;
      width: 8vw;
      height: 8vw;
      line-height: 8vw;
      text-align: center;
      font-size: 16px;
      color: #fff;
      transform: scale(0.5) translate(50%, -50%);
      border-radius: 50%;
    }
  }
  &__info {
    flex: 1;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      font-size: .18rem;
      color: #FB4E44;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #f8c74e;
    text-align: center;
    color: #333;
    font-size: .14rem;
  }
}
</style>
