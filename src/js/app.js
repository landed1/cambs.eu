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
	console.log($('footer'));

	$('#totop').on('click',function(event){
		var myFx = new Fx.Scroll(window, {
    									offset: {
        								x: 0,
        								y: 0}
			}).toTop();
	})
    	
	//console.log('JQ is ready');
});



