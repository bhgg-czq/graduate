<template>
  <view class="main">
    <view class="sale" @click="opensale">
      <text>出售</text>
    </view>
    <view class="question" @click="openquestion">
      <text>提问</text>
    </view>
    <view class="masking" v-if="showsale || showquestion"> </view>
    <view class="salepop" v-if="showsale || showquestion">
      <image
        class="cancel"
        mode="widthFix"
        src="../../static/cancel.png"
        @click="cancel"
      ></image>
      <image
        class="camera"
        mode="widthFix"
        src="../../static/camera.png"
      ></image>
      <text class="publish">发布</text>
      <view class="specific">
        <picker @change="bindPickerChange" :value="index" :range="array" v-if="isSale">
          <view class="uni-input">{{ array[index] }}</view>
        </picker>

        <input class="price" v-if="isSale" type="digit" placeholder="请输入商品价格" />
        <input class="title" placeholder="请输入标题" />
        <input class="content" placeholder="请进行详细描述（选填）" />
      </view>
    </view>
    <view class="questionpop" v-if="showquestion"> </view>

    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo1">登录获取用户信息1</button>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo2">登录获取用户信息2</button>
  </view>
  
</template>
<script>
export default {
  data() {
    return {
      showsale: false,
      showquestion: false,
      isSale:true,
      array: ["送货上门", "自提", "快递", "其他"],
      index: 0,
    };
  },
  methods: {
    opensale() {
      this.showsale = true;
      this.isSale=true;
    },
    openquestion() {
      this.showquestion = true;
      this.isSale=false;
    },
    cancel() {
      this.showsale = false;
      this.showquestion = false;
    },
    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.index = e.target.value;
    },
    //获取用户信息1(把加密数据给后端))
  onGotUserInfo1(value) { //value包含用户信息encryptedData, iv
    console.log(value)
    wx.login({ //登录
      success(res) {
        console.log(res)
        //获取res.code, encryptedData, iv数据传给后端
        wx.request({
          url: 'http://localhost:8080/wx/login',
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            code: res.code,
            encryptedData: value.detail.encryptedData,
            iv: value.detail.iv
          },
          success(result) {
            console.log("登录成功");
            console.log(result);
          },
          fail() {
            console.log("失败");
          }
        })
      },
      fail() {
        console.log("登录失败");
      }
    })
  },


  //获取用户信息2(直接把用户数据传给后端)
  onGotUserInfo2(value) { //value.detail.rawData包含用户信息
    var that = this;
    console.log(value)
    wx.showLoading({
      title: '正在登录'
    });

    wx.login({ //登录
      success(res) {
        console.log(res)
        var userInfo = JSON.parse(value.detail.rawData);

        //获取res.code, 用户数据传给后端
        wx.request({
          url: 'http://localhost:8080//wx/sample/login?code=' + res.code,
          method: "POST",
          header: {
            'content-type': 'application/json'
          },
          data: {
            nickName: userInfo.nickName,
            gender: userInfo.gender,
            language: userInfo.language,
            city: userInfo.city,
            province: userInfo.province,
            country: userInfo.country,
            avatarUrl: userInfo.avatarUrl,

            userId: app.getGlobalUserInfo().userId,
            token: app.getGlobalUserInfo().token
          },
          success(result) {
            wx.hideLoading();
            console.log(result.data);
            if(result.data == "Success"){ //登录成功
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1000
              });
              var user = result.data.data;//返回的用户信息
              app.userInfo = user;
              //设置全局的用户信息为本地缓存
              app.setGlobalUserInfo(user);
            }else{
              //登录失败弹出框
              wx.showToast({
                title: "登录失败",
                icon: 'none',
                duration: 1000
              })
            }
          },
          fail() {
            console.log("失败");
          }
        })
      },
      fail() {
        console.log("登录失败");
      }
    })
  }
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .sale {
    width: 60%;
    height: 20%;
    background: $basecolor;
    text-align: center;
    border: solid 1rpx white;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20rpx;
    text {
      font-size: 40rpx;
      font-weight: bold;
      color: white;
    }
  }
  .question {
    width: 60%;
    height: 20%;
    background: $orange;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1rpx white;
    border-radius: 20rpx;
    text {
      font-size: 40rpx;
      font-weight: bold;
      color: white;
    }
  }
  .masking {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    position: absolute;
    left: 0;
    top: 0;
  }
  .salepop {
    width: 100%;
    height: 60%;
    background: white;
    position: absolute;
    bottom: 0;
    z-index: 100;
    display: flex;
    .cancel {
      width: 50rpx;
      margin: 30rpx;
    }
    .camera {
      width: 50rpx;
      position: absolute;
      right: 130rpx;
      margin-top: 30rpx;
    }
    .publish {
      color: $basecolor;
      font-size: 36rpx;
      position: absolute;
      right: 40rpx;
      margin-top: 30rpx;
      font-weight: bold;
    }
    .specific {
      width: 100%;
      height: 90%;
      // position: absolute;
      // bottom: 0;
      margin-top: 90rpx;
      margin-left: 30rpx;

      display: flex;
      flex-direction: column;
      picker {
        .uni-input {
        }
      }
      .price{
        margin-top: 20rpx;
      }
      .title{
        font-size: 36rpx;
        font-weight: bold;
        margin-top: 40rpx;
      }
      .content{
        margin-top: 20rpx;
      }
    }
  }
  .questionpop {
  }
}
</style>