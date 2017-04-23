//设置 font-size,rem

$(function(){
	resizeFontSize();
	setHeight();
	$(window).resize(function(){
		resizeFontSize();
		setHeight();
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
