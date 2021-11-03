<template>
  <!---------- 分类 ----------->
    <div class="category">
      <div class="kind" v-for="item in KindList" :key="item.id">
        <div class="item" v-for="inneritem in item.kind" :key="inneritem.id">
          <div class="item-pic">
            <img :src="inneritem.imgUrl" alt="icon">
          </div>
          <div class="text1">{{inneritem.text}}</div>
        </div>
      </div>
    </div>
    <!---------- 附近商家 -------->
    <div class="near">附近商家</div>
    <!--- 按条件筛选商家 --->
    <div class="choose">
      <div class="choose-list">
        <ul>
          <li>综合排序<i class="sanjiao"></i></li>
          <li>销量最高</li>
          <li>距离最近</li>
          <li>筛选<i class="sanjiao"></i></li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Category',
  setup () {
    const KindList = [
      {
        id: 1,
        kind: [
          {
            id: 1,
            imgUrl: require('../../assets/美食.png'),
            text: '美食'
          },
          {
            id: 2,
            imgUrl: require('../../assets/超市.png'),
            text: '超市'
          },
          {
            id: 3,
            imgUrl: require('../../assets/生鲜果蔬.png'),
            text: '生鲜果蔬'
          },
          {
            id: 4,
            imgUrl: require('../../assets/专送.png'),
            text: '专送'
          },
          {
            id: 5,
            imgUrl: require('../../assets/快餐简餐.png'),
            text: '快餐简餐'
          }
        ]
      },
      {
        id: 2,
        kind: [
          {
            id: 1,
            imgUrl: require('../../assets/晚餐优选.png'),
            text: '晚餐优选'
          },
          {
            id: 2,
            imgUrl: require('../../assets/甜点饮品.png'),
            text: '甜点饮品'
          },
          {
            id: 3,
            imgUrl: require('../../assets/家常小菜.png'),
            text: '家常小菜'
          },
          {
            id: 4,
            imgUrl: require('../../assets/小吃馆.png'),
            text: '小吃馆'
          },
          {
            id: 5,
            imgUrl: require('../../assets/鲜花蛋糕.png'),
            text: '鲜花蛋糕'
          }
        ]
      }
    ]
    return { KindList }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.category{
    margin-bottom: 15px;
    .kind{
      display: flex;
      justify-content: space-around;
      .item{
        .item-pic{
          width: 0.44rem;
          height: 0.44rem;
          margin-bottom: 5px;
          margin-top: 15px;
          img{
            width: 0.44rem;
            height: 0.44rem;
          }
        }
        .text1{
          width: 0.44rem;
          line-height: 1.4;
          white-space: nowrap;
          font-size: 0.11rem;
          opacity: 0.8;
          color: #222426;
          text-align: center;
        }
      }
    }
  }
  .near{
    font-size: 4.8vw;
    font-weight: 400;
    margin-top: 4.8vw;
    margin-bottom: 3.2vw;
    padding-left: 3.2vw;
  }
  .choose{
    .choose-list{
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7.46666667vw;
        padding: 1.33333333vw 3.2vw 1.6vw 3.2vw;
        li{
          text-align: center;
          font-size: 3.2vw;
        }
        .sanjiao{
          display: inline-block;
          width: 0;
          height: 0;
          border-width: 5px;
          margin-left: 5px;
          vertical-align: bottom;
          border-style: solid dashed dashed dashed;
          border-color: rgb(175, 175, 175) transparent transparent transparent;
        }
      }
    }
    .choose-list::after{
      display: block;
      content: "";
      height: 1px;
      width: 95vw;
      margin: 0 auto;
      background: #e4e4e4;
  }
  }
</style>
