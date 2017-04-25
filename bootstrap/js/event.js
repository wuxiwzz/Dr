// 事件绑定的封装
function addEvent (obj,type,fn) {
	if (obj.addEventListener) {
		//在高级浏览器
		 obj.addEventListener(type,fn,false);
	} else {
		obj.attachEvent('on'+type,fn)
	}
}
//事件移除的封装
function removeEvent(obj,type,fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type,fn,false);
	} else {
		obj.detachEvent('on'+type,fn);
	}
}