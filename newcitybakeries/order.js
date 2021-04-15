window.onload = initfunction;

var date = "";

/* Current Date */
function initfunction() {

    let today = new Date();
    date = today.toLocaleString('en-US');
    document.getElementById("date").innerHTML = date;

}

function change(radio) {

    if (document.getElementById("sheet").checked) {
        document.getElementById("radius").disabled = true;
        document.getElementById("cream").disabled = true;
        document.getElementById("fruit").disabled = true;
        document.getElementById("fruit_jam").disabled = true;
        document.getElementById("width").disabled = false;
        document.getElementById("length").disabled = false;
    } else {
        document.getElementById("width").disabled = true;
        document.getElementById("length").disabled = true;
        document.getElementById("radius").disabled = false;
        document.getElementById("cream").disabled = false;
        document.getElementById("fruit").disabled = false;
        document.getElementById("fruit_jam").disabled = false;
    }

}

function order() {

    let customer = "";
    let cake_message = "";
    let message = "";
    let sheetPrice = 18.00;
    let sheetSize = 900;
    let roundArea = 707;
    let roundPrice = 15.00;
    let layerPrice = 0;
    let topping_message = "";

    let fname = document.getElementById("fname").value;
    customer += fname + " ";
    let lname = document.getElementById("lname").value;
    customer += lname + "<br>";
    let address = document.getElementById("address").value;
    customer += address + "<br>";
    let postalcode = document.getElementById("postalcode").value;
    customer += postalcode + "<br>";
    let phone = document.getElementById("phone").value;
    customer += phone + "<br>";
    let email = document.getElementById("email").value;
    customer += email + "<br><br>";
    message += customer;


    if (document.getElementById("sheet").checked) {
        let cakeName = document.getElementById("sheet").value;
        cake_message += cakeName + " ";
        let width = document.getElementById("width").value;
        let length = document.getElementById("length").value;
        sheetSize -= (width * length);
        sheetSize = Math.abs(sheetSize);
        cake_message += width + "cm X " + length + "cm with ";

        if (document.getElementById("S_01").checked) {
            let layer = document.getElementById("S_01").value;
            cake_message += layer;
            sheetPrice += Math.abs(sheetSize * 0.02);
            cake_message += "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + sheetPrice + "<br>";
        } else if (document.getElementById("S_02").checked) {
            let layer = document.getElementById("S_02").value;
            cake_message += layer;
            sheetPrice += Math.abs(sheetSize * 0.02);
            layerPrice = sheetPrice * 0.5;
            sheetPrice += layerPrice;
            cake_message += "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + sheetPrice + "<br>";
        } else {
            let layer = document.getElementById("S_03").value;
            cake_message += layer;
            sheetPrice += Math.abs(sheetSize * 0.02);
            layerPrice = sheetPrice * (0.5 * 2);
            sheetPrice += layerPrice;
            cake_message += "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + sheetPrice + "<br>";
        }
        cake_message += "Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + sheetPrice + "<br>";

    } else {
        let cakeName = document.getElementById("round").value;
        cake_message += cakeName + " ";
        let radius = document.getElementById("radius").value;
        roundArea = Math.round((radius * radius) * 3.14) - roundArea;
        cake_message += radius + "cm with ";

        if (document.getElementById("S_01").checked) {
            let layer = document.getElementById("S_01").value;
            cake_message += layer;
            roundPrice += Math.abs(roundArea * 0.02);
        }
        if (document.getElementById("S_02").checked) {
            let layer = document.getElementById("S_02").value;
            cake_message += layer;
            roundPrice += Math.abs(roundArea * 0.02);
            layerPrice = roundPrice * 0.5;
            roundPrice += layerPrice;
        }
        if (document.getElementById("S_03").checked) {
            let layer = document.getElementById("S_03").value;
            cake_message += layer;
            roundPrice += Math.abs(roundArea * 0.02);
            layerPrice = roundPrice * (0.5 * 2);
            roundPrice += layerPrice;
        }
        cake_message += "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + roundPrice + "<br>";

        if (document.querySelector('input[name=cream]:checked')) {
            topping_message += (document.querySelector('input[name=cream]:checked').value + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $5" + "<br>");
            roundPrice += 5;
        }
        if (document.querySelector('input[name=fruit]:checked')) {
            topping_message += (document.querySelector('input[name=fruit]:checked').value + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $7" + "<br>");
            roundPrice += 7;
        }
        if (document.querySelector('input[name=fruit_jam]:checked')) {
            topping_message += (document.querySelector('input[name=fruit_jam]:checked').value + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $4" + "<br>");
            roundPrice += 4;
        }

        cake_message += topping_message + "Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $" + roundPrice + "<br>";
    }

    message = date + "<br>" + customer + "Your order: <br><br>" + cake_message;

    document.getElementById('ordered').innerHTML = message;


}
