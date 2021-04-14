//es6
export default(params)=>{

    //加载中
    uni.showLoading({
        title:"加载中"
    })

    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            success(res){ //请求成功
                resolve(res);
            },
            fail(err){ //请求失败
                reject(err);
            },
            complete(){ //完成后要将加载中取消掉
                uni.hideLoading();
            }
        })
    })
}