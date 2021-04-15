function validate() {
    var input = document.getElementById("search").value.split("-");

    if (input[0].search(/^[A-D]([1-9]|1[0-6])$/)) {
        alert("Please type in correct Section!");
        return false;
    }
    if (input[1].search(/^([1-9]|[1-9][0-9]|1[0-1][0-9]|12[0-6])$/)) {
        alert("Please type in correct Township!");
        return false;
    }
    if (input[2].search(/^([1-9]|1[0-9]|2[0-4])$/)) {
        alert("Please type in correct Range!");
        return false;
    }
    if (input[3].search(/^[W-W][4-6]$/)) {
        alert("Please type in correct Meridian!");
        return false;
    }
    getXMLOne();
}

function getXMLOne() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                processXML(xhr);
            }
        };
        xhr.open("GET", "welldata.xml", true);
        xhr.send();
    } catch (exception) {
        alert("Request failed");
    }
}

function processXML(xhr) {
    var result = xhr.responseText;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(result, "text/xml");
    var data = xmlDoc.getElementsByTagName("welldata");
    var point = false;
    for (var i = 0; i < data.length; i++) {
        var location = data[i].getElementsByTagName("location")[0].childNodes[0].nodeValue.trim();
        if (location == document.getElementById("search").value) {
            locations = location;
            welldepth = data[i].getElementsByTagName("welldepth")[0].childNodes[0].nodeValue.trim();
            perfdepth = data[i].getElementsByTagName("perfdepth")[0].childNodes[0].nodeValue.trim();
            perfzone = data[i].getElementsByTagName("perfzone")[0].childNodes[0].nodeValue.trim();
            stroke = data[i].getElementsByTagName("stroke")[0].childNodes[0].nodeValue.trim();
            strokepermin = data[i].getElementsByTagName("strokepermin")[0].childNodes[0].nodeValue.trim();
            point = true;
            break;
        }
    }
    if (point) {
        getXMLTwo();
    } else {
        alert("locationis not exist in welldata.xml");
    }
}

function getXMLTwo() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                processXMLTwo(xhr);
            }
        };
        xhr.open("GET", "productiondata.xml", true);
        xhr.send();
    } catch (exception) {
        alert("Request failed");
    }
}

function processXMLTwo(xhr) {
    var result = xhr.responseText;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(result, "text/xml");
    var data = xmlDoc.getElementsByTagName("productiondata");
    var display = "";
    display = "<tr><th>Location</th><th>Well Depth</th>" +
        "<th>Perforation Depth</th><th>Perforation Zone</th>" +
        "<th>Pump Stork Length</th><th>Strokes per minute</th>" +
        "<th>Date</th><th>Oil production <br> in m<sup>3</sup>/day</th>" +
        "<th>Water Production <br> in m<sup>3</sup>/day</th><th>Gas production <br> in 10<sup>3</sup>m/day</th></tr>";

    for (var i = 0; i < data.length; i++) {
        var location = data[i].getElementsByTagName("location")[0].childNodes[0].nodeValue.trim();
        if (location == document.getElementById("search").value) {
            date = data[i].getElementsByTagName("date")[0].childNodes[0].nodeValue.trim();
            oilproduction = data[i].getElementsByTagName("oilproduction")[0].childNodes[0].nodeValue.trim();
            waterproduction = data[i].getElementsByTagName("waterproduction")[0].childNodes[0].nodeValue.trim();
            gasproduction = data[i].getElementsByTagName("gasproduction")[0].childNodes[0].nodeValue.trim();

            display += "<tr>" +
                "<td>" + locations + "</td>" +
                "<td>" + welldepth + "</td>" +
                "<td>" + perfdepth + "</td>" +
                "<td>" + perfzone + "</td>" +
                "<td>" + stroke + "</td>" +
                "<td>" + strokepermin + "</td>" +
                "<td>" + date + "</td>" +
                "<td>" + oilproduction + "</td>" +
                "<td>" + waterproduction + "</td>" +
                "<td>" + gasproduction + "</td>" +
                "</tr>";
        }
    }
    document.getElementById("result").innerHTML = display;
}