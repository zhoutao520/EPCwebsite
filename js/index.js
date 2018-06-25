var timer,flag=true,flag2=true;
var mySwiper = new Swiper('#home', {
    autoplay: true,//可选选项，自动滑动
    effect : 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
var ydSwiper = new Swiper ('#youdaoBanner', {
    speed:1000,
    autoplay : {
      delay:1000
    },
    loop : true,
    slidesPerView: 'auto',
    loopedSlides: 8,
    effect: 'cube',
    grabCursor: true,
    
}) 
var colSwiper = new Swiper ('#certify .swiper-container', {
    watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
    loopedSlides: 5,
	autoplay: true,
	on: {
		progress: function() {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 24 + '%';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}
    
}) 

var fadeStart = $(window).height() / 3 // 100px scroll or less will equiv to 1 opacity
, fadeUntil = $(window).height() // 200px scroll or more will equiv to 0 opacity
;
$(window).bind('scroll', function () {
    var offset = $(document).scrollTop();
    if(offset < 400){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(0).css({"color":"#4ecdc4"})
    }
    if(offset >= 400 && offset<2000){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(1).css({"color":"#4ecdc4"})
    }
    if(offset >= 2000 && offset<2440){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(2).css({"color":"#4ecdc4"})
    }
    if(offset >= 2440 && offset<3475){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(3).css({"color":"#4ecdc4"})
    }
    if(offset >= 3475 && offset<4175){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(4).css({"color":"#4ecdc4"})
        if(flag){
            changeNum();
        }
    }
    if(offset >= 4175  && offset<4690){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(6).css({"color":"#4ecdc4"})
    }
    if(offset >= 4690 ){
        $('#sept-main-nav li a').css({"color":"white"});
        $('#sept-main-nav li a').eq(7).css({"color":"#4ecdc4"})
    }
    if(offset >=600 && offset<=1500){
        if(flag2){
            changePhone();
        }
    }
});
function changePhone(){
    flag2 = false;
    var text = `NFC巡检,系统报障,计划性维护,快速构建移动应用,快捷的服务响应和工单创建平台`;
    var i=0;
    timer = setInterval(function(){
        if(i >= text.length){
            clearInterval(timer);
        }
        if(text.charAt(i) == ','){
            $("#change").append('</p><p>');
        }else{
            $("#change").append(text.charAt(i));
        }
        i++;
    },100)
};
function changeNum(){
    var people = 240,city = 1,employee;
    flag = false;
    var timer2 = setInterval(function(){
        if(people >= 450){
            clearInterval(timer2);
        }
        $("#people").text(people);
        $("#city").text(city);
        people++;
        if(people % 10 == 0){
            city++;
        }
    },100);
}
$('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  });
  function send () {
      $.post('http://pythoner.55555.io/email/sendEmail/',{
        name:$('#name').val(),
        subject:$('#subject').val(),
        email:$('#email').val(),
        content:$('#content').val(),
      },function (res) {
        
      })
      $('#name').val('');
      $('#subject').val('');
      $('#email').val('');
      $('#content').val('');
  }
  function robot () {
    var text = `在传统的IFM管理服务主要是以人为核心的服务模式。
     现有的能源管理公司/节能公司，主要专注的是单体设备的节能量。
    他们并没有综合考虑受到大楼体量、朝向、建筑形式、材料、用途等因素的影响。
     也没有考虑与同一个能源站相连的各栋大楼具有各自不同的冷/热负荷需求和变化模式。
    EPC Services依托自动化管理系统，以能源大数据仓库为背景，以最低能量使用成本为至高指令。
     通过对整个企业从建筑到个人的耗能资产跟踪与管控。
     为客户量身定制从规划设计到运营管理的全生命周期多种合作模式的专属服务。
     为客户提供的价值是在传统的能源管理、设备设施管控、工业运营领域注入互联网基因。`;
    var i=0;
    var timer3 = setInterval(function(){
        if(i >= text.length){
            $('.robot').css('display','none');
            clearInterval(timer3);
        }
        if(text.charAt(i) == '。'){
            $("#robot").html('');
        }else{
            $("#robot").append(text.charAt(i));
        }
        i++;
    },200)
  }
  robot();