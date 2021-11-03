<template>
  <!------------------------ 头部 ---------------------------->
  <div id="header">
    <div class="address">华东交通大学北区<i class="iconfont ico-jiantou">&#xe62d;</i></div>
    <div class="search">
      <i class="iconfont ico-search">&#xe62b;</i>
      <input type="text" placeholder="请输入商家或商品名称">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Head'
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
#header{
    position: fixed;
    z-index: 15;
    top: 0;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    padding: 1.6vw 3.2vw 0px;
    background-color: #FFCC33;
    .address::before{
      content: '';
      width: 4vw;
      height: 4.26666667vw;
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      margin-right: 5px;
      background-image: url("../../assets/address.png");
    }
    .address{
      display: flex;
      height: 8vw;
      max-width: 90vw;
      @include ellipsis;
      align-items: center;
      font-weight: 400;
      font-size: 3.73333333vw;
      color: $title-fontcolor;
      line-height: 4.53333333vw;
      .ico-jiantou{
        font-size: 0.8vw;
        font-weight: 600;
      }
    }
    .search{
      position: relative;
      height: 8vw;
      font-size: 3.2vw;
      margin: 1.6vw 0px 4.26666667vw 0px;
      background: #fff;
      border-radius: 100px;
      .ico-search{
        position: absolute;
        left: 0;
        margin: 0 5px 0 11px;
        color: $content-fontcolor;
        font-size: 3.2vw;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }
      input{
        border: none;
        border-radius: 100px;
        box-sizing: border-box;
        padding:0 30px;
        width: 100%;
        height: 100%;
        font-size: 3.2vw;
        color: $content-fontcolor;
        opacity: 1;
      }
      input:focus{
        outline: none;
      }
    }
  }
</style>
