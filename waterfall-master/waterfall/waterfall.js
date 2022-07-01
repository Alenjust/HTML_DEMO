window.onload = function(){
	waterfall('waterfall', 'box');
	var images = [];
	for(var i=1; i <= 28 ;i++){
		images.push('Image/'+i+'.jpg');
	}
	// console.log(images);
	window.onscroll = function(){
		if (checkScrollSlide()) {
			var parent = document.getElementById('waterfall');
			for(var i=0;i < images.length;i++){
				var box = document.createElement('div');
				box.className = 'box';
				parent.appendChild(box);
				var pic = document.createElement('div');
				pic.className = 'pic';
				box.appendChild(pic);
				var img = document.createElement('img');
				img.src = images[i];
				pic.appendChild(img);
			}
		}
		waterfall('waterfall', 'box');
	}

}

function waterfall(parent, box){
	var Parent = document.getElementById(parent);
	var boxes = Parent.getElementsByClassName(box);
	// console.log(boxes);
	var boxWidth = boxes[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/boxWidth);
	// console.log(cols);
	var heights = [];
	for(var i=0;i < boxes.length;i++){
		if(i < cols){
			heights.push(boxes[i].offsetHeight);
		}
		else{
			var minHeight = Math.min.apply(null, heights);
			var index = getMinHeightIndex(heights, minHeight);
			boxes[i].style.position = 'absolute';
			boxes[i].style.top = minHeight + 'px';
			boxes[i].style.left = boxWidth*index + 'px';
			heights[index] += boxes[i].offsetHeight;
		}
	}
	// console.log(heights);
}

/*function getBoxes(parent, box){
	var boxes = [];
	var elements = parent.getElementsByTagName('*');
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className == box) {
			boxes.push(elements[i]);
		}
	}
	return boxes;
}*/

function getMinHeightIndex(array, min){
	for(var i=0; i < array.length;i++){
		if(array[i] == min){
			return i;
		}
	}
}
function checkScrollSlide(){
	var parent = document.getElementById('waterfall');
	var boxes = document.getElementsByClassName('box');
	var height = boxes[boxes.length-1].offsetTop + boxes[boxes.length-1].offsetHeight;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var webHeight = document.body.clientHeight || document.documentElement.clientHeight;
	// console.log(scrollTop, webHeight, height);
	return (height < scrollTop+webHeight)?true:false;
}