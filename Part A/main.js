window.onload = initfunction;

// Current Date
function initfunction() {
    var today = new Date();
    var date = today.toLocaleString('en-US');
    document.getElementById("time").innerHTML = date;
}

var customerArray = [];
var indexvalue = 0;

function customerOrder() {

    var customerObject = {
        fname,
        lname,
        address,
        phone,
        pizza: [],
        sandwitch: [],
        drink: [],
        total: []
    };
    var pizzaName = "";
    var pizzaSize = "";
    var toppingName = "";
    var sizePrice = 0.00;
    var pizzaQuauntity = 0;
    var toppingAmount = 0.00;
    var pizzaTotal = 0.00;

    // Customer Information
    customerObject.fname = document.getElementById("fname").value;
    customerObject.lname = document.getElementById("lname").value;
    customerObject.address = document.getElementById("address").value;
    customerObject.phone = document.getElementById("phone").value;

    //Pizza Order
    if (document.querySelector('input[name=Cheesy]:checked')) {
        pizzaName = document.querySelector('input[name=Cheesy]:checked').value;
        if (document.getElementById("s1").checked) {
            pizzaSize = document.getElementById("s1").value;
            sizePrice = 8.50;
        } else if (document.getElementById("m1").checked) {
            pizzaSize = document.getElementById("m1").value;
            sizePrice = 11.50;
        } else if (document.getElementById("l1").checked) {
            pizzaSize = document.getElementById("l1").value;
            sizePrice = 14.00;
        } else if (document.getElementById("e1").checked) {
            pizzaSize = document.getElementById("e1").value;
            sizePrice = 16.50;
        }
        pizzaQuauntity = document.getElementById("Cheesy_quantity").value;
        pizzaTotal = sizePrice * parseInt(pizzaQuauntity);

        if (document.querySelector('input[name=Cheese1]:checked')) {
            toppingName += " " + document.querySelector('input[name=Cheese1]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni1]:checked')) {
            toppingName += " " + document.querySelector('input[name=Pepperoni1]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms1]:checked')) {
            toppingName += " " + document.querySelector('input[name=Mushrooms1]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon1]:checked')) {
            toppingName += " " + document.querySelector('input[name=Bacon1]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives1]:checked')) {
            toppingName += " " + document.querySelector('input[name=Olives1]:checked').value;
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
    }
    if (document.querySelector('input[name=Meaty]:checked')) {
        pizzaName = document.querySelector('input[name=Meaty]:checked').value;
        if (document.getElementById("s2").checked) {
            pizzaSize = document.getElementById("s2").value;
            sizePrice = 8.50;
        } else if (document.getElementById("m2").checked) {
            pizzaSize = document.getElementById("m2").value;
            sizePrice = 11.50;
        } else if (document.getElementById("l2").checked) {
            pizzaSize = document.getElementById("l2").value;
            sizePrice = 14.50;
        } else if (document.getElementById("e2").checked) {
            pizzaSize = document.getElementById("e2").value;
            sizePrice = 16.50;
        }
        pizzaQuauntity = document.getElementById("Meaty_quantity").value;
        pizzaTotal = sizePrice * parseInt(pizzaQuauntity);

        if (document.querySelector('input[name=Cheese2]:checked')) {
            toppingName += " " + document.querySelector('input[name=Cheese2]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni2]:checked')) {
            toppingName += " " + document.querySelector('input[name=Pepperoni2]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms2]:checked')) {
            toppingName += " " + document.querySelector('input[name=Mushrooms2]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon2]:checked')) {
            toppingName += " " + document.querySelector('input[name=Bacon2]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives2]:checked')) {
            toppingName += " " + document.querySelector('input[name=Olives2]:checked').value;
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
    }
    if (document.querySelector('input[name=Veggy]:checked')) {
        pizzaName = document.querySelector('input[name=Veggy]:checked').value;
        if (document.getElementById("s3").checked) {
            pizzaSize = document.getElementById("s3").value;
            sizePrice = 8.50;
        } else if (document.getElementById("m3").checked) {
            pizzaSize = document.getElementById("m3").value;
            sizePrice = 11.50;
        } else if (document.getElementById("l3").checked) {
            pizzaSize = document.getElementById("l3").value;
            sizePrice = 14.50;
        } else if (document.getElementById("e3").checked) {
            pizzaSize = document.getElementById("e3").value;
            sizePrice = 16.50;
        }
        pizzaQuauntity = document.getElementById("Veggy_quantity").value;
        pizzaTotal = sizePrice * parseInt(pizzaQuauntity);

        if (document.querySelector('input[name=Cheese3]:checked')) {
            toppingName += " " + document.querySelector('input[name=Cheese3]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni3]:checked')) {
            toppingName += " " + document.querySelector('input[name=Pepperoni3]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms3]:checked')) {
            toppingName += " " + document.querySelector('input[name=Mushrooms3]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon3]:checked')) {
            toppingName += " " + document.querySelector('input[name=Bacon3]:checked').value;
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives3]:checked')) {
            toppingName += " " + document.querySelector('input[name=Olives3]:checked').value;
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + "  " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
    }

    // Sandwitch Order

    var sandName = "";
    var sandPrice = 0.00;
    var sandQuantity = 0;
    var sandTotal = 0.00;

    if (document.querySelector('input[name=Vegetarian]:checked')) {
        sandName = document.querySelector('input[name=Vegetarian]:checked').value;
        sandPrice = 7.50;
        sandQuantity = document.getElementById("Vegetarian_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
    }
    if (document.querySelector('input[name=Beef]:checked')) {
        sandName = document.querySelector('input[name=Beef]:checked').value;
        sandPrice = 8.50;
        sandQuantity = document.getElementById("Beef_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
    }
    if (document.querySelector('input[name=Grill]:checked')) {
        sandName = document.querySelector('input[name=Grill]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Grill_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
    }
    if (document.querySelector('input[name=Pork]:checked')) {
        sandName = document.querySelector('input[name=Pork]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Pork_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
    }

    // Drink Order
    var drinkName = "";
    var drinkSize = "";
    var drinkPrice = 0.00;
    var drinkQuantity = 0;
    var drinkTotal = 0.00;

    if (document.querySelector('input[name=Cola]:checked')) {
        drinkName = document.querySelector('input[name=Cola]:checked').value;
        if (document.getElementById("ds1").checked) {
            drinkSize = document.getElementById("ds1").value;
            drinkPrice = 1.25;
        } else if (document.getElementById("dm1").checked) {
            drinkSize = document.getElementById("dm1").value;
            drinkPrice = 1.75;
        } else if (document.getElementById("dl1").checked) {
            drinkSize = document.getElementById("dl1").value;
            drinkPrice = 2.00;
        }
        drinkQuantity = document.getElementById("Cola_quantity").value;
        drinkTotal = drinkPrice * parseInt(drinkQuantity);
        customerObject.drink.push(drinkQuantity + " " + drinkSize + " " + drinkName + " $" + drinkTotal.toFixed(2));
        customerObject.total.push(drinkTotal);
    }
    if (document.querySelector('input[name=Orange]:checked')) {
        drinkName = document.querySelector('input[name=Orange]:checked').value;
        if (document.getElementById("ds2").checked) {
            drinkSize = document.getElementById("ds2").value;
            drinkPrice = 1.25;
        } else if (document.getElementById("dm2").checked) {
            drinkSize = document.getElementById("dm2").value;
            drinkPrice = 1.75;
        } else if (document.getElementById("dl2").checked) {
            drinkSize = document.getElementById("dl2").value;
            drinkPrice = 2.00;
        }
        drinkQuantity = document.getElementById("Orange_quantity").value;
        drinkTotal = drinkPrice * parseInt(drinkQuantity);
        customerObject.drink.push(drinkQuantity + " " + drinkSize + " " + drinkName + " $" + drinkTotal.toFixed(2));
        customerObject.total.push(drinkTotal);
    }
    if (document.querySelector('input[name=Lemon]:checked')) {
        drinkName = document.querySelector('input[name=Lemon]:checked').value;
        if (document.getElementById("ds3").checked) {
            drinkSize = document.getElementById("ds3").value;
            drinkPrice = 1.25;
        } else if (document.getElementById("dm3").checked) {
            drinkSize = document.getElementById("dm3").value;
            drinkPrice = 1.75;
        } else if (document.getElementById("dl3").checked) {
            drinkSize = document.getElementById("dl3").value;
            drinkPrice = 2.00;
        }
        drinkQuantity = document.getElementById("Lemon_quantity").value;
        drinkTotal = drinkPrice * parseInt(drinkQuantity);
        customerObject.drink.push(drinkQuantity + " " + drinkSize + " " + drinkName + " $" + drinkTotal.toFixed(2));
        customerObject.total.push(drinkTotal);
    }
    if (document.querySelector('input[name=Rootbeer]:checked')) {
        drinkName = document.querySelector('input[name=Rootbeer]:checked').value;
        if (document.getElementById("ds4").checked) {
            drinkSize = document.getElementById("ds4").value;
            drinkPrice = 1.25;
        } else if (document.getElementById("dm4").checked) {
            drinkSize = document.getElementById("dm4").value;
            drinkPrice = 1.75;
        } else if (document.getElementById("dl4").checked) {
            drinkSize = document.getElementById("dl4").value;
            drinkPrice = 2.00;
        }
        drinkQuantity = document.getElementById("Rootbeer_quantity").value;
        drinkTotal = drinkPrice * parseInt(drinkQuantity);
        customerObject.drink.push(drinkQuantity + " " + drinkSize + " " + drinkName + " $" + drinkTotal.toFixed(2));
        customerObject.total.push(drinkTotal);
    }

    // Total Calculator
    var total = parseFloat(0);

    for (var x = 0; x < customerObject.total.length; x++) {
        total += customerObject.total[x];
    }
    customerObject.total = total;

    // Into CustomerArray
    customerArray.push(customerObject);
    displayOrder();

}

function displayOrder() {

    var customerOrder = "";
   
    for (var i = 0; i < customerArray.length; i++) {

        var customerObject = {
            fname,
            lname,
            address,
            phone,
            pizza: [],
            topping: [],
            sandwitch: [],
            drink: [],
            total
        };

        customerObject = customerArray[i];

        customerOrder = customerObject.fname + " " + customerObject.lname + "<br>" + customerObject.address + "<br>" + customerObject.phone + "<br><br>";
        customerOrder += "Your order: " + "<br><br>";
        customerOrder += "Pizza:" + "<br>";
        for (var x = 0; x < customerObject.pizza.length; x++) {
            customerOrder += customerObject.pizza[x] + "<br>";
        }
        console.log(customerOrder);
        customerOrder += "<br>" + "Sandwiches:" + "<br>";
        for (var x = 0; x < customerObject.sandwitch.length; x++) {
            customerOrder += customerObject.sandwitch[x] + "<br>";
        }
        console.log(customerOrder);
        customerOrder += "<br>" + "Drinks" + "<br>";
        for (var x = 0; x < customerObject.drink.length; x++) {
            customerOrder += customerObject.drink[x] + "<br>";
        }
        console.log(customerOrder);
        customerOrder += "<br>" + "Order Total:  " + "  $" + customerObject.total.toFixed(2);
      
    }
    document.getElementById('ordered').innerHTML = customerOrder;
}

