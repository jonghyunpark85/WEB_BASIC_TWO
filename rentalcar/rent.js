window.onload = initfunction;

// Current Date
function initfunction() {
    var today = new Date();
    var date = today.toLocaleString('en-US');
    document.getElementById("time").innerHTML = date;
    document.getElementById("time2").innerHTML = date;
}

var customerArray = [];
var result;
var indexvalue = 0;
var xhr = new XMLHttpRequest();

// Call to JSON file
function searchCustomer() {
    try {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                searchLastName(xhr);
                getHtml();
            }
        };
        xhr.open("GET", "rentalclients.json", true);
        xhr.send();
    } catch (exception) {
        alert("Request failed");
    }
}

// Call to rental.html
function getHtml() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("contents").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "rental.html", true);
    xhr.send();
}

// Search Last name
function searchLastName(xhr) {
    result = JSON.parse(xhr.responseText);
    var searchname = "";
    var output = "";
    var inputname = document.getElementById("SearchName").value;
    for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        searchname = obj.last_name;
        if (searchname.startsWith(inputname)) {
            output += "<input type=radio name=listitem ";
            output += " value=" + i + " ";
            output += " onchange=insertItem(this.value)>";
            output += obj.first_name;
            output += "&nbsp;&nbsp;"
            output += obj.last_name; 
            output += "<br>";
          }
    }
    document.getElementById("client").innerHTML = output;
}

// Selected customer info into the form
function insertItem(i) {
    document.getElementById("rental").hidden = false;
    document.getElementById("fname").value = result[i].first_name;
    document.getElementById("lname").value = result[i].last_name;
    document.getElementById("address").value = result[i].address;
    document.getElementById("state_prov").value = result[i].state_prov;
    document.getElementById("email").value = result[i].email;
    document.getElementById("phone").value = result[i].phone;
}

// Rental form
function rentCar() {
    var customerObject = {
        fname,
        lname,
        address,
        state_prov,
        email,
        phone,
        car: [],
        option: [],
        day: [],
        total: []
    };
    var carPrice = 0;
    var optionName = "";
    var optionPrice = 0;
    var totalPrice = 0;

    // Customer information
    customerObject.fname = document.getElementById("fname").value;
    customerObject.lname = document.getElementById("lname").value;
    customerObject.address = document.getElementById("address").value;
    customerObject.state_prov = document.getElementById("state_prov").value;
    customerObject.email = document.getElementById("email").value;
    customerObject.phone = document.getElementById("phone").value;

    // Select a Car
    if (document.getElementById("compact").checked) {
        var carName = document.getElementById("compact").value;
        carPrice = 15;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("midsize").checked) {
        var carName = document.getElementById("midsize").value;
        carPrice = 20;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("luxury").checked) {
        var carName = document.getElementById("luxury").value;
        carPrice = 35;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("vanTruck").checked) {
        var carName = document.getElementById("vanTruck").value;
        carPrice = 40;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    }

    // Select Options
    if (document.querySelector('input[name=roof]:checked')) {
        optionName = document.querySelector('input[name=roof]:checked').value;
        optionPrice = 5;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }
    if (document.querySelector('input[name=gps]:checked')) {
        optionName = document.querySelector('input[name=gps]:checked').value;
        optionPrice = 10;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }
    if (document.querySelector('input[name=child]:checked')) {
        optionName = document.querySelector('input[name=child]:checked').value;
        optionPrice = 0;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }

    // Rental term
    customerObject.day = document.getElementById("term").value;

    //Total Calculator
    for (var i = 0; i < customerObject.total.length; i++) {
        totalPrice += customerObject.total[i];
    }
    totalPrice = totalPrice * parseInt(customerObject.day);
    customerObject.total = totalPrice;
    customerArray.push(customerObject);
    display();
}

function display() {
    var customerOrder = "";
    var displayRadiobuttons = "";
    for (var i = 0; i < customerArray.length; i++) {
        var customerObject = {
            fname,
            lname,
            address,
            state_prov,
            email,
            phone,
            car: [],
            option: [],
            day: [],
            total: []
        };

        customerObject = customerArray[i];
        customerOrder = customerObject.fname + " " + customerObject.lname + "<br>" + customerObject.address +
            " " + customerObject.state_prov + "<br>" + customerObject.email + "<br>" +
            customerObject.phone + "<br><br>";

        customerOrder += "Your rent: " + "<br>";
        for (var x = 0; x < customerObject.car.length; x++) {
            customerOrder += customerObject.car[x] + " CAR &nbsp;&nbsp; ";
        }
        customerOrder += customerObject.day + " Day" + "<br>";
        for (var x = 0; x < customerObject.option.length; x++) {
            customerOrder += customerObject.option[x] + " <br>";
        }
        customerOrder += "<br>" + "Rent Total:  &nbsp;&nbsp;" + "&nbsp;&nbsp;  $" + customerObject.total;

        displayRadiobuttons += "<input type=radio name=listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=modifyItem(this.value)>";
        displayRadiobuttons += customerOrder + "<br><br>";
    }
    document.getElementById('ordered').innerHTML = displayRadiobuttons;
}

function modifyItem(i) {
    var dataitem = "";

    //Change the button
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = false;

    document.getElementById("fname").value = customerArray[i].fname;
    document.getElementById("lname").value = customerArray[i].lname;
    document.getElementById("address").value = customerArray[i].address;
    document.getElementById("state_prov").value = customerArray[i].state_prov;
    document.getElementById("email").value = customerArray[i].email;
    document.getElementById("phone").value = customerArray[i].phone;

    document.querySelector("input[name=car]:checked").value = customerArray[i].car;

    dataitem = customerArray[i].car[0];
    if (dataitem === "Compact") {
        document.rental.car[0].checked = true;
    } else if (dataitem === "Mid-size") {
        document.rental.car[1].checked = true;
    } else if (dataitem === "Luxury") {
        document.rental.car[2].checked = true;
    } else {
        document.rental.car[3].checked = true;
    }

    document.rental.roof.checked = false;
    document.rental.gps.checked = false;
    document.rental.child.checked = false;

    if (customerArray[i].option.length > 0) {
        for (var x = 0; x < customerArray[i].option.length; x++) {
            dataitem = customerArray[i].option[x];
            if (dataitem === "Roof Rack") {
                document.rental.roof.checked = true;
            }
            if (dataitem === "GPS") {
                document.rental.gps.checked = true;
            }
            if (dataitem === "Child Seat") {
                document.rental.child.checked = true;
            }
        }
    }
    document.getElementById("term").value = customerArray[i].day;
}

function setClientObject() {
    var customerObject = {
        fname,
        lname,
        address,
        state_prov,
        email,
        phone,
        car: [],
        option: [],
        day: [],
        total: []
    };
    var carPrice = 0;
    var optionName = "";
    var optionPrice = 0;
    var totalPrice = 0;

    //Customer Information
    customerObject.fname = document.getElementById("fname").value;
    customerObject.lname = document.getElementById("lname").value;
    customerObject.address = document.getElementById("address").value;
    customerObject.state_prov = document.getElementById("state_prov").value;
    customerObject.email = document.getElementById("email").value;
    customerObject.phone = document.getElementById("phone").value;

    //Selected a Car
    if (document.getElementById("compact").checked) {
        var carName = document.getElementById("compact").value;
        carPrice = 15;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("midsize").checked) {
        var carName = document.getElementById("midsize").value;
        carPrice = 20;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("luxury").checked) {
        var carName = document.getElementById("luxury").value;
        carPrice = 35;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    } else if (document.getElementById("vanTruck").checked) {
        var carName = document.getElementById("vanTruck").value;
        carPrice = 40;
        customerObject.car.push(carName);
        customerObject.total.push(carPrice);
    }

    // Choice the Options
    if (document.querySelector('input[name=roof]:checked')) {
        optionName = document.querySelector('input[name=roof]:checked').value;
        optionPrice = 5;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }
    if (document.querySelector('input[name=gps]:checked')) {
        optionName = document.querySelector('input[name=gps]:checked').value;
        optionPrice = 10;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }
    if (document.querySelector('input[name=child]:checked')) {
        optionName = document.querySelector('input[name=child]:checked').value;
        optionPrice = 0;
        customerObject.option.push(optionName);
        customerObject.total.push(optionPrice);
    }

    customerObject.day = document.getElementById("term").value;

    //Total Calculator
    for (var i = 0; i < customerObject.total.length; i++) {
        totalPrice += customerObject.total[i];
    }
    totalPrice = totalPrice * parseInt(customerObject.day);
    customerObject.total = totalPrice;
    customerArray[indexvalue] = customerObject;

    //reset submit button
    document.getElementById("submit").disabled = false;
    document.getElementById("edit").disabled = true;
    display(); //display object array
}