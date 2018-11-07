// ==UserScript==
// @name         supreme checkout
// @namespace    
// @version      0.1
// @description  try to take over the world!
// @author       Gieldid
// @match        https://www.supremenewyork.com/checkout
// @grant        none
// ==/UserScript==

(function() {
    //personal details here 
    var obn = "john doe"; //Full name
    var email = "johndoe@johndoe.com"; //email
    var tel = "0505606056"; //telephone number
    var address = "street namer 120"; //address
    var city = "Amsterdam"; //city
    var postcode = "2020HR"; //postal code
    var country ="BELARUS"; //country make sure this is the exact same as in the supreme drop down list.
    //province or state here
    //change the belows values below to your preffered payment methods
    var paymentMethod = "Visa";
    // you can leave the ones below empty if your payment method is Paypal
    var ccn = "48465456465465"; //credit card number
    var cvv = "4554"; //cvv security code
    //experation date
    var maand = "54554"; //month
    var jaar = "2020"; //year

    //Don't change anything below this line





    var ccEl = document.getElementById("credit_card_type");
    //selecteer de juiste credit card
    for(var i=0,sL=ccEl.length;i<sL;i++){
        if(ccEl.options[i].text == paymentMethod){
            ccEl.selectedIndex = i;
            break;
        }
    }

    var countryEl = document.getElementById("order_billing_country");
    for(var j=0,sjL=countryEl.length;j<sjL;j++){
        if(countryEl.options[j].text == country){
            countryEl.selectedIndex = j;
            break;
        }
    }
	

	
    document.getElementById("order_billing_name").value = obn;
    document.getElementById("order_email").value = email;
    document.getElementById("order_tel").value = tel;
    document.getElementById("bo").value = address;
    document.getElementById("order_billing_city").value = city;
    document.getElementById("order_billing_zip").value = postcode;

    //document.getElementById("credit_card_type").selectedIndex = 1; //zorg dat credit card visa is.
    if(paymentMethod != "PayPal"){


        document.getElementById("cnb").value = ccn;


        //exp. date
        document.getElementById("credit_card_month").value = maand; //maand
        document.getElementById("credit_card_year").value =  jaar; //jaar

        //cvv
        document.getElementById("vval").value = cvv;
    }


    //terms and conditions checkbox
    var  x = document.getElementsByClassName("icheckbox_minimal")[1];
    x.click();
//uncomment if there is a captcha solution
/*     var processPaymentButton = document.getElementsByClassName("button checkout")[0];
    processPaymentButton.click();
 */
})();