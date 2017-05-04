// JavaScript Document
$(function(){
	
	$('#act1').addClass('active1');
	$('#con1').show();
	$('#act1').mouseover(function(){
		$('#act1').addClass('active1');
		$('#act2').removeClass('active1');
		$('#act3').removeClass('active1');
		$('#con1').show();
		$('#con2').hide();
		$('#con3').hide();
	});
	$('#act2').mouseover(function(){
		$('#act2').addClass('active1');
		$('#act1').removeClass('active1');
		$('#act3').removeClass('active1');
		$('#con2').show();
		$('#con1').hide();
		$('#con3').hide();
	});
	$('#act3').mouseover(function(){
		$('#act3').addClass('active1');
		$('#act1').removeClass('active1');
		$('#act2').removeClass('active1');
		$('#con3').show();
		$('#con1').hide();
		$('#con2').hide();
	});
	$('#d1').addClass('active1');
	$('#e1').show();
	$('#d1').mouseover(function(){
		$('#d1').addClass('active1');
		$('#d2').removeClass('active1');
		$('#e1').show();
		$('#e2').hide();
	});
	$('#d2').mouseover(function(){
		$('#d2').addClass('active1');
		$('#d1').removeClass('active1');
		$('#e2').show();
		$('#e1').hide();
	});
	$('.dropList').hide();
	$('#image_slide').slideBox();
	$('#list_btn').toggle(function(){
		$('.dropList').slideDown();
		$('.dropList').hover(function(){
		$(this).slideDown();
		},function(){
		$(this).slideUp();
		});
	},function(){
		$('.dropList').slideUp();
	});
	
	$('.dropList li a').click(function(){
		$('.dropList').slideUp();
	});
});