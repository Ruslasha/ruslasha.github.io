a = 0;
function ShowCatalog() {
    if (a == 0) {
        var catalog = document.getElementById('Catalog');
        catalog.classList.remove('hide');
        a = 1
    } else if (a == 1) {
        var catalog = document.getElementById('Catalog');
        catalog.classList.add('hide');
        a = 0
    }
}

function ShowKorz() {
    if (a == 0) {
        var korzina = document.getElementById('korzina');
        var bodya = document.getElementById('katAll');
        var summa = document.getElementById('summa');
        korzina.classList.remove('hide');
        summa.classList.remove('hide');

        bodya.classList.add('hide');
        a = 1
    } else if (a == 1) {
        var korzina = document.getElementById('korzina');
        var bodya = document.getElementById('katAll');
        var summa = document.getElementById('summa');
        var order = document.getElementById('order');
        summa.classList.add('hide');
        bodya.classList.remove('hide');
        korzina.classList.add('hide');
        order.classList.add('hide');
        a = 0
    }
}

b = 0;
function ShowOrder() {
    if (b == 0) {
        var order = document.getElementById('order');
        var korzina = document.getElementById('korzina');
        var summa = document.getElementById('summa');
        summa.classList.add('hide');
        korzina.classList.add('hide');
        order.classList.remove('hide');
       
        b = 1
    } else if (b == 1) {
        var order = document.getElementById('order');
        var korzina = document.getElementById('korzina');
       
        korzina.classList.remove('hide');
        order.classList.add('hide');
        b = 0
    }
}

var number = 1;
var name = '';
var sum = 0;
var numberElem = 0;
function addToKorz(Price,idZagolovok) {

    numberElem++
    var findZagolovok = document.getElementById(idZagolovok);
    var zagolovok = findZagolovok.textContent || findZagolovok.innerText;

    Price = Price * number;

    var el = document.getElementById('korz');
    el.textContent = numberElem + ". " + zagolovok + "; Цена: " + Price;
    el.removeAttribute('id');
    sum = sum + Price;

    var newElem = document.createElement('p');
    
    document.getElementById('korzina').appendChild(newElem);
    newElem.setAttribute('id','korz');
    number = 1;

    var sumAll = document.getElementById('SumAll');
    sumAll.textContent = "Общая сумма: " + sum + " рублей.";

    

}