<template>
  <Head />
  <div id="main">
    <Category />
    <Nearby />
  </div>
  <Navigation />
</template>
<script>
import Head from './Header.vue'
import Category from './Category.vue'
import Nearby from './Nearby.vue'
import Navigation from './Navigation.vue'
export default {
  name: 'Home',
  components: { Head, Category, Nearby, Navigation }
}
</script>
<style scoped lang="scss">
#main{
  font-size: 16px;
  padding-top: 24.8vw;
  padding-bottom: 13.33333333vw;
}
</style>
