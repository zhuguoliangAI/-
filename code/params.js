var setObj=function(o){
    o.name="xiaoming";
    console.log(123456, o)
    o={};
    o.name="xiaohong";
    console.log(123, o)
}
var p={name:"xixi",age:24};
setObj(p);
console.log(p);




// js参数的传递  全部都是值传递    （当参数为引用类型时 传递的是引用类型的地址（也是值））
