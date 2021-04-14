<template>
  <view>
    <uni-search-bar
      @confirm="search"
      :radius="100"
      @input="input"
    ></uni-search-bar>
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y="true"
      class="scroll"
      @scrolltolower="handerToLower"
    >
      <view class="item" v-for="item in dataList" :key="item.id">
        <view class="first">
          <image :src="item.head!=null? item.head:head"></image>
          <text>{{ item.name }}</text>
          <view class="button">{{ item.type ?  "出售" : "提问" }}</view>
        </view>
        <text class="title">{{ item.title }}</text>
        <text class="content">{{ item.content }}</text>
        <view class="second">
          <image :style="{ marginLeft:'45rpx' , height: item.pic? '280rpx':'30rpx'}" :src="item.pic" mode="heightFix"></image>
          <text class="price" v-show="item.type">￥{{ item.price }}</text>
        </view>
        <view class="third">
          评论数：{{ item.count }}
          <text class="time"> 2020-02-06 12:00 </text>
        </view>
        <view class="space" v-show="(item.id+1)!=dataList.length"></view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import { uniSearchBar } from "@dcloudio/uni-ui";
export default {
  components: { uniSearchBar },
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
      dataList: [
        {
          id:0,
          head: require("../../static/mine.png"),
          name: "陈章琦",
          title: "哈哈哈哈哈",
          content: "哈哈哈哈哈哈哈哈哈哈哈哈",
          type: 1,
          pic: null,
          price: 16,
          comment: 10,
        },
        {
          id:1,
          head: require("../../static/home.png"),
          name: "陈章琦2",
          title: "哈哈哈哈哈",
          content: "哈哈哈哈哈哈哈哈哈哈哈哈",
          type: 0,
          pic: require("../../static/pic.jpg"),
          count: 20,
        },
        {
          id:2,
          head: null,
          name: "陈章琦",
          title: "哈哈哈哈哈",
          content: "哈哈哈哈哈哈哈哈哈哈哈fdfdsfffffffffffffffdssssssssssds哈",
          type: 1,
          pic: null,
          price: 16,
          count: 10,
        },
        {
          id:3,
          head: require("../../static/home.png"),
          name: "陈章琦2",
          title: "哈哈哈哈哈",
          content: "哈哈哈哈哈哈哈哈哈哈哈哈",
          type: 0,
          pic: require("../../static/pic.jpg"),
          count: 20,
        },
      ],
      head:require("../../static/head.png")
    };
  },
  mounted(){
    this.getList();
  },
  methods: {
    //得到列表
    getList(){
            this.request({
                url:"http://localhost:8181/onshow/listAll",
                methods:'get',
            }).then(result=>{
                console.log(result)
                this.dataList=result.data;
             
            })
        },
    input: function (value) {
      console.log(value); //搜索框输入改变则调用
    },
    search: function (value) {
      console.log(value); //搜索则调用
    },
    handerToLower: function () {
      console.log("哈哈哈哈哈哈哈");
    },
  },
};
</script>

<style  lang="scss" scoped>
view {
  uni-search-bar {
  }

  .scroll {
    height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      .first {
        display: flex;
        align-items: center;
        margin-left: 45rpx;
        margin-top: 20rpx;
        image {
          width: 70rpx;
          height: 70rpx;
          border: white solid 3rpx;
          border-radius: 50%;
        }
        text {
          margin-left: 10rpx;
          font-weight: bold;
          color: $fontcolorgray;
        }

        .button {
          width: 140rpx;
          height: 70rpx;
          border-radius: solid 1rpx black;
          border-radius: 30rpx;
          background-color: $deepcolor;
          color: white;
          position: absolute;
          right: 40rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
      }

      .title {
        font-size: 36rpx;
        font-weight: bold;
        margin-left: 65rpx;
        margin-top: 20rpx;
        text-overflow: ellipsis;
	      overflow: hidden;
        white-space: nowrap;
        display: block;
        margin-right: 45rpx;
      }

      .content {
        margin-left: 45rpx;
        margin-bottom: 20rpx;
        text-overflow: ellipsis;
	      overflow: hidden;
        white-space: nowrap;
        display: block;
        margin-right: 45rpx;
      }

      .second {
        .pic1 {
          margin-left: 30rpx;
          height: 280rpx;
        }

        .price {
          position: absolute;
          right: 30rpx;
          color: red;
          font-size: 40rpx;
          font-weight: bold;
        }
      }
      .third {
        font-size: 25rpx;
        margin-left: 30rpx;
        color: $deepgray;
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        display: flex;
        .time {
          position: absolute;
          right: 30rpx;
        }
      }
      .space {
        width: 100%;
        height: 15rpx;
        background: $lightgray;
        margin-top: 10rpx;
      }
    }
  }
}
</style>