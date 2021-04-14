<template>
  <view class="main">
    <view class="author">
      <image class="head" src="../../../static/mine.png"></image>
      <text>陈章琦</text>
    </view>
    <text>如何快速合法的挣到一百万？</text>
    <text v-if="isText">详细情况：发发发加快进度付款的JFK的JFK搭街坊卡拉的</text>
    <image mode="heightFix" class=imgcontent v-if="isPic" src="../../../static/pic.jpg"></image>
    <text>1338个回复</text>

    <text>评论</text>
    <view class="command" v-for="item in dataList" :key="item.id">
      <view class="first">
        <image src="../../../static/mine.png"></image>
        <view>
          <text>czq</text>
          <text>回复回复回复</text>
        </view>
        <image class="more" src="../../../static/more.png">
        </image>   
      </view>
      <view class="last">
        <text class="time"></text>
        <text class="likenumber">3</text>
        <image class="like" src="../../../like.png"></image>
        <image class="dislike" src="../../../dislike.png"></image>
        <image class="answer"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isPic: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
 .author {
    .head {
        width: 70rpx;
        height: 70rpx;
    }

    text {

    }
  }

  text {

  }

  .imgcontent {
      height: 280rpx;
  }

  .command {
    .first {
      image {

      }

      view {
        text {

        }
      }

      .more {

      }
    }

    .last {
     .time {

      }

      .likenumber {

      }

      .like {

      }

      .dislike {

      }

      .answer {

      }
    }
  }
}
</style>