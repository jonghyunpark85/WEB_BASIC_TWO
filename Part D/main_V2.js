 window.onload = initfunction;

 /* Current Date */
 function initfunction() {
     var toDay = new Date();
     document.getElementById("time").innerHTML = toDay;

     var localData = localStorage.getItem("mycustomer");
     obj = JSON.parse(localData); //parse out
     document.getElementById("fname").value = obj.fname;
     document.getElementById("lname").value = obj.lname;
     document.getElementById("address").value = obj.address;
     document.getElementById("phone").value = obj.phone;
 }

 /* Print Out */
 function reg() {

     var customer = "";
     var p_message = "";
     var t_message = "";
     var s_message = "";
     var d_message = "";
     var message = "";
     var topping_amount = 0;

     /*load customer object*/
	 var customers={fname,lname,address,phone};

     customers.fname = document.getElementById("fname").value;
     customer += customers.fname + " ";
     customers.lname = document.getElementById("lname").value;
     customer += customers.lname + "<br>";
     customers.address = document.getElementById("address").value;
     customer += customers.address + "<br>";
     customers.phone = document.getElementById("phone").value;
     customer += customers.phone + "<br><br>";

     /*create JSON object*/
     var jsoncustomers = JSON.stringify(customers);
     localStorage.setItem("mycustomer", jsoncustomers);

     // Pizza Name 
     var p_checkRadio = document.querySelector('input[name="pizza"]:checked').value;

     // Pizza Size
     var p_size = document.getElementById("p_size");
     var p_total = parseFloat(p_size.options[p_size.selectedIndex].value);

     // Pizza quauntity 
     var p_quauntity = document.getElementById("p_quantity").value;
     var p_total = p_total * parseInt(p_quauntity);
     p_message = p_quauntity + " " + p_size.options[p_size.selectedIndex].text + p_checkRadio + " $" + p_total.toFixed(2) + "<br>";

     // Topping
     if (document.querySelector('input[name=Cheese]:checked')) {
         t_message += ("Extra: " + document.querySelector('input[name=Cheese]:checked').value + " $1.75" + "<br>");
         topping_amount += 1.75;
         p_total += topping_amount;
     }
     if (document.querySelector('input[name=Pepperoni]:checked')) {
         t_message += ("Extra: " + document.querySelector('input[name=Pepperoni]:checked').value + " $1.75" + "<br>");
         topping_amount += 1.75;
         p_total += topping_amount;
     }
     if (document.querySelector('input[name=Mushrooms]:checked')) {
         t_message += ("Extra: " + document.querySelector('input[name=Mushrooms]:checked').value + " $1.75" + "<br>");
         topping_amount += 1.75;
         p_total += topping_amount;
     }
     if (document.querySelector('input[name=Bacon]:checked')) {
         t_message += ("Extra: " + document.querySelector('input[name=Bacon]:checked').value + " $1.75" + "<br>");
         topping_amount += 1.75;
         p_total += topping_amount;
     }
     if (document.querySelector('input[name=Olives]:checked')) {
         t_message += ("Extra: " + document.querySelector('input[name=Olives]:checked').text + " $1.75" + "<br>");
         topping_amount += 1.75;
         p_total += topping_amount;
     }

     // Sandwich Order
     if (document.getElementById('all').checked) {
         var s_message = document.getElementById("all").value
         var s_order = 7.50;
     } else if (document.getElementById('big').checked) {
         var s_message = document.getElementById("big").value
         var s_order = 8.50;
     } else if (document.getElementById('mixed').checked) {
         var s_message = document.getElementById("mixed").value
         var s_order = 9.50;
     } else if (document.getElementById('grilled').checked) {
         var s_message = document.getElementById("grilled").value
         var s_order = 9.50;
     }

     // Sandwich Quantity 
     var s_quauntity = document.getElementById("s_quantity").value;
     var s_order = s_order * parseInt(s_quauntity);
     var s_message = s_quauntity + " " + s_message + " $" + s_order.toFixed(2) + "<br>";

     // Pizza Name 
     var d_checkRadio = document.querySelector('input[name="drink"]:checked').value;

     // Pizza Size
     var d_size = document.getElementById("d_size");
     var d_total = parseFloat(d_size.options[d_size.selectedIndex].value);

     // Pizza quauntity 
     var d_quauntity = document.getElementById("d_quantity").value;
     var d_total = d_total * parseInt(d_quauntity);
     d_message = d_quauntity + " " + d_size.options[p_size.selectedIndex].text + d_checkRadio + " $" + d_total.toFixed(2) + "<br>";

     var total = p_total + s_order + d_total;
     message = customer + p_message + t_message + s_message + d_message + "<br><br>" + "Total Cost: $" + total.toFixed(2);

     document.getElementById('ordered').innerHTML = message;
 }