$("#slider_card").slick({
  dots: false,
  infinite: false,
  autoplay: false,
  arrows: true,
  prevArrow: `<button class="btn btn-sm rounded-circle prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button class="btn btn-sm rounded-circle next-arrow"><i class="fa-solid fa-chevron-right"></i></button>`,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: false,
});

$("#slider_news").slick({
  dots: false,
  infinite: false,
  autoplay: false,
  arrows: true,
  prevArrow: `<button class="btn btn-sm rounded-circle prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button class="btn btn-sm rounded-circle next-arrow"><i class="fa-solid fa-chevron-right"></i></button>`,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: false,
});
  

jQuery('.stic').stickMe({
	topOffset: 300,
	transitionDuration: 500,
shadow: false,
shadowOpacity: 0.3,
animate: false,
triggerAtCenter: true,
transitionStyle: 'fade',
stickyAlready: false,

	
	});

  jQuery('.top-bar-header .accesible-pannel a').click(function(){
		jQuery('#regularTextLink').click();
		var rel = jQuery(this).attr('class');
		if(!jQuery(this).parent().hasClass('open-panel')){
			

			jQuery(".header_top_bg .content-box").slideUp();
			
			jQuery(this).parent().addClass('open-panel');
			
			jQuery("#"+rel).slideDown();
			jQuery(this).attr("aria-expanded", "true");
			jQuery('.notify-accordian-open').text("ACCESSIBILITY PANEL IS OPEN");
		}else{
			jQuery(this).parent().removeClass('open-panel');

			jQuery("#"+rel).slideUp();
			jQuery(this).attr("aria-expanded", "false");
			jQuery('.notify-accordian-open').text("");
		};
		var teaserTop = jQuery(this).offset().top;
		jQuery("#"+rel).css('top', (teaserTop+45));
		
	});
	jQuery('.accesible-pannel').click(function(event){
		event.stopPropagation();
});
		 
jQuery('.header_top_bg .content-box .close-content-box').click(function() {
		jQuery(".header_top_bg .content-box").slideUp();
		jQuery('.top-head-header .open-panel').removeClass('open-panel');
		jQuery('.top-head-header .accessibility').attr("aria-expanded", "false");
		jQuery('.top-head-header .notify-accordian-open').text("");

});
// accessibility button on top 

jQuery('#myDiv').click(function(){
  if(jQuery('body').hasClass('text-version')){
    jQuery('body').removeClass('text-version')
    jQuery('link').prop('disabled', false);
    jQuery('#after_textversion').prop('disabled', true);
    jQuery('#myDiv .sr-only-clip').text("Disable");

    
  }
  else{
    jQuery('body').addClass('text-version')
    jQuery('link').prop('disabled', true);
    jQuery('#after_textversion').prop('disabled', false);
    jQuery('#myDiv .sr-only-clip').text("Enable");

  
  }
});



jQuery('#highContrastLink').click(function(){	
                       
  jQuery('body').toggleClass( "contrast-bg" );
  if(jQuery('body').hasClass("contrast-bg")){
    jQuery('#highContrastLink .sr-only-clip').text("Enable");
    }
  else
    jQuery('#highContrastLink .sr-only-clip').text("Disable");
  
});  

  
jQuery(document).ready(function() { 
          
  var $affectedElements = jQuery("span, div, a, p, h1, h2, h3, h4, h5, h6, li"); 
  $affectedElements.each( function(){
    var $this = jQuery(this);
    $this.data("orig-size", $this.css("font-size") );
  });

  jQuery('#largerTextLink').click(function(){	   
    changeFontSize(1);
  });  

  jQuery('#smallerTextLink').click(function(){	   
    changeFontSize(-1);
  });
  
  jQuery('#regularTextLink').click(function(){	   
    $affectedElements.each( function(){
      var $this = jQuery(this);
      $this.css( "font-size" , $this.data("orig-size") );
    });
  }); 

  function changeFontSize(direction){
  $affectedElements.each( function(){
    var $this = jQuery(this);
    $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
  });
  }

});


// counter
jQuery(".counter_item").counterUp({
  delay: 10,
  time: 5000,
});



  
jQuery(".rovers_gallery").magnificPopup({
  delegate: "a",
  type: "image",
  closeOnContentClick: false,
  closeBtnInside: false,
  mainClass: "mfp-with-zoom mfp-img-mobile",
  image: {
    verticalFit: true,
    titleSrc: function (item) {},
  },
  gallery: {
    enabled: false,
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
    opener: function (element) {
      return element.find("img");
    },
  },
});

  
