fufunction AmountConverter() {

    var num = document.getElementById("amount").value;
    var amount = parseFloat(num);
    var message = "";

    document.getElementById("mount").innerHTML = document.getElementById("amount").value;
    document.getElementById("hand").innerHTML = document.querySelector('input[name="before"]:checked').value;
    document.getElementById("convert").innerHTML = document.querySelector('input[name="after"]:checked').value;


    if (document.getElementById("euro").checked) {
        if (document.getElementById("us1").checked) {
            amount = num * 1.08090;
            message += amount.toFixed(2) + " USD (1:1.08090)";
        } else if (document.getElementById("uk1").checked) {
            amount = num * 0.836541;
            message += amount.toFixed(2) + " GBP (1:0.836541)";
        } else if (document.getElementById("yen1").checked) {
            amount = num * 120.212;
            message += amount.toFixed(2) + " JPY (1:120.212)";
        } else if (document.getElementById("cad1").checked) {
            amount = num * 1.42898;
            message += amount.toFixed(2) + " CAD (1:1.42898)";
        } else {
            message += amount.toFixed(2) + " EUR (1:1)";
        }
    } else if (document.getElementById("us").checked) {
        if (document.getElementById("euro1").checked) {
            amount = num * 0.925158;
            message += amount.toFixed(2) + " EUR (1:0.925158)";
        } else if (document.getElementById("uk1").checked) {
            amount = num * 0.773782;
            message += amount.toFixed(2) + " GBP (1:0.773782)";
        } else if (document.getElementById("yen1").checked) {
            amount = num * 111.227;
            message += amount.toFixed(2) + " JPY (1:111.227)";
        } else if (document.getElementById("cad1").checked) {
            amount = num * 1.32197;
            message += amount.toFixed(2) + " CAD (1:1.32197)";
        } else {
            message += amount.toFixed(2) + " USD (1:1)";
        }
    } else if (document.getElementById("uk").checked) {
        if (document.getElementById("euro1").checked) {
            amount = num * 1.19540;
            message += amount.toFixed(2) + " EUR (1:1.19540)";
        } else if (document.getElementById("us1").checked) {
            amount = num * 1.29235;
            message += amount.toFixed(2) + " USD (1:1.29235)";
        } else if (document.getElementById("yen1").checked) {
            amount = num * 143.767;
            message += amount.toFixed(2) + " JPY (1:143.767)";
        } else if (document.getElementById("cad1").checked) {
            amount = num * 1.70877;
            message += amount.toFixed(2) + " CAD (1:1.70877)";
        } else {
            message += amount.toFixed(2) + " GBP (1:1)";
        }
    } else if (document.getElementById("yen").checked) {
        if (document.getElementById("euro1").checked) {
            amount = num * 0.00831865;
            message += amount.toFixed(2) + " EUR (1:0.00831865)";
        } else if (document.getElementById("us1").checked) {
            amount = num * 0.00899066;
            message += amount.toFixed(2) + " USD (1:0.00899066)";
        } else if (document.getElementById("uk1").checked) {
            amount = num * 0.00695571;
            message += amount.toFixed(2) + " GBP (1:0.00695571)";
        } else if (document.getElementById("cad1").checked) {
            amount = num * 0.0118838;
            message += amount.toFixed(2) + " CAD (1:0.0118838)";
        } else {
            message += amount.toFixed(2) + " JPY (1:1)";
        }
    } else if (document.getElementById("cad").checked) {
        if (document.getElementById("euro1").checked) {
            amount = num * 0.699802;
            message += amount.toFixed(2) + " EUR (1:0.699802)";
        } else if (document.getElementById("us1").checked) {
            amount = num * 0.756449;
            message += amount.toFixed(2) + " USD (1:0.756449)";
        } else if (document.getElementById("uk1").checked) {
            amount = num * 0.585215;
            message += amount.toFixed(2) + " GBP (1:0.585215)";
        } else if (document.getElementById("yen1").checked) {
            amount = num * 84.1482;
            message += amount.toFixed(2) + " JPY (1:84.1482)";
        } else {
            message += amount.toFixed(2) + " CAD (1:1)";
        }
    }
    document.getElementById("convertAmount").innerHTML = message;
}