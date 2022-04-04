var item1 = document.querySelector(".item-1");
var item2 = document.querySelector(".item-2");
var item3 = document.querySelector(".item-3");
var item4 = document.querySelector(".item-4");
var infoMenu = document.querySelector(".info-menu");

item1.addEventListener("click", function(){
	if (infoMenu.getAttribute("data-active-info") === item1.getAttribute("data-item") ){
		infoMenu.setAttribute("data-active-info", "");
	} else {
		infoMenu.setAttribute("data-active-info", item1.getAttribute("data-item"));
	}
})
item2.addEventListener("click", function(){
	if (infoMenu.getAttribute("data-active-info") === item2.getAttribute("data-item") ){
		infoMenu.setAttribute("data-active-info", "");
	} else {
		infoMenu.setAttribute("data-active-info", item2.getAttribute("data-item"));
	}
})
item3.addEventListener("click", function(){
	if (infoMenu.getAttribute("data-active-info") === item3.getAttribute("data-item") ){
		infoMenu.setAttribute("data-active-info", "");
	} else {
		infoMenu.setAttribute("data-active-info", item3.getAttribute("data-item"));
	}
})
item4.addEventListener("click", function(){
	if (infoMenu.getAttribute("data-active-info") === item4.getAttribute("data-item") ){
		infoMenu.setAttribute("data-active-info", "");
	} else {
		infoMenu.setAttribute("data-active-info", item4.getAttribute("data-item"));
	}
})