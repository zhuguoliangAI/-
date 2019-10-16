// 闭包的理解

/**
 *
 *
 *
 *
 * */
function User() {
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;

        console.log(user, '登录了！！！');
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI
}


var a = User()

// a.login('a', '123456')
// a.login()


/**
 *  函数或变量在定义时的词法作用于以外的地方被调用。
 *
 *
 *
 *
 * */
function foo() {
    var a = 2;
    function bar() {
        console.log(a)
    }
    return bar;
}

var baz = foo();

// baz()    // 2    这就是闭包的效果


function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000)
}

wait('Hello, closure!!!')

for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, 2000*i)
}


for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i)
        }, 1000*i)
    })()
}

