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
        fiP = oP * 1.09;
    } else if (oP < 500) {
        fiP = oP * 1.07;
    } else if (oP < 1000) {
        fiP = oP * 1.05;
    } else {
        fiP = oP * 1.03;
    }

    var totalPrice = fiP + (w * 0.015) + 2;

    document.getElementById("result").innerHTML = "<strong>قیمت نهایی تحویل در ایران (به یورو): </strong>" + "<strong>" + totalPrice.toFixed(2) + "</strong>";

    document.getElementById("additionalInfo").innerHTML = "قیمت یورو بر اساس قیمت حواله یورو است که معادل با 200 تومان بالاتر از قیمت فروش سایت بن بست است.";
}
