//判断值是否为是非数字
// var a = 12;
// console.log(isNaN(a));
// var b = 'alenjust';
// console.log(isNaN(b));
//计算字符串长度
// var str = 'nmsbhshdnask,nsmnmnncbsbbsbkksnnns';
// console.log(str.length);

//判断变量类型
// var a = NaN;
// console.log(typeof a);

// var a = prompt('请输入');
// var b = typeof a;
// if (b == 'string') {
//     console.log('输入的是字符串');
//     if (b == Number) {
//         console.log('输入的是数字');
//     }
//     if (b == undefined) {
//         console.log('输入的是undefined');
//     }
//     if (b == null) {
//         console.log('输入的是null');
//     }
//     if (b == Boolean) {
//         console.log('输入的是布尔值');
//     }
//     if (b == Object) {
//         console.log('输入的是对象');
//     }
//     if (b == Array) {
//         console.log('输入的是数组');
//     }
//     if (b == Date) {
//         console.log('输入的是日期');
//     }
//     if (b == Function) {
//         console.log('输入的是函数');
//     }
//     if (b == Error) {
//         console.log('输入的是错误');
//     }
//     else {
//         console.log('输入的是其他');
//     }
// }

//写一个计算器
// var a = prompt('请输入第一个数字');
// var b = prompt('请输入第二个数字');
// var c = prompt('请输入运算符');
// if (c == '+') {
//     console.log(Number(a) + Number(b));
// }
// if (c == '-') {
//     console.log(Number(a) - Number(b));
// }
// if (c == '*') {
//     console.log(Number(a) * Number(b));
// }
// if (c == '/') {
//     console.log(Number(a) / Number(b));
// }

//数据类型的转换
//字符串转数字
// var a = '120.78';
// var b = Number(a);//强制转换为数字型
// var c = parseInt(a);//转换成整数，如果是小数，则取整数部分，如果是120px，则取120；如果是rem130px，则会得到NaN,(只看前面是不是数字)
// var d = parseFloat(a);//转换成浮点数，如果是120.78px，则取120.78；如果是rem130.78px，则会得到NaN；
// var e = a-0;//利用隐式计算(+-*/),字符串(+-*/)数字，会自动转换为数字，会得到120.780
// console.log(typeof b);
// console.log(typeof c);
// console.log(e);
//数字转布尔类型
// var c = 1;
// var d = Boolean(c);
// console.log(d);
// var e = 0;
// var f = Boolean(e);
// console.log(f);
//将数据转换为字符串类型
// var a = 9;
// var b = String(a);
// var c = a.toString();//或者 var c = toString(a);
// var d = a+'';//通过将字符串拼接，将其他类型的数据转换为字符串类型，只需在其他类型之后+''(空字符串)即可
// console.log(b);
// //输出b的类型
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// 逻辑中断
// console.log(0 && 456);//0
// console.log(123 && 456);//456   或中断 如果表达式1为真，则返回表达式2；如果表达式1为假，则返回表达式1；
// console.log(123 || 456);//123
// console.log(0 || 456);//456  如果表达式1为真，则返回表达式1，如果表达式1为假，则返回表达式2

//流程控制
// var a = prompt('请输入年龄');
// if (a >= 18) {
//     alert('成年人可以进入');
// } else {
//     alert('未成年人不能进入');
// }
//判断润年
// var a = prompt('请输入年份');
// if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {   //判断是否为润年,能被4整除但不能被100整除，或者能被400整除
//     alert('是闰年');
// } else {
//     alert('是平年');
// }
//成绩判断
// var score = prompt('请输入成绩');
// if (score >= 90) {
//     alert('优秀');
// } else if (score >= 80) {
//     alert('良好');
// } else if (score >= 70) {
//     alert('中等');
// } else if (score >= 60) {
//     alert('及格');
// } else {
//     alert('不及格');
// }

//三元表达式
//数字补零
// var a = prompt('请输入数字');
// var b = (a < 10) ? '0' + a : a;
// alert(b);

//switch语句
// var a = prompt('请输入数字');
// switch (a) {
//     case '1':
//         alert('你输入的数字是1');
//         break;
//     case '2':
//         alert('你输入的数字是2');
//         break;
//     case '3':
//         alert('你输入的数字是3');
//         break;
//     default:
//         alert('你输入的数字不是1-3');
//         break;
// }


//循环语句
//for循环
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

//求1-100的和
// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     // sum = sum + i;
//     sum += i;
// }
// console.log(sum);
//1-100的平均值
// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// var avg = sum / 100;
// console.log(avg);
//求1-100之间所有的偶数的和和奇数的和
// var even = 0;
// var odd = 0
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         even += i;
//     }else if(i%2==1){
//         odd += i;
//     }
// }
// console.log('偶数和为：'+even+'奇数和为：'+odd);


//求1-100之间所有能被3整除的数的和
// var sum = 0;
// for(var i = 1;i<=100;i++){
//     if(i%3==0){
//         // sum = sum +i;//或者下面的写法
//         sum += i;
//     }
// }
// console.log(sum);

//求学生成绩
// var num = prompt('请输入班级人数');
// var sum = 0;
// var avg = 0;//平均成绩变量
// for (var i = 1; i <= num; i++) {
//     var score = prompt('请输入第' + i + '个学生的成绩');
//     sum = sum + parseFloat(score);//需要将prompt的值转换为数字
// }
// avg = sum / num;
// alert('班级总成绩为：' + sum);
// alert('班级平均成绩为：' + avg);

//双重for循环
//打印五行五角星
// var str = '';
// for (var i = 1; i <= 5; i++) {//负责打印行数
//     for (var j = 1; j <= 5; j++) {//负责打印列数
//         str = str + '*';
//     }
//     str = str + '\n';//每打印完一行后换行
// }
// console.log(str);

//打印n行n列五角星
// var rows = prompt('请输入行数');
// var cols = prompt('请输入列数');
// var str = '';
// for (var i = 1; i <= rows; i++) {//负责打印行数
//     for (var j = 1; j <= cols; j++) {//负责打印列数
//         str = str + '*';
//     }
//     str = str + '\n';//每打印完一行后换行
// }
// console.log(str);

//打印正三角形
// var str = '';
// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         str = str + '*';
//     }
//     str = str + '\n';
// }
// console.log(str);

//打印倒三角形
// var str = '';
// for (var i = 1; i <= 10; i++) {//负责打印行数
//     for (var j = i; j <= 10; j++) {//负责打印列数
//         str = str + '*';
//     }
//     str = str + '\n';//每打印完一行后换行
// }
// console.log(str);

//打印九九乘法表
// var str = '';
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         str = str + i + '*' + j + '=' + i * j + '\t';
//     }
//     str = str + '\n';
// }
// console.log(str);

//while循环
//打印1-100
// var num = 1;
// while (num <= 100) {
//     console.log(num);
//     num++;
// }
//计算1-100的整数和
// var sum = 0;
// var j = 1
// while(j <=100){
//     sum += j;
//     j++;
// }
// console.log(sum);
//do while循环
//打印1-100
// var age = 1;
// do {
//     console.log(age);
//     age++;
// } while (age <= 100);
//计算1-100的整数和
// var sum = 0;
// var j = 1;
// do {
//     sum += j;
//     j++;
// } while (j <= 100);
// console.log(sum);

// continue语句
// for(var i = 1; i<=5;i++){
//     if(i==3){//跳出3的循环
//         continue;
//     }
//     console.log(i);
// }
// break语句
// for (var i = 1; i <= 5; i++) {
//     if (i == 3) {//退出整个循环
//         break;
//     }
//     console.log(i);
// }


//数组
//遍历数组
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < arr.length; i++) {//arr.length数组长度
//     console.log(arr[i]);
// }
//  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  console.log(arr.length);//数组长度

//求出数组里的数据的平均值
// var arr = [1, 2, 3];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / arr.length);

//求出数组中的最大值
// var arr = [12, 14, 17, 89, 90, 100];
// var max = arr[0]//取出第一个值给max，用来和后面的值比较
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {// 判断数组中的中的每一个数据是否大于max
//         max = arr[i];//大于max,则把该值赋给max
//     }
// }
// console.log(max);
//数组字符串拼接
// var arr = ['a', 'b', 'c'];
// var str = '';
// var sep = '|';//定义分隔符
// for (var i = 0; i < arr.length; i++) {
//     str += arr[i] + sep;
// }
// console.log(str);
// console.log(arr.toString());//转换  ， 分割的字符串
//新增数组元素
// var arr = [1, 2, 3];
// // arr.push(4);//新增数组元素
// // arr.length = 4;//新增数组长度
// arr[2] = 'a';//修改数组元素
// console.log(arr.length);
// for (var i = 0; i<arr.length;i++){
//     console.log(arr[i]);//输出新增的数组
// }
// var arr = [1, 2, 3];
// // arr.shift();//删除数组第一个元素
// arr.unshift(4);//新增数组第一个元素
// console.log(arr);

//在数组中存入10个数据
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr[i] = i;
// }
// console.log(arr);
// 筛选数组
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         newArr.push(arr[i]);//把大于5的数据放入新数组
//         newArr[newArr.length] = arr[i];//把大于5的数据放入新数组
//     }
// }
// console.log(newArr);
// console.log(newArr.length);

// 删除数组,数组去重
// var arr = [1, 2, 5, 4, 5, 6, 7, 5, 9, 10];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] != 5) {
//         // newArr.push(arr[i]);//把不等于5的数据放入新数组
//         newArr[newArr.length] = arr[i];//把不等于5的数据放入新数组
//     }
// }
// console.log(newArr);
// 翻转数组
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {//从后往前遍历
//    newArr.push(arr[i]);//把数组中的每一个数据放入新数组
//     newArr[newArr.length] = arr[i];//把数组元素放入新数组
// }
// console.log(newArr);

// 冒泡排序
// var arr = [1, 12, 23, 74, 5];
// for (var i = 0; i < arr.length - 1; i++) {//比较次数
//     for (var j = 0; j < arr.length - i - 1; j++) {//比较次数
//         if (arr[j] > arr[j + 1]) {//比较大小
//             var temp = arr[j];//把大的数据放到temp中
//             arr[j] = arr[j + 1];// 把小的数据放到大的位置
//             arr[j + 1] = temp;//把大的数据放到小的位置
//         }
//     }
// }
// console.log(arr);

//函数
// function 函数名(参数1，参数2,……) {//形参
// 函数体
// }
// 函数名(参数1，参数2);//调用函数，实参
//求1-100之间的累加
// function getSum(num1,num2){//定义函数
//     var sum = 0;//定义一个变量
//     for(var i = num1;i<=num2;i++){//循环次数
//         sum += i;//累加
//     }
//     console.log(sum);//输出结果
// }
// getSum(1,100);//调用函数，如果实参个数多于形参个数，则取形参个数的实参
// getSum(1);//调用函数，如果实参个数少于形参个数，多余的形参为undefined

// 函数的返回值 return
// function getSum(num1,num2){
//     return num1+num2;
// }
// console.log(getSum(1,2));
//利用函数求两个数的最大值
// function getMax(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(getMax(67, 100));
// 利用函数求数组中的最大值
// function getMax(arr) {
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMax([19, 18, 78, 67, 99, 13, 18, 12]));
//如果函数没有返回值return，则返回undefined
//arguments,里面存储了传递过来的所有实参
// function fn() {
//     // console.log(arguments);
//     // console.log(arguments.length);
//     // console.log(arguments[2]);
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }//arguments是一个类数组对象,是函数内置的对象，只有函数内才有
// }
// fn(1, 2, 3);
// (function (num) { })(console.log(num = 1));//立即执行函数

//利用函数的内置对象agguments,求数组中的最大值
// function getMax() {
//     var max = arguments[0];
//     for (var i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// var rs = getMax(781, 72, 83, 4, 85, 69, 7, 80, 90, 100);
// console.log(rs);

//利用函数翻转数组
// function reverse(arr) {
//     var newArr = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         newArr[newArr.length] = arr[i];
//     }
//     return newArr;
// }
// var arr1 = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(arr1);

//利用函数判断闰年
// function isLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(isLeapYear(2000));

// //函数的调用
// function backDay() {
//     var year = prompt("请输入年份");
//     if (isLeapYear(year) == true) {
//         alert("当前年份是闰年二月份有29天");
//     } else {
//         alert("当前年份是平年二月份有28天");
//     }
// }
// backDay();

//函数的作用域
//如果在块级作用域内给一个没有声明变量赋值，那么这个变量就是全局作用域的，如果在函数内部给一个变量赋值，那么这个变量就是函数内部的，如果在函数外部给一个变量赋值，那么这个变量就是全局的。
// function f1() {
//     var num = 123;
//     function f2() {
//         console.log(num);
//     }
//     f2();
// }
// var num = 456;
// f1();//就近原则。往上一级查找。直到找不到num为止。然后输出undefined未定义。

//对象
// 创建对象的三种方法
// var obj = {};//创建一个空对象
//var obj = {username:"张三",age:18};//创建一个对象，并且赋值
// var obj = new Object();//创建一个空对象
//obj.name = "张三";//给对象添加属性
// var obj = Object.create(null);//创建一个空对象
//使用构造函数创建对象
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

//闭包
// var add = (function () {
//     var counter = 0;
//     return function () { return counter += 1; }
// })();
// console.log(add());
// console.log(add());

var obj = {
    name: "张三",
    age: 18,
    sex: "男"
    // sayHi: function () {
    //     console.log('hi--');
    // }
}
//删除对象
// delete obj.age;
//修改对象
// obj.age = 20;
//查询对象
// console.log(obj.age);
//增加对象
// obj.class = "三班";
// var fight = function () {
//     return "我是一个战士";
// };
// obj.fight;
// console.log(obj);
// //调用对象的方法
// 创建对象的过程称为对象的实例化
// console.log(obj.name);
// console.log(obj['name']);//这是另一种调用对象的方法
// console.log(obj.age);
// console.log(obj.sex);
// obj.sayHi();
//构造函数创建对象
// function Star(username, age, sex) {
//     this.username = username;
//     this.age = age;
//     this.sex = sex;
//     this.sing = function(sang){
//         console.log(sang);
//     }
// }
// var a = new Star('Alenjust',18,'男');
// console.log(a.username);
// var b = new Star('chen',19,'男');
// console.log(b.username);
// b.sing('小幸运');

// 使用for in循环遍历对象
// var obj = {
//     name: "张三",
//     age: 18,
//     sex: '男',
// }
// for (key in obj) {
//     console.log(key);//输出属性名
//     console.log(obj[key]);//输出对应属性名的属性值
// }

// 任何 JavaScript 对象都可以使用 JavaScript 函数 JSON.stringify() 进行字符串化（转换为字符串）：
// const person = {
//     name: "Bill",
//     age: 19,
//     city: "Seattle"
// };

// let myString = JSON.stringify(person);
// console.log(myString);

// var arr = [15, 17, 90, 108, 00, 89, 100, 900];
// // console.log(Math.max(...arr));//Math.max()不能直接传入数组，需要使用...运算符将数组转换为一个参数
// console.log(Math.max.apply(null, arr));//apply()方法可以将数组转换为一个参数
//Math.PI()的使用
// console.log((2*2)*Math.PI);//计算圆的面积 r*r*PI r=2
//Math.random()的使用
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);//取随机整数，因为Math.random()返回的是小数，所以要用Math.random()只能返回一个介于0-1之间的浮点数
// }
// console.log(getRandom(1, 100));
//写一个猜数字的游戏
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);//取随机整数，因为Math.random()返回的是小数，所以要用Math.random()只能返回一个介于0-1之间的浮点数
// }//随机数，将数字转换为整数的方法
// while (true) {
//     var num = prompt("请输入一个1-10数字");
//     if (num == getRandom(1, 10)) {
//         alert("恭喜你猜对了");
//         break;//跳出循环，一定要跳出循环，否则会一直循环下去，变成死循环
//     } else if (num > getRandom(1, 10)) {
//         alert("大了");
//     } else if (num < getRandom(1, 10)) {
//         alert("小了");
//     }
// }

// Date对象的使用
// var date = new Date();
// // console.log(date);//返回未格式化的日期
// // console.log(date.getFullYear());//返回年份
// // console.log(date.getMonth());//返回月份
// // console.log(date.getDate());//返回日期
// // console.log(date.getDay());//返回星期几
// // console.log(date.getHours());//返回小时
// // console.log(date.getMinutes());//返回分钟
// // console.log(date.getSeconds());//返回秒
// // console.log(date.getMilliseconds());//返回毫秒
// // console.log(date.getTime());//返回时间戳
// // console.log(date.toLocaleString());//返回格式化的日期
// // console.log(date.toLocaleDateString());//返回格式化的日期
// var year = date.getFullYear();//获取年份
// var month = date.getMonth() + 1;//获取月份,因为获取到的月份会比实际的小一个月，所以要加1
// var dates = date.getDate();//获取日期
// var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];//因为外国人将星期天算作0，所以在数组中将星期天放在第0个位置
// // var week = arr[date.getDay()];//获取星期
// var hours = date.getHours();//获取小时
// var minutes = date.getMinutes();//获取分钟
// var seconds = date.getSeconds();//获取秒
// // var day = date.getDay();
// // console.log('今天是:' + year + '年' + month + '月' + dates + '日 ' + week + ' ' + hours + ':' + minutes + ':' + seconds);
// console.log('今天是:' + year + '年' + month + '月' + dates + '日 ' + arr[day] + ' ' + hours + ':' + minutes + ':' + seconds);

//封装一个获取时分秒的的函数
// function getTimer() {
//     var time = new Date();
//     var h = time.getHours();
//     h = h < 10 ? '0' + h : h;//利用三元运算符，如果小于10，则在前面加0，否则不加，以保证每个数字都是两位数
//     var m = time.getMinutes();
//     m = m < 10 ? '0' + m : m;
//     var s = time.getSeconds();
//     s = s < 10 ? '0' + s : s;
//     // if (h < 10) {//判断返回的是否小于10，如果小于就在原值的前面加0
//     //     h = '0' + h;
//     // }
//     // if (m < 10) {
//     //     m = '0' + m;
//     // }
//     // if (s < 10) {
//     //     s = '0' + s;
//     // }
//     return h + ':' + m + ':' + s;//返回时间格式
// }
// console.log(getTimer());//调用函数,输出时间格式

//获取总毫秒数
// var time = new Date();
// var time = +new Date();//获取总毫秒数
// console.log(Date.now());//获取总毫秒数,H5新增的方法,返回的是数字,存在浏览器兼容性问题
// var total = time.getTime();//获取总毫秒数
// 输出总毫秒数除以一年的毫秒数，得到年数
// var year = total / (1000 * 60 * 60 * 24 * 365);
// console.log(year);
// console.log(total);
// console.log(time.valueOf());//valueOf()方法返回一个数值，表示当前日期距离1970年1月1日之间的毫秒数

//倒计时案例
// function conutDown(time) {
//     var nowTime = +new Date();//获取当前时间戳，也就是当前时间总的毫秒数
//     var inputTime = +new Date(time);//获取用户输入的时间总的毫秒数
//     var times = (inputTime - nowTime) / 1000;//剩余时间的毫秒数
//     // var d = Math.floor(times / (1000 * 60 * 60 * 24));//获取剩余的天数
//     var d = Math.abs(parseInt(times / 60 / 60 / 24));//获取剩余的天数
//     d = d < 10 ? '0' + d : d;
//     var h = parseInt(times / 60 / 60 % 24);//获取剩余的小时数
//     h = h < 10 ? '0' + h : h;
//     var m = Math.abs(parseInt(times / 60 % 60));//获取剩余的分钟数
//     m = m < 10 ? '0' + m : m;
//     var s = Math.abs(parseInt(times % 60));//获取剩余的秒数
//     s = s < 10 ? '0' + s : s;
//     return d + '天' + h + '时' + m + '分' + s + '秒';
//     //因为取到的为负值，需要使用Math.abs()方法将其取绝对值，转换为正数

// }
// console.log('距离时间还剩:' + conutDown('2022-04-20 16:33:00'));

// instanceof运算符,用来判断是否为数组，还有isArray()方法，H5新增方法,判断是否为数组
// var arr = [1, 2, 3, 4, 5];
// console.log(arr instanceof Array);//true
//添加删除数组元素方法
// var arr = [1, 2, 3, 4, 5];
// arr.push(6);//添加元素,返回结果为新数组的长度
// arr.push(6, 7, 8);//添加多个元素
// arr.pop();//删除最后一个元素
// arr.unshift(0);//添加元素到数组的开头
// arr.shift();//删除数组的第一个元素
// console.log(arr);
//筛选数组元素方法
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// for(var i = 0; i < arr.length; i++) {
//     if(arr[i]>5) {//筛选大于5的元素，并且放入新数组
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
//数组排序
//1.翻转数组方法
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.reverse();//翻转数组
// console.log(arr);
//2.冒泡排序
// var arr = [1, 3, 4, 7, 2, 5, 6, 8, 9, 10];
// arr.sort();//排序,两位数就不行了
//解决两位数的问题
// arr.sort(function (a, b) {
//     return a - b;//按照从小到大的顺序排序,升序
//     // return b - a;//按照从大到小的顺序排序,降序
// });
// console.log(arr);
// console.log(arr.indexOf(3));//获取某个元素在数组中的索引值,从前往后查找
// console.log(arr.lastIndexOf(3));//获取某个元素在数组中的索引值,从后往前查找

//数组去重
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {//遍历数组
//     if (newArr.indexOf(arr[i]) == -1) {//判断数组中是否有重复的元素
//         newArr.push(arr[i]);//添加元素
//     }
// }
// console.log(newArr);

//数组转换为字符串
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.toString());//将数组转换为字符串
// console.log(arr.join('-'));//将数组转换为字符串,并且用指定的分隔符分隔,join()方法中的参数必须是字符串

//查找字符串中的字符的个数和位置
// var str = 'abcdefcg';
// var index = str.indexOf('c');//获取字符的索引值
// var num = 0;//计数器
// while (index != -1) {//判断是否找到了字符
//     console.log(index);//打印索引值
//     num++;//计数器+1
//     index = str.indexOf('c', index + 1);//从索引值为index+1的位置开始查找
// }
// console.log("字符c出现的次数为:" + num + '次');//打印计数器

//根据位置返回字符的方法
// var str = 'abcdefcg';
// console.log(str.charAt(0));//1.根据索引值返回字符
// console.log(str.charCodeAt(0));//2.根据索引值返回字符的ASCII编码值
// console.log(str[0]);//3.根据索引值返回字符

//统计出现最多的字符和出现的次数
// var str = 'sssjjjgggshhhs';
// var obj = {};//创建一个空对象
// for (var i = 0; i < str.length; i++) {//遍历字符串
//     var char = str.charAt(i);//获取字符
//     if (obj[char]) {//判断对象中是否有该字符
//         obj[char]++;//有该字符,计数器+1
//     } else {//没有该字符
//         obj[char] = 1;//计数器为1
//     }
// }
// // console.log(obj);//打印对象
// var max = 0;//创建一个变量,用来存储最大的计数器
// var ch = '';//创建一个变量,用来存储最大的计数器对应的字符
// for (key in obj) {//遍历对象
//     if (obj[key] > max) {//判断计数器是否大于1
//         max = obj[key];//更新最大计数器
//         ch = key;//更新最大计数器对应的字符
//     }
// }
// console.log('出现的次数最多的是:' + ch + ',' + '为' + max + '次');//打印出现最多的字符和出现的次数

//字符串的截取
// var str = 'abcdefcg';
// console.log(str.substr(0, 3));//1.从索引值为0的位置开始截取,截取长度为3
//字符串的替换
// var str = 'abcdefcg';
// // console.log(str.replace('c', 'F'));//1.将字符串中的c替换为C,返回的是替换后的字符串
// while (str.indexOf('c') !== -1) {
//     str = str.replace('c', '*');//2.将字符串中的c替换为*,返回的是替换后的字符串
// }
// console.log(str);//3.将字符串中的c替换为*,返回的是替换后的字符串
//字符串转换为数组
// var str = 'abcdefcg';
// var arr = str.split('');//将字符串转换为数组,split()方法中的参数必须是字符串,参数为字符串是用什么来分隔的
// console.log(arr);//打印数组

//数据类型
// var timer =null;//null和undefined是两种数据类型,null是一个空对象,undefined是一个未定义的对象
// console.log(typeof timer);//1.判断变量的类型
//简单的数据类型是放到栈里面,里面自己开辟一个内存空间存值
//复杂的数据类型是在栈里面存放地址(十六进制表示),地址指向堆里的数据,真实的实例对象放到堆里面




























