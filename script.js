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
    if (oP < 40) {
        fiP = (oP+5);
 } else if (oP < 200) {
        fiP = (oP * 1.15);
    } else if (oP < 500) {
        fiP = (oP * 1.07);
    } else if (oP < 1000) {
        fiP = (oP * 1.05);
    } else {
        fiP = (oP * 1.04) ;
    }

    var totalPrice = fiP + (w * 0.023) ;

    var tomanPrice = totalPrice * 200.000 ;
 
var formattedTomanPrice = tomanPrice.toLocaleString();

    
    document.getElementById("result").innerHTML = "قیمت نهایی تحویل در ایران (به یورو): " + "<strong>" + totalPrice.toFixed(2) + "</strong>";

  
}


