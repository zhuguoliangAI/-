/*
* 自己手写 promise
* 三个状态 pending fulfilled rejected
* 同一时间只能存在一种状态,且状态一旦改变就不能再变
* 1.初始化，状态：pending
* 2.当调用resolve(成功)，状态：pending=>fulfilled
* 3.当调用reject(失败)，状态：pending=>rejected
*
* new Promise((resolve, reject) => {})
* resolve reject是promise的决议函数
* reject就是拒绝这个promise
* 但是resolve不一定是完成promise 要根据传的参数判断 如果是一个 非promise的值 会立即完成promise
* 但是如果传给是一个promise,这个值就会被地柜展开 根据这个promise的最终值来决定是否完成当前的promise
*
*
*
*
* class Promise{
    constructor(exector){
        function resolve(){
            
        }
        function reject(){
            
        }
        exector(resolve,reject)    
    }
    then(){
        
    }
}
* **/
//promise.js
class MyPromise{
  //传一个异步函数进来
  constructor(excutorCallBack){
    this.status = 'pending';
    this.value = undefined;
    this.fulfillAry = [];
    this.rejectedAry = [];
    //=>执行Excutor
    let resolveFn = result => {
      if(this.status !== 'pending') return;
      let timer = setTimeout(() => {
        this.status = 'fulfilled';
        this.value = result;
        this.fulfillAry.forEach(item => item(this.value));
      }, 0);
    };
    let rejectFn = reason => {
      if(this.status !== 'pending')return;
      let timer = setTimeout(() => {
        this.status = 'rejected';
        this.value = reason;
        this.rejectedAry.forEach(item => item(this.value))
      })
    };
    try{
      //执行这个异步函数
      excutorCallBack(resolveFn, rejectFn);
    } catch(err) {
      //=>有异常信息按照rejected状态处理
      rejectFn(err);
    }
  }
  then(fulfilledCallBack, rejectedCallBack) {
    //resolve和reject函数其实一个作为微任务
    //因此他们不是立即执行，而是等then调用完成后执行
    this.fulfillAry.push(fulfilledCallBack);
    this.rejectedAry.push(rejectedCallBack);
    //一顿push过后他们被执行
  }
  //then传进两个函数
  // then(fulfilledCallBack, rejectedCallBack) {
  //   //保证两者为函数
  //   typeof fulfilledCallBack !== 'function' ? fulfilledCallBack = result => result:null;
  //   typeof rejectedCallBack !== 'function' ? rejectedCallBack = reason => {
  //     throw new Error(reason instanceof Error? reason.message:reason);
  //   } : null;
  //   //返回新的Promise对象，后面称它为“新Promise”
  //   return new Promise((resolve, reject) => {
  //     //注意这个this指向目前的Promise对象，而不是新的Promise
  //     //再强调一遍,很重要：
  //     //目前的Promise(不是这里return的新Promise)的resolve和reject函数其实一个作为微任务
  //     //因此他们不是立即执行，而是等then调用完成后执行
  //     this.fulfillAry.push(() => {
  //       try {
  //         //把then里面的方法拿过来执行
  //         //执行的目的已经达到
  //         let x = fulfilledCallBack(this.value);
  //         //下面执行之后的下一步，也就是记录执行的状态，决定新Promise如何表现
  //         //如果返回值x是一个Promise对象，就执行then操作
  //         //如果不是Promise,直接调用新Promise的resolve函数,
  //         //新Promise的fulfilAry现在为空,在新Promise的then操作后.新Promise的resolve执行
  //         x instanceof Promise ? x.then(resolve, reject):resolve(x);
  //       }catch(err){
  //         reject(err)
  //       }
  //     });
  //     //以下同理
  //     this.rejectedAry.push(() => {
  //       try {
  //         let x = this.rejectedCallBack(this.value);
  //         x instanceof Promise ? x.then(resolve, reject):resolve(x);
  //       }catch(err){
  //         reject(err)
  //       }
  //     })
  //   }) ;
  // }

}

// module.exports = Promise;


