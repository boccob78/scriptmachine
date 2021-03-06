console.log("Chrome extension is running!");

var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
/*
var yourCodeToBeCalled = function(){
javascript:(function(){function c(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",f);e.setAttribute("class",l);document.body.appendChild(e)}function h(){var e=document.getElementsByClassName(l);for(var t=0;t<e.length;t++){document.body.removeChild(e[t])}}function p(){var e=document.createElement("div");e.setAttribute("class",a);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}function d(e){return{height:e.offsetHeight,width:e.offsetWidth}}function v(i){var s=d(i);return s.height>e&&s.height<n&&s.width>t&&s.width<r}function m(e){var t=e;var n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function g(){var e=document.documentElement;if(!!window.innerWidth){return window.innerHeight}else if(e&&!isNaN(e.clientHeight)){return e.clientHeight}return 0}function y(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function E(e){var t=m(e);return t>=w&&t<=b+w}function S(){var e=document.createElement("audio");e.setAttribute("class",l);e.src=i;e.loop=false;e.addEventListener("canplay",function(){setTimeout(function(){x(k)},500);setTimeout(function(){N();p();for(var e=0;e<O.length;e++){T(O[e])}},15500)},true);e.addEventListener("ended",function(){N();h()},true);e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function x(e){e.className+=" "+s+" "+o}function T(e){e.className+=" "+s+" "+u[Math.floor(Math.random()*u.length)]}function N(){var e=document.getElementsByClassName(s);var t=new RegExp("\\b"+s+"\\b");for(var n=0;n<e.length;){e[n].className=e[n].className.replace(t,"")}}var e=30;var t=30;var n=350;var r=350;var i="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";var s="mw-harlem_shake_me";var o="im_first";var u=["im_drunk","im_baked","im_trippin","im_blown"];var a="mw-strobe_light";var f="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";var l="mw_added_css";var b=g();var w=y();var C=document.getElementsByTagName("*");var k=null;for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){if(E(A)){k=A;break}}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");return}c();S();var O=[];for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){O.push(A)}}})()
}
*/

var styleblock="p.bubble{position:relative;width:300px;text-align:center;line-height:1.4em;margin:40px auto;background-color:#fff;border:8px solid #333;border-radius:30px;font-family:sans-serif;padding:20px;font-size:large}p.thought{width:300px;border-radius:200px;padding:30px}p.bubble:after,p.bubble:before{content:' ';position:absolute;width:0;height:0}p.speech:before{left:30px;bottom:-50px;border:25px solid;border-color:#333 transparent transparent #333}p.speech:after{left:38px;bottom:-30px;border:15px solid;border-color:#fff transparent transparent #fff}p.thought:after,p.thought:before{left:10px;bottom:-30px;width:40px;height:40px;background-color:#fff;border:8px solid #333;-webkit-border-radius:28px;-moz-border-radius:28px;border-radius:28px}p.thought:after{width:20px;height:20px;left:5px;bottom:-40px;-webkit-border-radius:18px;-moz-border-radius:18px;border-radius:18px}";

var scriptsAllowed;

$("head").append("<style>"+styleblock+"</style>");
//
function addBubbles(){
    if(scriptsAllowed) {
        $('.v1Nh3').each(function () {
            if ($(this).find('.bubble').length === 0) {
                console.log('adding bubble element ');
                var currentMarkup = $(this).html();
                $(this).prepend('<p class="bubble thought">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nemo, debitis.</p>');
            } else {
                console.log('found bubble element ' + $(this).find('.bubble').length);
            }
        });
    }

}

$( document ).on('wheel scroll load', function(e){
    console.log('attaching to image');
    addBubbles();
});


var yourCodeToBeCalled = function(){

    scriptsAllowed = true;
/* $.when(
    $.getScript( "https://bluqr.com/js/harlemshake.js" )
	).done(function(data){
    eval(data);
 */    //place your code here, the scripts are all loaded
//$("head").append("<style>"+styleblock+"</style>");
    // var myRequestLog = []; // Using `var` (instead of `let` or `const`) so it creates an implicit property on the (global) `window` object so you can easily access this log from anywhere just by using `window.myRequestLog[...]`.
    // function onRequestsObserved( batch ) {
    //     let xhrReqs=batch.getEntries().filter(entry => entry.initiatorType ==='xmlhttprequest' && entry.name.indexOf('graphql') > 0);
    //     for(let i=0;i<batch.getEntries().length;i++){
    //         if(batch.getEntries()[i].name.indexOf('graphql') > 0) {
    //             console.log('FOUND XHR REQUEST');
    //             addBubbles();
    //         }
    //     }
    //     console.dir(batch.getEntries());
    //     myRequestLog.push( ...batch.getEntries() );
    // }
    // var requestObserver = new PerformanceObserver( onRequestsObserved );
    // requestObserver.observe( { type: 'resource' /*, buffered: true */ } );

    $('.v1Nh3').each(function(){
	console.log('adding markup to image '+$( this ));
	var currentMarkup = $( this ).html();
	$( this ).html('<p class="bubble thought">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nemo, debitis.</p>'+currentMarkup);
	});

// console.log('logging scroll event');
//     document.addEventListener("DOMNodeInserted", function(e) {
//         $('.v1Nh3').each(function(){
//             if($( this ).find('.bubble').length === 0 ) {
//                 console.log('adding bubble element ');
//                 var currentMarkup = $( this ).html();
//                 $( this ).html('<p class="bubble thought">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, nemo, debitis.</p>'+currentMarkup);
//             }else{
//                 console.log('found bubble element ');
//             }
//         });
//     }, false);


}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      yourCodeToBeCalled();
      console.log('loaded youcode.js');
    }
  }
);

// A message is received
function receiver(request, sender, sendResponse) {

console.log('a message is received');
  // Grab every single DOM element
  var elts = document.getElementsByTagName('*');

  // Change the background color and font-size
  // according to the message
  for (var i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = request.color;
    elts[i].style['font-size'] = request.size + '%';
  }

}