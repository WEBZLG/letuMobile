$(function(){
	
	menuBtn($(".menu-btn"))
	addBg($(".menu-list"))
	btnBg($(".understand-nav"),".under-item")
//滚屏初始化
new WOW().init();
//轮播
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项    
    autoplay:3000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
//数字动画
  $("animateNum").running()
  
  //	服务合作导航
	$(".tab-box").find(".nav-item").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active")
		var index = $(this).index()
		$(".tab-text").find(".tab-item").eq(index).addClass("block").siblings().removeClass("block")
	})
	//	首页导航按钮
	function menuBtn(dom){
		dom.off("click").on("click",function(){
			console.log(11)
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
		//添加背景色
	function btnBg(dom,item){
		dom.find(item).on("click",function(){
			$(this).addClass("active").siblings().removeClass("active")
		})
	}
})