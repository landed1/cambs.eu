/*http://stackoverflow.com/questions/10462747/twitter-bootstrap-carousel-using-joomla-and-its-mootools*/
if (typeof jQuery != 'undefined') { 
(function($) { 
       $(document).ready(function(){
        $('.carousel').each(function(index, element) {
                $(this)[index].slide = null;
               });
         });
 })(jQuery);
}
/*END OF http://stackoverflow.com/questions/10462747/twitter-bootstrap-carousel-using-joomla-and-its-mootools*/

//console.log($);

//var myVar=setInterval(function () {myTimer()}, 1000);

function myTimer() {
	var head = $("#iframe").contents().find(".title");
	//console.log(head);
	var css = '<style type="text/css">' +
          '#banner{display:none}; ' +
          '</style>';

}


// Shorthand for $( document ).ready()
$(function() {
	
	//FastClick.attach(document.body);
	//console.log($('footer'));

	$('#totop').on('click',function(event){
		var myFx = new Fx.Scroll(window, {
    									offset: {
        								x: 0,
        								y: 0}
			}).toTop();
	})
    	
	//console.log('JQ is ready');
});



