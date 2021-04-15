 window.onload = welcome;

 function welcome() {
     var fname = getCookie("firstname");
     var lname = getCookie("lastname");
     var lastvisit = getCookie("lastVisit");

     if (getCookie("firstname") != "") {
         document.getElementById("fname").value = getCookie("firstname");
         document.getElementById("lname").value = getCookie("lastname");

         var message = "Wecome Back" + fname + "  " + lname + "<br>";
         message += "Your last visit was" + lastvisit;
         document.getElementById("time").innerHTML = message;

     } else {
         var message = "Welcome New Customer!"
         document.getElementById("time").innerHTML = message;
     }
 }

 function setCookieState() {
     var fname = document.getElementById('fname').value;
     var lname = document.getElementById('lname').value;
     var lastVisit = new Date();
     setCookie("firstname", fname, 365);
     setCookie("lastname", lname, 365);
    setCookie("lastVisit", lastVisit, 365);
 }

 function setCookie(cookieName, cookieValue, expireDays) {
     var date = new Date();
     date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000)); 
     var expires = "expires=" + date.toGMTString();
     document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
 }

 function getCookie(cookieName) {
     var name = cookieName + "=";
     var decodedCookie = decodeURIComponent(document.cookie);

     var ca = decodedCookie.split(';');

     for (var i = 0; i < ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') {
             c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
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

     var fname = document.getElementById("fname").value;
     customer += fname + " ";
     var lname = document.getElementById("lname").value;
     customer += lname + "<br>";
     var address = document.getElementById("address").value;
     customer += address + "<br>";
     var contact = document.getElementById("phone").value;
     customer += contact + "<br><br>";

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
     setCookieState();
 }