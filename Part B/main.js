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
        pName: [],
        pSize: [],
        pQuantity: [],
        topping: [],
        pTopping: [],
        sandwitch: [],
        sName: [],
        sQuantity: [],
        drink: [],
        dName: [],
        dSize: [],
        dQuantity: [],
        total: []
    };
    var pizzaName = "";
    var pizzaSize = "";
    var toppingName = "";
    var pizzaTopping = "";
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
            pizzaTopping = document.querySelector('input[name=Cheese1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
            pizzaTopping = document.querySelector('input[name=Cheese2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni12]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
            pizzaTopping = document.querySelector('input[name=Cheese3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + "  " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Beef]:checked')) {
        sandName = document.querySelector('input[name=Beef]:checked').value;
        sandPrice = 8.50;
        sandQuantity = document.getElementById("Beef_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Grill]:checked')) {
        sandName = document.querySelector('input[name=Grill]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Grill_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Pork]:checked')) {
        sandName = document.querySelector('input[name=Pork]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Pork_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
    var displayRadiobuttons = "";
    for (var i = 0; i < customerArray.length; i++) {
        var customerObject = {
            fname,
            lname,
            address,
            phone,
            pizza: [],
            pName: [],
            pSize: [],
            pQuantity: [],
            topping: [],
            pTopping: [],
            sandwitch: [],
            sName: [],
            sQuantity: [],
            drink: [],
            dName: [],
            dSize: [],
            dQuantity: [],
            total: []
        };

        customerObject = customerArray[i];
        customerOrder = customerObject.fname + " " + customerObject.lname + "<br>" + customerObject.address + "<br>" + customerObject.phone + "<br><br>";
        customerOrder += "Your order: " + "<br><br>";
        customerOrder += "Pizza:" + "<br>";
        for (var x = 0; x < customerObject.pizza.length; x++) {
            customerOrder += customerObject.pizza[x] + "<br>";
        }
        customerOrder += "<br>" + "Sandwiches:" + "<br>";
        for (var x = 0; x < customerObject.sandwitch.length; x++) {
            customerOrder += customerObject.sandwitch[x] + "<br>";
        }
        customerOrder += "<br>" + "Drinks" + "<br>";
        for (var x = 0; x < customerObject.drink.length; x++) {
            customerOrder += customerObject.drink[x] + "<br>";
        }
        customerOrder += "<br>" + "Order Total:  " + "  $" + customerObject.total.toFixed(2);

        displayRadiobuttons += "<input type=radio name=listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=modifyItem(this.value)>";
        displayRadiobuttons += customerOrder + "<br><br>";
    }
    document.getElementById('ordered').innerHTML = displayRadiobuttons;
}

function modifyItem(i) {
    indexvalue = i; //need this
    var initialData;
    var initialData1;
    var initialData2;
    var initialData3;
    var initialData4;
    var initialData5;
    var initialData6;
    var initialData7;
    var initialData8;
    var initialData9;
    var initialData10;
    var initialData11;
    var pizzaSize;
    var customerObject = {
        fname,
        lname,
        address,
        phone,
        pizza: [],
        pName: [],
        pSize: [],
        pQuantity: [],
        topping: [],
        pTopping: [],
        sandwitch: [],
        sName: [],
        sQuantity: [],
        drink: [],
        dName: [],
        dSize: [],
        dQuantity: [],
        total: []
    };

    customerObject = customerArray[i];
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = false;

    // Load data into form
    document.getElementById("fname").value = customerObject.fname;
    document.getElementById("lname").value = customerObject.lname;
    document.getElementById("address").value = customerObject.address;
    document.getElementById("phone").value = customerObject.phone;

    //reset the checkboxes, radio buttons to unchecked in Pizza order
    document.order.Cheesy.checked = false;
    document.order.Meaty.checked = false;
    document.order.Veggy.checked = false;
    for (y = 0; y < 4; y++) {
        document.order.Cheesy_size[y].checked = false;
        document.order.Meaty_size[y].checked = false;
        document.order.Veggy_size[y].checked = false;
    }
    document.getElementById("Cheesy_quantity").value = 0;
    document.getElementById("Meaty_quantity").value = 0;
    document.getElementById("Veggy_quantity").value = 0;
    document.order.Cheese1.checked = false;
    document.order.Pepperoni1.checked = false;
    document.order.Mushrooms1.checked = false;
    document.order.Bacon1.checked = false;
    document.order.Olives1.checked = false;
    document.order.Cheese2.checked = false;
    document.order.Pepperoni2.checked = false;
    document.order.Mushrooms2.checked = false;
    document.order.Bacon2.checked = false;
    document.order.Olives2.checked = false;
    document.order.Cheese3.checked = false;
    document.order.Pepperoni3.checked = false;
    document.order.Mushrooms3.checked = false;
    document.order.Bacon3.checked = false;
    document.order.Olives3.checked = false;

    //reset the checkboxes, radio buttons to unchecked in Sandwiches Order
    document.order.Vegetarian.checked = false;
    document.order.Beef.checked = false;
    document.order.Grill.checked = false;
    document.order.Pork.checked = false;
    document.getElementById("Vegetarian_quantity").value = 0;
    document.getElementById("Beef_quantity").value = 0;
    document.getElementById("Grill_quantity").value = 0;
    document.getElementById("Pork_quantity").value = 0;
    for (y = 0; y < 3; y++) {
        document.order.drink_size1[y].checked = false;
        document.order.drink_size2[y].checked = false;
        document.order.drink_size3[y].checked = false;
        document.order.drink_size4[y].checked = false;
    }

    //reset the checkboxes, radio buttons to unchecked in Drink Order
    document.order.Cola.checked = false;
    document.order.Orange.checked = false;
    document.order.Lemon.checked = false;
    document.order.Rootbeer.checked = false;
    document.getElementById("Cola_quantity").value = 0;
    document.getElementById("Orange_quantity").value = 0;
    document.getElementById("Lemon_quantity").value = 0;
    document.getElementById("Rootbeer_quantity").value = 0;

    //use a for loop to load all of elements
    //check if pizza length > 0
    if (customerObject.pizza.length > 0) {

        for (var i = 0; i < customerObject.pizza.length; i++) {
            initialData = customerObject.pizza[i];
            initialData1 = customerObject.pName[i];
            initialData2 = customerObject.pSize[i];
            initialData3 = customerObject.pQuantity[i];
            initialData4 = customerObject.pTopping[i];

            //Super Cheesy
            if (initialData1 == "Super Cheesy") {
                document.order.Cheesy.checked = true;

                //For size Radio buttons
                pizzaSize = initialData2;
                if (pizzaSize == "Small") {
                    document.order.Cheesy_size[0].checked = true;
                } else if (pizzaSize == "Medium") {
                    document.order.Cheesy_size[1].checked = true;
                } else if (pizzaSize == "Large") {
                    document.order.Cheesy_size[2].checked = true;
                } else if (pizzaSize == "Extra Large") {
                    document.order.Cheesy_size[3].checked = true;
                }
                document.getElementById("Cheesy_quantity").value = customerObject.pQuantity[i];
                if (customerObject.pTopping.length > 0) {
                    for (var x = 0; x < customerObject.pTopping.length; x++) {
                        pizzaTopping = initialData4;
                        if (pizzaTopping == "Cheese1") {
                            document.order.Cheese1.checked = true;
                        }
                        if (pizzaTopping == "Pepperoni1") {
                            document.order.Pepperoni1.checked = true;
                        }
                        if (pizzaTopping == "Mushrooms1") {
                            document.order.Mushrooms1.checked = true;
                        }
                        if (pizzaTopping == "Bacon1") {
                            document.order.Bacon1.checked = true;
                        }
                        if (pizzaTopping == "Olives1") {
                            document.order.Olives1.checked = true;
                        }
                    }
                }
            }

            //Extra Meaty
            if (initialData1 == "Extra Meaty") {
                document.order.Meaty.checked = true;

                //For size Radio buttons
                pizzaSize = initialData2;
                if (pizzaSize == "Small") {
                    document.order.Meaty_size[0].checked = true;
                } else if (pizzaSize == "Medium") {
                    document.order.Meaty_size[1].checked = true;
                } else if (pizzaSize == "Large") {
                    document.order.Meaty_size[2].checked = true;
                } else if (pizzaSize == "Extra Large") {
                    document.order.Meaty_size[3].checked = true;
                }
                document.getElementById("Meaty_quantity").value = customerObject.pQuantity[i];
                if (customerObject.pTopping.length > 0) {
                    for (var x = 0; x < customerObject.pTopping.length; x++) {
                        pizzaTopping = initialData4;
                        if (pizzaTopping == "Cheese2") {
                            document.order.Cheese2.checked = true;
                        }
                        if (pizzaTopping == "Pepperoni2") {
                            document.order.Pepperoni2.checked = true;
                        }
                        if (pizzaTopping == "Mushrooms2") {
                            document.order.Mushrooms2.checked = true;
                        }
                        if (pizzaTopping == "Bacon2") {
                            document.order.Bacon2.checked = true;
                        }
                        if (pizzaTopping == "Olives2") {
                            document.order.Olives2.checked = true;
                        }
                    }
                }
            }

            //Really Veggy
            if (initialData1 == "Really Veggy") {
                document.order.Veggy.checked = true;
                //For size Radio buttons
                pizzaSize = initialData2;
                if (pizzaSize == "Small") {
                    document.order.Veggy_size[0].checked = true;
                } else if (pizzaSize == "Medium") {
                    document.order.Veggy_size[1].checked = true;
                } else if (pizzaSize == "Large") {
                    document.order.Veggy_size[2].checked = true;
                } else if (pizzaSize == "Extra Large") {
                    document.order.Veggy_size[3].checked = true;
                }
                document.getElementById("Veggy_quantity").value = customerObject.pQuantity[i];
                if (customerObject.pTopping.length > 0) {
                    for (var x = 0; x < customerObject.pTopping.length; x++) {
                        pizzaTopping = initialData4;
                        if (pizzaTopping == "Cheese3") {
                            document.order.Cheese3.checked = true;
                        }
                        if (pizzaTopping == "Pepperoni3") {
                            document.order.Pepperoni3.checked = true;
                        }
                        if (pizzaTopping == "Mushrooms3") {
                            document.order.Mushrooms3.checked = true;
                        }
                        if (pizzaTopping == "Bacon3") {
                            document.order.Bacon3.checked = true;
                        }
                        if (pizzaTopping == "Olives3") {
                            document.order.Olives3.checked = true;
                        }
                    }
                }
            }
        }
    }

    
    //use a for loop to load all of elements
    //check if sandwiches length >0
    if (customerObject.sandwitch.length > 0) {
        for (var i = 0; i < customerObject.sandwitch.length; i++) {
            initialData5 = customerObject.sandwitch[i];
            initialData6 = customerObject.sName[i];
            initialData7 = customerObject.sQuantity[i];

            if (initialData6 == "All Garden Vegetarian") {
                document.order.Vegetarian.checked = true;
                document.getElementById("Vegetarian_quantity").value = customerObject.sQuantity[i];
            }
            if (initialData6 == "Big Beef on a Bun") {
                document.order.Beef.checked = true;
                document.getElementById("Beef_quantity").value = customerObject.sQuantity[i];
            }
            if (initialData6 == "Mixed Grill") {
                document.order.Grill.checked = true;
                document.getElementById("Grill_quantity").value = customerObject.sQuantity[i];
            }
            if (initialData6 == "Grilled Pork") {
                document.order.Pork.checked = true;
                document.getElementById("Pork_quantity").value = customerObject.sQuantity[i];
            }
        }
    }
   
    //use a for loop to load all of elements
    //check if drink length >0
    if (customerObject.drink.length > 0) {
        for (var i = 0; i < customerObject.drink.length; i++) {
            initialData8 = customerObject.drink[i];
            initialData9 = customerObject.dName[i];
            initialData10 = customerObject.dSize[i];
            initialData11 = customerObject.dQuantity[i];

            // Cola           
            if (initialData9 == "Cola") {
                document.order.Cola.checked = true;

                //For size Radio buttons
                drinkSize = initialData10;
                if (drinkSize == "Small") {
                    document.order.drink_size1[0].checked = true;
                } else if (drinkSize == "Medium") {
                    document.order.drink_size1[1].checked = true;
                } else if (drinkSize == "Large") {
                    document.order.drink_size1[2].checked = true;
                }
                document.getElementById("Cola_quantity").value = customerObject.dQuantity[i];
            }

            // Orange 
            if (initialData9 == "Orange") {
                document.order.Orange.checked = true;

                //For size Radio buttons
                drinkSize = initialData10;
                if (drinkSize == "Small") {
                    document.order.drink_size2[0].checked = true;
                } else if (drinkSize == "Medium") {
                    document.order.drink_size2[1].checked = true;
                } else if (drinkSize == "Large") {
                    document.order.drink_size2[2].checked = true;
                }
                document.getElementById("Orange_quantity").value = customerObject.dQuantity[i];
            }

            // Lemon
            if (initialData9 == "Lemon") {
                document.order.Lemon.checked = true;

                //For size Radio buttons
                drinkSize = initialData10;
                if (drinkSize == "Small") {
                    document.order.drink_size3[0].checked = true;
                } else if (drinkSize == "Medium") {
                    document.order.drink_size3[1].checked = true;
                } else if (drinkSize == "Large") {
                    document.order.drink_size3[2].checked = true;
                }
                document.getElementById("Lemon_quantity").value = customerObject.dQuantity[i];
            }

            // Root Beer
            if (initialData9 == "Rootbeer") {
                document.order.Rootbeer.checked = true;

                //For size Radio buttons
                drinkSize = initialData10;
                if (drinkSize == "Small") {
                    document.order.drink_size4[0].checked = true;
                } else if (drinkSize == "Medium") {
                    document.order.drink_size4[1].checked = true;
                } else if (drinkSize == "Large") {
                    document.order.drink_size4[2].checked = true;
                }
                document.getElementById("Rootbeer_quantity").value = customerObject.dQuantity[i];
            }
        }
    }
}

function modifyOrder() {
    var customerObject = {
        fname,
        lname,
        address,
        phone,
        pizza: [],
        pName: [],
        pSize: [],
        pQuantity: [],
        topping: [],
        pTopping: [],
        sandwitch: [],
        sName: [],
        sQuantity: [],
        drink: [],
        dName: [],
        dSize: [],
        dQuantity: [],
        total: []
    };
    var pizzaName = "";
    var pizzaSize = "";
    var toppingName = "";
    var pizzaTopping = "";
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
            pizzaTopping = document.querySelector('input[name=Cheese1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives1]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives1]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
            pizzaTopping = document.querySelector('input[name=Cheese2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni12]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives2]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives2]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + " " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
            pizzaTopping = document.querySelector('input[name=Cheese3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Pepperoni3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Pepperoni3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Mushrooms3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Mushrooms3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Bacon3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Bacon3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        if (document.querySelector('input[name=Olives3]:checked')) {
            pizzaTopping = document.querySelector('input[name=Olives3]:checked').value;
            toppingName += " " + pizzaTopping;
            customerObject.pTopping.push(pizzaTopping);
            toppingAmount += 1.75;
        }
        pizzaTotal += toppingAmount;
        customerObject.pizza.push(pizzaQuauntity + " " + pizzaSize + " " + pizzaName + "  " + toppingName + " $" + pizzaTotal.toFixed(2));
        customerObject.total.push(pizzaTotal);
        customerObject.pName.push(pizzaName);
        customerObject.pSize.push(pizzaSize);
        customerObject.pQuantity.push(pizzaQuauntity);
        customerObject.topping.push(toppingName);
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
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Beef]:checked')) {
        sandName = document.querySelector('input[name=Beef]:checked').value;
        sandPrice = 8.50;
        sandQuantity = document.getElementById("Beef_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Grill]:checked')) {
        sandName = document.querySelector('input[name=Grill]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Grill_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
    }
    if (document.querySelector('input[name=Pork]:checked')) {
        sandName = document.querySelector('input[name=Pork]:checked').value;
        sandPrice = 9.50;
        sandQuantity = document.getElementById("Pork_quantity").value;
        sandTotal = sandPrice * parseInt(sandQuantity);
        customerObject.sandwitch.push(sandQuantity + " " + sandName + " $" + sandTotal.toFixed(2));
        customerObject.total.push(sandTotal);
        customerObject.sName.push(sandName);
        customerObject.sQuantity.push(sandQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);

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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
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
        customerObject.dName.push(drinkName);
        customerObject.dSize.push(drinkSize);
        customerObject.dQuantity.push(drinkQuantity);
    }

    // Total Calculator
    var total = parseFloat(0);
    for (var x = 0; x < customerObject.total.length; x++) {
        total += customerObject.total[x];
    }
    customerObject.total = total;

    // Into CustomerArray
    customerArray[indexvalue] = customerObject;

    // Return Button
    document.getElementById("submit").disabled = false;
    document.getElementById("edit").disabled = true;
    displayOrder();
}