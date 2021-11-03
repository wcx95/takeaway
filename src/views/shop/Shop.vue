<template>
  <div class="main">
    <ShopInfo
    :ShopList="ShopList"
    />
    <Product
    :ShopList="ShopList"
    />
    <Cart />
  </div>
</template>
<script>
import ShopInfo from './ShopInfo.vue'
import Product from './Product.vue'
import Cart from './Cart.vue'
import { get } from '../../untils/request'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const useShopEffect = () => {
  const route = useRoute()
  const ShopList = reactive({ item: {} })
  const getList = async () => {
    const result = await get('/api/products')
    if (result?.error === 0 && result?.data?.length) {
      for (const i in result.data) {
        const id = String(result.data[i].id)
        if (id === `${route.params.id}`) {
          ShopList.item = result.data[i]
        }
      }
    }
  }
  return { ShopList, getList }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Product, Cart },
  setup () {
    const { ShopList, getList } = useShopEffect()
    getList()
    return { ShopList }
  }
}
</script>
<style scoped lang="scss">
.main{
  width: 100vw;
  height: 100vh;
}
</style>
