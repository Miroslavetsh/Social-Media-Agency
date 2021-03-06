$(function() {

	// WEBP format 
	
	function testWebP(callback) {

		var webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	$('.header__burger').on( 'click', () => {
	$('.header__burger, .header__nav').toggleClass('active')
	$('body').toggleClass('lock')
})

	$(document).ready(function () {
	$('.block__title').click(function (event) {
		event.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300);
	})
})

	// Nav

	let introH = $("#intro").innerHeight(), 
	scrollOffset = $(window).scrollTop(),
	header = $("#header")

	checkScroll(scrollOffset)

	$(window).on("scroll", () => {

		scrollOffset = $(this).scrollTop()

		checkScroll(scrollOffset)

	})

	function checkScroll(scrollOffset){

		scrollOffset >= introH+400? header.addClass("fixed") :header.removeClass("fixed")
	}

	// Smooth scroll

	let btn = $("#header__logo")

	jQuery(window).on("scroll", scroll)
	
	$("nav").on("click tap","a", function(event) {

	    event.preventDefault()

	    jQuery(window).off("scroll", scroll)
	     $("a.active").removeClass("active")
	     $(event.target).addClass("active")

	    let id  = $(this).attr("href"),
	        top = $(id).offset().top
	     
	    $("body,html").animate({
	            scrollTop: top
	    }, 800, null, () => {
	        jQuery(window).on("scroll", scroll)
	      })
	})

	btn.on("click tap", event =>{
	   event.preventDefault()

	   $("html, body").animate({scrollTop:0}, '300')
	})

	function scroll(){

		const $sections = $("section")
		$sections.each((i,el) =>{
		    const top  = $(el).offset().top
		    const bottom = top +$(el).height()
		    const scroll = $(window).scrollTop()
		    const id = $(el).attr("id")

		    if( scroll > top && scroll < bottom){
		        $("a.active").removeClass("active")
		        $("a[href='#"+id+"']").addClass("active")
		    }
		    if (scroll == 0) {
				$("a.active").removeClass("active")
			}
		})

		const $footer = $("footer")
		$footer.each((i,el) =>{
		    const top  = $(el).offset().top
		    const bottom = top +$(el).height()
		    const scroll = $(window).scrollTop()
		    const id = $(el).attr("id")

		    if( scroll > top && scroll < bottom){
		        $("a.active").removeClass("active")
		        $("a[href='#"+id+"']").addClass("active")
		    }
		    if (scroll <= 800) {
				$("a.active").removeClass("active")
			}
		})
	 }

	 // Parallax

	document.addEventListener('mousemove', parallax)

	function parallax(e) {
		this.querySelectorAll('.parallax').forEach(par => {
			const speed = par.getAttribute('data-speed')

			const x = (window.innerWidth - e.pageX*speed)/90
			const y = (window.innerHeight - e.pageY*speed)/100

			par.style.transform = `translateX(${x}px) translateY(${y}px)`
		})
	}

	// Animation

	
	
})