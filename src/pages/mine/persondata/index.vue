<template>
  <view class="main">
    <view class="headall">
      <image class="head" :src="persondata.headimage"></image>
      <span>点击更换</span>
    </view>
    <view class="base">
      <text class="basedata">基本资料</text>
      <image class="imgedit" src="../../../static/edit.png"></image>
    </view>
    <view class="first">
      <text class="title">用户名</text>
      <input class="input" :value="persondata.name" />
    </view>

    <view class="first">
      <text class="title">性别</text>
      <picker
        class="pick"
        @change="bindPickerChange"
        :value="index"
        :range="array"
      >
        <view class="uni-input">{{ array[index] }}</view>
      </picker>
    </view>
    
     <view class="first">
      <text class="title">学号</text>
      <input class="input" :value="persondata.gender" />
    </view>

    <view class="first">
      <text class="title">分院</text>
      <picker
        class="pick"
        @change="bindPickerChange"
        :value="index1"
        :range="array1"
      >
        <view class="uni-input">{{ array1[index1] }}</view>
      </picker>
    </view>
  
    <view class="first">
      <text class="title">班级</text>
      <input class="input" :value="persondata.cclass" />
    </view>

    

    <view class="first">
      <text class="title">联系电话</text>
      <input class="input" :value="persondata.phone" />
    </view>

    

    <view class="first">
      <text class="title">居住地</text>
      <input class="input" :value="persondata.address" />
    </view>
    <view class="viewbutton">
      <button class="button" @click="save">保存</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      persondata:{
      iid:'',
      headimage: require("../../../static/head.png"),
      name: "陈章琦",
      cclass: "计算1701",
      address: "校内",
      phone: "1234567852",
      major:'',
      number:'',
      gender:''
      },
      array: ["男", "女"],
      index: 0,
      array1: ["计算学院", "医学院", "创意学院", "法学院"],
      index1: 0,
    };
  },
  methods: {
    bindPickerChange() {
      console.log("选择改变");
    },
    save(){
      this.persondata.major=this.array1[this.index1];
      this.persondata.gender=this.array[this.index];
       this.request({
                url:"http://localhost:8181/onshow/listAll",
                data:this.persondata,
                methods:'get',
            }).then(result=>{
                console.log(result)
            })
    }
  },
};
</script>
<style lang="scss" scoped>
.main {
  background: $lightgray;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .headall {
    padding-top: 80rpx;
    padding-bottom: 50rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
    .head {
      width: 120rpx;
      height: 120rpx;
      border: white solid 6rpx;
      border-radius: 50%;
    }
  }
  .base {
    margin-top: 20rpx;
    background: white;
    display: flex;
    padding-bottom: 20rpx;
    .basedata {
      margin-left: 30rpx;
      font-size: 40rpx;
      font-weight: bold;
      margin-top: 50rpx;
    }
    .imgedit {
      width: 40rpx;
      height: 40rpx;
      margin-top: 50rpx;
    }
  }

  .first {
    background: white;
    display: flex;
    padding-bottom: 30rpx;
    .title {
      font-size: 36rpx;
      color: black;
      margin-left: 40rpx;
      margin-top: 35rpx;
    }
    .input {
      position: absolute;
      left: 50%;
      margin-left: 30rpx;
      margin-top: 35rpx;
      transform: translatex(-27%);
      color: $fontcolorgray;
    }
    .pick {
      position: absolute;
      left: 50%;
      margin-left: 30rpx;
      margin-top: 35rpx;
      transform: translatex(-50%);
      color: $fontcolorgray;
    }
  }
  .viewbutton {
    width: 100%;
    height: 23%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .button {
      width: 200px;
      height: 50px;
      color: white;
      background: $basecolor;
    }
  }
}
</style>