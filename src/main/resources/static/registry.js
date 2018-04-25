function name()
{
var name = $("#name").val();

$.post("/api/wardrobe/name",
    {
        name: name
    }, function(data) {
       alert(data);
    });
}


function open()
{
    $.get("/api/wardrobe/open", function(data){
    alert(data);
    });
}

function close()
{
    $.get("/api/wardrobe/close", function(data) {
        alert(data);
    });
}

function enter()
{
    $.get("/api/wardrobe/enter", function (data){
        alert(data);
    });
}

function leave()
{
    $.get("/api/wardrobe/leave", function(data){
        alert(data);
    });
}

function kick()
{
    $.get("/api/wardrobe/kick", function(data){
    alert(data);
    });
}

$("#BtnName").click(name);
$("#Open").click(open);
$("#Close").click(close);
$("#Enter").click(enter);
$("#Leave").click(leave);
$("#Kick").click(kick);