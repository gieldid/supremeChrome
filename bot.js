// ==UserScript==
// @name         SupremeBOT
// @namespace
// @version      0.1
// @description  SupremeCOPPER
// @author       Gieldid
// @match        https://www.supremenewyork.com/shop/*
// @exclude      https://www.supremenewyork.com/shop/cart
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==


//script only works if you go directly to http://www.supremenewyork.com/shop/all.
var mySize = "Large"; // your size here
var productSort = "all"; // category for quick browsing leave this on all if you don't know, otherwise copy one of the categories below
    //categories
    /*
		choose from:
        all
		jackets
		shirts
		tops-sweaters
		sweatshirts
		pants
		hats
		bags
		accesories
		skate
	*/
//Don't change anything below
(function() {
    $(".inner-article").remove(":contains('sold out')"); //this line removes all sold out pieces from the front page
    var articles = $(".inner-article");
    if(productSort != "all"){
        for(var i = 0; i < articles.length;i++)
        {
            var categorie = $(articles[i]).find("a").attr("href");
            if(categorie.indexOf(productSort) == -1){
                articles[i].remove();
            }
        }
    }
    waitForKeyElements("#img-main", exe);
})();

function exe(){
    selectSize();
    goCheckout();
}

function goCheckout(){
    var x = document.getElementById("add-remove-buttons");
    var z = x.getElementsByClassName("button")[0];
    var cart = document.getElementById("cart");

    //Stuur gebruiker naar checkout page wanneer de gebruiker een product in zijn winkelmandje heeft.
    if(z.className != "button remove"){
        z.click();
        setTimeout(goCheckout ,100);
    }else{
        window.location = "https://www.supremenewyork.com/checkout";
    }
}

//selecteer de juiste size
function selectSize(){
    var sizeObj = document.getElementById("size");
    for(var i=0,sL=sizeObj.length;i<sL;i++){
        if(sizeObj.options[i].text == mySize){
            sizeObj.selectedIndex = i;
            break;
        }
    }
}