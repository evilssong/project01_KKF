$(window).ready(function(){
		var currentN=1;
		$(".link li").eq(currentN).addClass("active");

		setTimeout(function(){
			$(".link li").addClass("transition");
			$(".link li a").addClass("transition");
		}, 100);

		$(".link li").hover(
			function(){
				$(".link li").removeClass("active");
				$(this).addClass("active");   
			},
			function(){
				$(".link li").removeClass("active");
				$(this).removeClass("active");
					$(".link li").eq(currentN).addClass("active");
			}
		);
		$(".link li").focusin(function(){
			$(".link li").removeClass("active");
			$(this).addClass("active");
		});
		$(".link li").focusout(function(){
			$(this).removeClass("active");
			$(".link li").eq(currentN).addClass("active");
		});


		$(".utils li").hover(
			function(){
				$(".utils li").removeClass("active");
				$(this).addClass("active");   
			},
			function(){
				$(".utils li").removeClass("active");
				$(this).removeClass("active");
			}
		);
		$(".utils li").focusin(function(){
			$(".utils li").removeClass("active");
			$(this).addClass("active");
		});
		$(".utils li").focusout(function(){
			$(this).removeClass("active");
		});

		$("#gnb > ul > li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
			}
		);
		$("#gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("active");
		});
		$("#gnb li li:last-child").focusout(function(){
			$(this).parents(".subwrap").parent().removeClass("active");
		});


		$("#gnb > ul > li").mouseenter(function(){
			$(".menu").addClass("active");
		});
		$("#gnb > ul").mouseleave(function(){
			$(".menu").removeClass("active");
		});
		$("#gnb > ul > li:first-child > a").focusin(function(){
			$(".menu").addClass("active");
		});
		$("#gnb li:last-child li:last-child a").focusout(function(){
			$(".menu").removeClass("active");
		});


		$(".search_box .title li:first-child a").addClass("active");
		$(".search_box .search_list").addClass("active");

		$(".search input").click(function(){
			$(".search_box").addClass("active");
		});
		$(".search input").focusin(function(){
			$(".search_box").addClass("active");
		});

		var listData=[".search_list", ".hot_list"];

		$(".search_box .title li").click(function(e){
			e.preventDefault();
			$(".search_box .title li a").removeClass("active");
			$(this).find("a").addClass("active");

			$(".search_box div[class*=_list]").removeClass("active");
			$(listData[$(this).index()]).addClass("active");
		});

		$(".search_box .btns .close a").click(function(e){
			e.preventDefault();
			$(".search input").focus();
			$(".search_box").removeClass("active");
		});
		$(".search_box .btns .close a").focusout(function(){
			console.log("focusout");
			$(".search input").focus();
		});


		$(document).on("click", function(e){
			console.log($(e.target).parents(".search"));
			if($(e.target).parents(".search").length == 0){
				$(".search_box").removeClass("active");
			}
		});
			

		$(".info_banner li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
			}
		);
		$(".info_banner li").focusin(function(){
			$(this).addClass("active");
		});
		$(".info_banner li").focusout(function(){
			$(this).removeClass("active");
		});


		$(".gallery img").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
			}
		);
		$(".gallery a").focusin(function(){
			$(this).children().addClass("active");
		});
		$(".gallery a").focusout(function(){
			$(this).children().removeClass("active");
		});



		$(".news_list li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
			}
		);
		$(".news_list li").focusin(function(){
			$(this).addClass("active");
		});
		$(".news_list li").focusout(function(){
			$(this).removeClass("active");
		});

		$(".family_site").click(function(e){
			e.preventDefault();
			$(this).find(".content").slideToggle(300);
			$(this).find("img").toggleClass("active");
		});
		$(".family_site").hover(
			function(){
				$(".content").slideDown(300);
				$(".family_site img").addClass("active");
			},
			function(){
				$(".content").slideUp(300);
				$(".family_site img").removeClass("active");
		});
		$(".family_site .name a").focusin(function(){
			$(".content").slideDown(300);
			$(".family_site img").addClass("active");
		});
		$(".content li:last-child a ").focusout(function(){
			$(".content").slideUp(300);
			$(".family_site img").removeClass("active");
		});


		$(".content li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
		});
		$(".content li").focusin(function(){
			$(this).addClass("active");
		});
		$(".content li").focusout(function(){
			$(this).removeClass("active");
		});


		$(".sns li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$(this).removeClass("active");
		});
		$(".sns li").focusin(function(){
			$(this).addClass("active");
		});
		$(".sns li").focusout(function(){
			$(this).removeClass("active");
		});

		var mainSwiper=new Swiper(".mainSwiper", {
			speed: 1000, 
			effect: "fade", 
			adeEffect: { 
				crossFade: true
			},
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: { 
				el: ".mainSwiper .swiper-pagination",
				clickable: true,
			},
			on: {
				touchEnd: function(){
					setTimeout(() => {
						this.autoplay.start();
					}, 10);
				},
			},
		});
		$(".main_slider .prev").click(function(e){
			e.preventDefault();
			mainSwiper.slidePrev();
		});
		$(".main_slider .next").click(function(e){
			e.preventDefault();
			mainSwiper.slideNext();
		});
		$("#pause_play").click(function(e){
			e.preventDefault();
			var flag=$(this).hasClass("play");

			if(flag){
				$(this).removeAttr("class");
				$(this).addClass("pause");
				$(this).text("pause");
				mainSwiper.autoplay.start();
			}
			else{
				$(this).removeAttr("class");
				$(this).addClass("play");
				$(this).text("play");
				mainSwiper.autoplay.stop();
			}
		});
	});