function choosePrice(x) {
    var choose = x.value;
    if (choose == '1') {
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[2].innerText;
            if (td < 100) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    } else if (choose == '2') {
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[2].innerText;
            if (td >= 100 && td < 250) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    } else if (choose == '3') {
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[2].innerText;
            if (td >= 250 && td < 500) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    } else if (choose == '4') {
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[2].innerText;
            if (td >= 500) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    } else {
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[2].innerText;
            tr[i].style.display = '';
        }
    }
    sumMoney();
}

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var checkAll = $('#checkAll');
var checkBoxes = $$('.check');
var inputNumbers = $$('input[type="number"]');

checkAll.onchange = function() {
    checkBoxes.forEach(checkBox => {
        if (checkAll.checked == true) {
            checkBox.checked = true
        } else {
            checkBox.checked = false
        }
    })

    inputNumbers.forEach(input => {
        input.disabled = !checkAll.checked ? true : false
    })

}

for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].onchange = function() {
        for (var i = 0; i < inputNumbers.length; i++)
            inputNumbers[i].disabled = !checkBoxes[i].checked ? true : false
    }
}

function bill(x) {
    var amount = x.value;
    var price = x.parentNode.previousElementSibling.innerText;
    x.parentNode.nextElementSibling.innerText = amount * price;
    sumMoney();
}


function sumMoney() {
    var sum = 0;
    var arrBill = document.getElementsByName('bill');
    for (var i = 0; i < arrBill.length; i++) {
        if (arrBill[i].parentNode.style.display == '') {
            money = arrBill[i].innerText;
            sum += Number(money);
        }
    }
    document.getElementById("sumMoney").innerText = sum;
}