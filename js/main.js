/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-21 12:48:58
 * @version $Id$
 */
   	$(document).ready(function(){
               $(".header .nav ul li").mouseover(function(){
                 var $b=$(this).index(); $(".header .nav ul li").eq($b).addClass('on');
               });
                $(".header .nav ul li").mouseleave(function(){
                 var $b=$(this).index(); $(".header .nav ul li").eq($b).removeClass('on');
               });
});
   	$(document).scroll(function(event){
   		var $num1=$(window).scrollTop();
   	    var $aa=$(".aa").offset().top;
   	    if ($num1>$aa) {
   	      $(".header").addClass("q");
   	    }
   	    else
   	    {
   	    	$(".header").removeClass("q").addClass("a");
   	    }
   	})

