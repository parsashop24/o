document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}

document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            answer.classList.toggle('faq-answer-visible');
        });
    });
});

// JavaScript code for calculating price
function calculateFiP() {
    var oP = parseFloat(document.getElementById("oP").value);
    var w = parseFloat(document.getElementById("w").value);
   
   var fiP;
    if (oP < 100) {
        fiP = (oP * 1.10) +1;
    } else if (oP < 500) {
        fiP = oP + (0.0625 * (oP-100) ) + 11;
    } else if (oP < 1000) {
        fiP = oP + (0.03 * (oP-500) ) + 37;
    } else {
        fiP = (oP * 1.04) + 2;
    }

    var totalPrice = fiP + (w * 0.015) ;

    var tomanPrice = totalPrice * 65.800 ;
 
var formattedTomanPrice = tomanPrice.toLocaleString();

    
    document.getElementById("result").innerHTML = "قیمت نهایی تحویل در ایران (به یورو): " + "<strong>" + totalPrice.toFixed(2) + "</strong>";

    document.getElementById("additionalInfo").innerHTML = "قیمت نهایی تحویل در ایران (به تومان): " + "<strong>" + formattedTomanPrice  + "</strong>";
}
