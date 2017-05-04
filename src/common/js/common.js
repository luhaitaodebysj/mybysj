//设置 font-size,rem

$(function(){
	resizeFontSize();
	setHeight();
	setPartHeight();
	$(window).resize(function(){
		resizeFontSize();
		setHeight();
		setPartHeight();
	})	 
})
function resizeFontSize(){
	var width=$(window).width();
	var fontsize=width*40/750;
	$("#resize").css({"fontSize":fontsize});
}

function setHeight(){
	var totalHeight=$(window).height();
	var headerHeight=$("#header").height();
	var footHeight=$('#footer').height();
	var bodyHeight=totalHeight-headerHeight-footHeight;
	$("#body").css('height',bodyHeight);
}

function setPartHeight(){
	var bottomHeight= $('.weui-tabbar').height();
    var mainHeight = $(window).height()-bottomHeight;
    $("#login").css('height',mainHeight);
    $("#personal").css('height',mainHeight);
    $("#list").css('height',mainHeight);
}
