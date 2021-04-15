window.onload = loaddata;

function loaddata() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                processXML(xhr);
            }
        };
        xhr.open("GET", "FinalQuiz.xml", true);
        xhr.send();
    } catch (exception) {
        alert("Request failed");
    }
}
var answer = [];

function processXML(xhr) {
    var result = xhr.responseText;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(result, "text/xml");
    var data = xmlDoc.getElementsByTagName("question");
    answer = xmlDoc.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue.trim().split(',');

    var qnumber = "";
    var qtitle = "";
    var a = "", b= "", c= "", d= "";
    var display = "<h1>Final Quiz </h1> <br><br>";

    for (var i = 0; i < data.length; i++) {
        qnumber = data[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue.trim();
        qtitle = data[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue.trim();
        a = data[i].getElementsByTagName("a")[0].childNodes[0].nodeValue.trim();
        b = data[i].getElementsByTagName("b")[0].childNodes[0].nodeValue.trim(); 
        c = data[i].getElementsByTagName("c")[0].childNodes[0].nodeValue.trim();
        d = data[i].getElementsByTagName("d")[0].childNodes[0].nodeValue.trim();

        display += qnumber + ". " + qtitle  + "<br><br>";
        display += "<input type = 'radio' name = 'question" + qnumber +"' value ='a' checked> (A) "+ a +"<br>";
        display += "<input type = 'radio' name = 'question" + qnumber +"' value ='b'> (B) "+ b +"<br>";
        display += "<input type = 'radio' name = 'question" + qnumber +"' value ='c'> (C) "+ c +"<br>";
        display += "<input type = 'radio' name = 'question" + qnumber +"' value ='d'> (D) "+ d +"<br>";
        display += "<br>"
    }
    
    document.getElementById("contents").innerHTML = display;
}

function finalQuiz() {
    var point = 0;
    for (var i = 1; i <= answer.length; i++){
        var check = document.querySelector('input[name="question'+i+'"]:checked');
       if (answer[i-1] == check.value) {
           point++;
       }
    }
    document.getElementById("grade").innerHTML = "Your Grade is " + point + " / 5";
}