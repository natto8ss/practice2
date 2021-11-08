$(document).ready(function () {
    $.getJSON("./person.json", function(data){
        for(var i in data){
            $("#contents").append("<li>" + data[i].name + "（" + data[i].email + "）</li>");
        }
    });
});