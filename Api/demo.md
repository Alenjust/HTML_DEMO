<!-- <ul>
		<li>1</li>
	</ul> -->
	<button>点击</button>
	<!-- <div class="box">
		<label for="">
			<img src="https://gitee.com/xiaoqiang001/jsapis_material/raw/master/%E7%AC%AC%E4%B8%80%E5%A4%A9/images/close.png"
				alt="" id="eye">
		</label>
		<input type="password" name="" id="pwd"> -->
	</div>
	<script>
		var btn = document.querySelector('button');
		btn.addEventListener('click',function(){
			alert(1351);
		})

		// var ul = document.querySelector('ul');
		//克隆节点,cloneNode(true)表示深拷贝会克隆元素和节点，cloneNode(false或者空)表示浅拷贝只克隆元素
		// var li =ul.children[0].cloneNode(true);
		// ul.appendChild(li);
		// var li = document.createElement('li');
		// var ul = document.querySelector('ul');
		// ul.appendChild(li);//添加子节点,添加到后面
		// var li1 = document.createElement('li');
		// ul.insertBefore(li1, ul.children[0]);//添加子节点,添加到前面

















		// var eye = document.getElementById('eye');
		// var pwd = document.getElementById('pwd');
		// var flg = 0;
		// eye.onclick = function () {
		// 	if (flg == 0) {
		// 		pwd.type = 'text';
		// 		eye.src = 'https://gitee.com/xiaoqiang001/jsapis_material/raw/master/%E7%AC%AC%E4%B8%80%E5%A4%A9/images/open.png';
		// 		flg = 1;
		// 	} else {
		// 		pwd.type = 'password';
		// 		eye.src = 'https://gitee.com/xiaoqiang001/jsapis_material/raw/master/%E7%AC%AC%E4%B8%80%E5%A4%A9/images/close.png';
		// 		flg = 0;
		// 	}
		// }

		// var btn = document.querySelector('button');
		// var input = document.querySelector('input');
		// btn.onclick = function(){
		// 	input.value = "你被点击了"
		// 	// btn.disabled = true;//disable按钮禁用属性
		// 	this.disabled = true;//this指向当前按钮，指向函数的调用者
		// }

		//案例，根据系统时间，加载对应时间加载的页面和文本
		// var text = document.querySelector('.text');
		// var img = document.querySelector('img');
		// var date = new Date();
		// var h = date.getHours();
		// if (h <= 12) {
		// 	img.src = './images/humian.jpg';
		// 	text.innerHTML = '早上好';
		// } else if (h <= 18) {
		// 	img.src = './images/xiyang.png';
		// 	text.innerHTML = '下午好';
		// } else {
		// 	img.src = './images/logo.png';
		// 	text.innerHTML = '晚上好';
		// }

		// var h = document.querySelector('.h');
		// var x = document.querySelector('.x');
		// var img = document.querySelector('img');
		// h.onclick = function () {
		// 	img.src = './images/humian.jpg';
		// 	img.title = '湖面';
		// }
		// x.onclick = function () {
		// 	img.src = './images/xiyang.png';
		// 	img.title = '夕阳';
		// }

		// var p = document.querySelector('p');
		// console.log(p.innerText);//获取按钮的文本内容,会把html标签去除
		// console.log(p.innerHTML);//获取按钮的文本内容,会把html标签保留

		//获取事件源,点击按钮显示系统时间
		// var btn = document.querySelector('button');
		// var box = document.querySelector('.box');
		// // setTimeout(box.innerHTML = getDate(), 1000);//识别html标签,不会把html标签去除

		// // btn.onclick = function () {
		// // 	box.innerText = getDate();//调用函数,获取时间,并赋值给box
		// // 	console.log(getDate());
		// // }
		// //获取事件源,点击按钮显示系统时间
		// function getDate() {
		// 	var date = new Date();
		// 	var year = date.getFullYear();//获取年份F
		// 	var month = date.getMonth() + 1;//获取月份,因为获取到的月份会比实际的小一个月，所以要加1
		// 	date < 10 ? month = '0' + month : month;//如果月份小于10，则在前面加0
		// 	var dates = date.getDate();//获取日期
		// 	date < 10 ? date = '0' + date : date;//如果日期小于10，则在前面加0
		// 	var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];//因为外国人将星期天算作0，所以在数组中将星期天放在第0个位置
		// 	// var week = arr[date.getDay()];//获取星期
		// 	var hours = date.getHours();//获取小时
		// 	hours < 10 ? hours = '0' + hours : hours;//如果小时小于10，则在前面加0
		// 	var minutes = date.getMinutes();//获取分钟
		// 	minutes < 10 ? minutes = '0' + minutes : minutes;//如果分钟小于10，则在前面加0
		// 	var seconds = date.getSeconds();//获取秒
		// 	seconds < 10 ? seconds = '0' + seconds : seconds;//如果秒小于10，则在前面加0
		// 	var day = date.getDay();
		// 	// console.log('今天是:' + year + '年' + month + '月' + dates + '日 ' + week + ' ' + hours + ':' + minutes + ':' + seconds);
		// 	return '系统时间:' + year + '年' + month + '月' + dates + '日 ' + arr[day] + ' ' + hours + ':' + minutes + ':' + seconds;
		// }
		// //事件点击
		// var btn = document.querySelector('button');
		// btn.onclick = function(){
		// 	alert('按钮被点击了');
		// }
		// var body = document.body;//获取body元素
		// console.log(body);
		// var html = document.documentElement;//获取html元素
		// console.log(html);