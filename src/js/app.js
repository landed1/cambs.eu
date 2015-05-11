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
    	/*$('#video-enabler').on('click',function(){
    	alert('clicked');
    	api.play();
    })*/
	console.log('JQ is ready');
});







flowplayer(function (api, root) {
 
  api.bind("load", function () {
  	console.log('FP im loaded');

  }).bind("ready", function () {
  	console.log('FP im ready');
	document.getElementById("video-enabler").onclick = function(){console.log('click');}

  });
 
});

