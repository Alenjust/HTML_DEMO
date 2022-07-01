//等待页面加载完成后再执行
window.addEventListener('load', function () {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');//左侧按钮
    var arrow_r = document.querySelector('.arrow-r');//右侧按钮
    var focus = document.querySelector('.focus');//轮播图
    var focusWidth = focus.offsetWidth;//轮播图的宽度
    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {//鼠标经过
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);//鼠标经过时清除定时器，防止鼠标经过时轮播图不停的切换
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function () {//鼠标离开
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 3. 定时器 鼠标经过开启定时器 自动轮播
        timer = setInterval(function () {//自动播放
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    // 3.动态生成小圆圈  小圆圈的个数 = 图片的个数，有几张图片就生成几个小圆圈
    var ul = document.querySelector('.focus ul');//获取类名为.focus下的ul
    var ol = document.querySelector('.focus ol');//获取类名为.focus下的ol
    focus.appendChild(ol);//把ol添加到轮播图中
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;
            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    }
    //把ol的第一个li的类名设置为current
    ol.children[0].className = 'current';
    //6.克隆第一张图片放到最后一张图片的后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);//把第一张图片放到最后一张图片的后面
    var num = 0;//记录当前图片的索引号
    var circle = 0;//记录当前小圆圈的索引号
    //flag 节流阀
    var flag = true;

    // 7. 点击右侧按钮，图片向右滚动一张
    arrow_r.addEventListener('click', function () {
        if (flag) {//如果flag为true，执行下面的代码
            flag = false;//把flag设置为false，防止重复点击 关闭节流阀
            //如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 将left g改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //8.点击右侧按钮，小圆圈也要跟着变化 可以再声明一个变量circle 控制小圆圈的播放
            circle++;
            // 当circle 等于小圆圈的个数的时候，我们就把circle 设置为0
            if (circle == ol.children.length) {
                circle = 0;
            }
            //先清除其余小圆圈的current类名 调用封装函数
            circleChange();
            // for (var i = 0; i < ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }
            // //留下当前的小圆圈的current类名
            // ol.children[circle].className = 'current';
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;
        }
    });
    // 9. 点击左侧按钮，图片向左滚动一张
    arrow_l.addEventListener('click', function () {
        if (flag) {//如果flag为true，执行下面的代码
            flag = false;//把flag设置为false 防止重复点击 关闭节流阀
            //如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 将left g改为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * -focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //8.点击左侧按钮，小圆圈也要跟着变化 可以再声明一个变量circle 控制小圆圈的播放
            circle--;
            // 当circle 等于小圆圈的个数的时候，我们就把circle 设置为0
            // if (circle > 0) {
            //     circle = ol.children.length - 1;
            // }
            //三元表达式写法
            circle = circle < 0 ? ol.children.length - 1 : circle;//如果circle<0 就让circle等于ol.children.length-1
            //先清除其余小圆圈的current类名
            circleChange();//调用封装的函数
            //留下当前的小圆圈的current类名
            ol.children[circle].className = 'current';
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;
        }
    })
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    //10.自动播放轮播图
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
})