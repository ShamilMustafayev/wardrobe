function name(d)
{
d.preventDefault();
var name = $("#name").val();
$.post("/api/wardrobe/name",
    {
        name
    }, function(data) {
       console.log("The wardrobe with the name " + data + " has been created.");
       $("#BtnName").hide();
       $("#name").hide();
    });
}

function open(b)
{
b.preventDefault();
    $.get("/api/wardrobe/open", function(data){
    if(data)
    {
        console.log("You have just opened the door!");
    }
    else{
        console.log("Sorry, you have already opened the door...");
    }
    });
}

function close(c)
{
c.preventDefault();
    $.get("/api/wardrobe/close", function(data){
    if(data)
    {
        console.log("You have just closed the door!");
    }
    else{
        console.log("Sorry, you have already closed the door...");
    }
    });
}

function enter(k)
{
k.preventDefault();
    $.get("/api/wardrobe/enter", function (data){
        if (data)
        {
            console.log("You have just entered the Narnia!");
            myFunction();
        }
        else{
        console.log("Unfortunately, you could not enter the Narnia... Try again.");
        }
    });
}

function leave(f)
{
f.preventDefault();
    $.get("/api/wardrobe/leave", function(data){
    if(data)
    {
        console.log("You have just left the wardrobe!");
    }
    else{
        console.log("Sorry, you are already outside of the wardrobe...");
                $("#Witch").hide();
                $("#Enter").show();
                $("#Open").show();
                $("#Close").show();
                $("#Leave").show();
                $("#Kick").show();
    }
    });
}

function kick()
{
    $.get("/api/wardrobe/kick", function(data){
    alert(data);
    });
}


function myFunction(){
        $("#Witch").show();
        $("#Enter").hide();
        $("#Open").hide();
        $("#Close").hide();
        $("#Leave").hide();
        $("#Kick").hide();
}

function reset(){

$.get("/api/wardrobe/reset", function(data){
console.log("Everything is reset!")
});
}

function witch(e)
{
e.preventDefault();
    $.get("/api/wardrobe/witch", function (data){
        if (data)
        {
            console.log("You have defeated the witch! Talk to Aslan!");
            $("#Witch").hide();
            $("#Aslan").show();
        }
        else{
        console.log("Unfortunately, you have lost to witch, so you are leaving the Narnia...");
        alert(data);
        $("#Witch").hide();
        $("#Enter").show();
        $("#Open").show();
        $("#Close").show();
        $("#Leave").show();
        $("#Kick").show();
        reset();
        }
    });
}

function talkToAslan()
{
$.get("/api/wardrobe/aslan", function(data){
        alert("Congratulations, you have just talked to Aslan! Good bye, Narnia...");
        $("#Aslan").hide();
        $("#Witch").hide();
        $("#Enter").show();
        $("#Open").show();
        $("#Close").show();
        $("#Leave").show();
        $("#Kick").show();
        $("#BtnName").show();
        $("#name").show();
});
}

$("#BtnName").click(name);
$("#Open").click(open);
$("#Close").click(close);
$("#Enter").click(enter);
$("#Leave").click(leave);
$("#Kick").click(kick);
$("#Witch").click(witch);
$("#Aslan").click(talkToAslan);