"use strict";var scroll=new SmoothScroll('a[href*="#"]',{speed:700,speedAsDuration:!0});$(".burger").on("click",(function(){$(this).toggleClass("active"),$(".menu__list").slideToggle()})),$("input, checkbox, select").styler({selectSearch:"true",selectVisibleOptions:"7"});var ul=document.querySelector(".menu__list"),li=document.querySelectorAll(".menu__link");li.forEach((function(e){e.addEventListener("click",(function(){ul.querySelector(".menu__link--active").classList.remove("menu__link--active"),e.classList.add("menu__link--active")}))})),$("input[type=range]").ionRangeSlider({grid:!0,hide_min_max:!0,hide_from_to:!0,values:["Не владею","Использую готовые решения","Использую готовые решения и умею и переделывать","Пишу сложный JS с нуля"],min:0,max:3,from:2});