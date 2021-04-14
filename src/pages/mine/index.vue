<template>
  <view class="main">
    <view class="head">
      <image src="../../static/head.png"></image>
      <text class="nickname">陈章琦</text>
      <navigator class="personaldata" url="/pages/mine/persondata/index">
        个人资料>
      </navigator>
    </view>
    <view class="middle">
      <view
        :class="index === key ? 'question2' : 'question'"
        v-for="(item, key) in titleList"
        :key="key"
        @click="handleItem(key)"
      >
        <text class="number">{{ item.number }}</text>
        <text class="name">{{ item.name }}</text>
      </view>
      <!-- <view class="[choose[1]? 'question':'question2']" @click="handleItem(index)">
        <text class="number">1</text>
        <text class="name">我的回答</text>
      </view>
      <view class="[choose[2]? 'question':'question2']" @click="handleItem(index)">
        <text class="number">1</text>
        <text class="name">我的收藏</text>
      </view>
      <view class="[choose[3]? 'question':'question2']" @click="handleItem(index)">
        <text class="number">1</text>
        <text class="name">最近浏览</text>
      </view>
       <view class="[choose[4]? 'question':'question2']" @click="handleItem(index)">
        <text class="number">1</text>
        <text class="name">我的商品</text>
      </view>
      <view class="[choose[5]? 'question':'question2']" @click="handleItem">
        <text class="number">1</text>
        <text class="name">购买记录</text>
      </view> -->
    </view>
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y="true"
      class="scroll"
      @scrolltolower="handerToLower"
    >
      <view class="item" v-for="item in itemList" :key="item.id">
        <!-- <view class="time" v-if="index===3||index===5">
          <text>{{item.time}}</text>
        </view> -->
        <view class="first">
          <image src="../../static/commodity.png" mode="widthFix"></image>
          <text class="title">{{ item.title }}</text>
        </view>
        <text class="content">{{ item.content }}</text>
        <view class="third">
          评论数：{{ item.comment }}
          <text class="time"> 2020-02-06 12:00 </text>
        </view>
        <view class="space" v-show="item.id + 1 != itemList.length"></view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  methods: {
    lookperson() {},
    handerToLower() {
      console.log("到底啦");
    },
    handleItem(key) {
      this.index = key;
      console.log(this.index);
    },
  },
  data() {
    return {
      choose: [true, false, false, false, false, false],
      index: 0,
      titleList: [
        {
          id: 1,
          name: "我的问题",
          number: "1",
        },
        {
          id: 2,
          name: "我的回答",
          number: "1",
        },
        {
          id: 3,
          name: "我的收藏",
          number: "1",
        },
        {
          id: 4,
          name: "浏览记录",
          number: "1",
        },
        {
          id: 5,
          name: "我的商品",
          number: "1",
        },
        {
          id: 6,
          name: "购买记录",
          number: "1",
        },
      ],

      itemList: [
        {
          id: 0,
          image: require("../../static/commodity.png"),
          title: "明天可以放假了吗？",
          content: "还不能放假，崩溃",
          comment: 123,
        },
        {
          id: 1,
          image: require("../../static/commodity.png"),
          title: "后天可以放假了吗？",
          content: "还不能放假，崩溃",
          comment: 123,
        },
        {
          id: 2,
          image: require("../../static/commodity.png"),
          title: "大后天可以放假了吗？",
          content: "还不能放假，崩溃",
          comment: 123,
        },
        {
          id: 3,
          image: require("../../static/commodity.png"),
          title: "大大后天可以放假了吗？",
          content: "可以可以可以可以，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          comment: 123,
        },
      ],
    };
  },
  mounted() {
    console.log(this.itemList.length);
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  .head {
    width: 100%;
    height: 16%;
    display: flex;
    align-items: center;
    image {
      width: 90rpx;
      height: 90rpx;
      margin-left: 40rpx;
      margin-right: 50rpx;
      border: white solid 3rpx;
      border-radius: 50%;
    }
    .nickname {
      font-weight: bold;
      font-size: 40rpx;
      color: $fontcolorgray;
    }
    .personaldata {
      position: absolute;
      right: 40rpx;
      font-size: 25rpx;
    }
  }

  .middle {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20rpx;
    padding-bottom: 20rpx;
    border-bottom:  $lightgray solid 1rpx;
    margin-right: 20rpx;
    .question {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 60rpx;
      float: left;
      margin-bottom: 10rpx;
      .number {
        font-size: 45rpx;
        font-weight: bold;
      }

      .name {
        font-size: 25rpx;
      }
    }
  }
  .scroll {
    height: calc(100vh-302rpx);
    width: 100%;
    .item {
      width: 100%;
      height: 32%;
      .first {
        padding-top: 30rpx;
        margin-left: 30rpx;
        padding-bottom: 20rpx;
        display: flex;
        image {
          width: 40rpx;
          margin-right: 20rpx;
        }

        .title {
          font-size: 36rpx;
          font-weight: bold;
          margin-right: 35rpx;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          display: block;
        }
      }

      .content {
        color: #000;
        margin-left: 50rpx;
        margin-right: 35rpx;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
      }

      .third {
        margin-left: 30rpx;
        color: $deepgray;
        margin-top: 30rpx;
        margin-bottom: 30rpx;
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
      }
    }
  }
}

.question2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 55rpx;
  float: left;
  color: $basecolor;
  margin-bottom: 10rpx;
  .number {
    font-size: 45rpx;
    font-weight: bold;
  }

  .name {
    font-size: 25rpx;
  }
}
</style>