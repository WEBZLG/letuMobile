$(function(){
	menuBtn($(".menu-btn"))
	addBg($(".menu-list"))
//	首页导航按钮
function menuBtn(dom){
	dom.on("click",function(){
		$(this).next().toggle(200)
	})
}
//导航添加背景色
function addBg(dom){
	dom.find("li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active")
		dom.hide()
	})
}
})