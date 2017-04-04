/*! * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license  */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(arguments.length>1&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});


/*

Template: The Whizz - Personal Resume HTML Template
Author: goldenmace.in
Version: 1.0
Design and Developed by: goldenmace.in

NOTE: This file Change the styling of color, backgrond patterns, Background images and box layout of the actual Template. so you can change as your requirement.

*/

/* style-customizer */


jQuery(document).ready(function($) {

		/*************************
       			Right sidebar
		*************************/
		style_switcher = $('.style-customizer'),
		panelWidth = style_switcher.outerWidth(true);
		$('.style-customizer .opener').on("click", function(){
			var $this = $(this);
			if ($(".style-customizer.closed").length>0) {
				style_switcher.animate({"right" : "0px"});
				$(".style-customizer.closed").removeClass("closed");
				$(".style-customizer").addClass("opened");
			} else {
				$(".style-customizer.opened").removeClass("opened");
				$(".style-customizer").addClass("closed");
				style_switcher.animate({"right" : '-' + panelWidth});
			}
			return false;
		});
		
		/*************************
       		 style change 
		*************************/
		var link = $('link[data-style="styles"]'),
		link_no_cookie = $('link[data-style="styles-no-cookie"]'); 

 		/*************************
       		 Color Changer
		*************************/
		$('.style-customizer .styleChange li').on('click',function(){
			if (link.length>0) {
				var $this = $(this),
					tp_stylesheet = $this.data('style');
				$(".style-customizer .styleChange .selected").removeClass("selected");
				$this.addClass("selected");
				link.attr('href', 'css/color/' + tp_stylesheet + '.css');
				if ($(".swicher-title-page-dark").length>0) {
					document.getElementById("logo_img").src="images/color-customizer/logo_dark_swicher-title_" + tp_stylesheet + ".png";
				} else {
					if ($("#logo_img").length>0) {
						document.getElementById("logo_img").src="images/color-customizer/" + tp_stylesheet + ".png";
						document.getElementById("logo_one").src="images/color-one/" + tp_stylesheet + ".png";
					};
				};
				$.cookie('tp_stylesheet', tp_stylesheet, 30);
				updatechart($( $(this) ).index( '.style-customizer .styleChange li' ));




			} else {
				var $this = $(this),
					tp_stylesheet_no_cookie = $this.data('style');
				$(".style-customizer .styleChange .selected").removeClass("selected");
				$this.addClass("selected");
				link_no_cookie.attr('href', 'css/skins/' + tp_stylesheet_no_cookie + '.css');
				if ($(".swicher-title-page-dark").length>0) {
					document.getElementById("logo_img").src="images/color-customizer/logo_dark_swicher-title_" + tp_stylesheet_no_cookie + ".png";
				} else {
					if ($("#logo_img").length>0) {
						document.getElementById("logo_img").src="images/color-customizer/logo_" + tp_stylesheet_no_cookie + ".png";
						document.getElementById("logo_one").src="images/color-one/logo_" + tp_stylesheet_no_cookie + ".png";
					};
				};
			};
		});
 
		 /**************************************
       			Reset all costomize styles
		**************************************/
		$('.style-customizer .resetAll li a.button-reset').on('click',function() { 
		
			//Logo change
			$.cookie('tp_stylesheet', 'skin-default', 30);
			var tp_stylesheet = 'skin-default';
			$('.style-customizer .styleChange li.selected').removeClass("selected");
			$('.style-customizer .styleChange li[data-style="'+tp_stylesheet+'"]').addClass("selected");
			link.attr('href', 'css/skins/' + tp_stylesheet + '.css');
			 if ($("#logo_img").length>0) {
			 	document.getElementById("logo_img").src="images/color-customizer/logo_" + tp_stylesheet + ".png";
			 };
			 if ($("#logo-footer").length>0) {
			 	document.getElementById("logo-footer").src="images/color-customizer/logo_" + tp_stylesheet + ".png";
			 };
			
 		});

});
