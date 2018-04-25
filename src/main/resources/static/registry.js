var isWardrobeOpen = false;
var isInWardrobe = false;

function openWardrobe()
{
    if (isWardrobeOpen==false)
    {
        isWardrobeOpen=true;
        console.log("The wardrobe has been opened.");
    }
    else
    {
        console.log("The wardrobe is already opened! Please close it first.")
    }
}
function closeWardrobe(){
        if (isWardrobeOpen==true)
        {
            isWardrobeOpen=false;
            console.log("The wardrobe has been closed.");
        }
        else
        {
            console.log("The wardrobe has already been closed! Please open it first.")
        }
}


function enterWardrobe(){
        if (isInWardrobe==false)
        {
            isInWardrobe=true;
            console.log("You have just entered the wardrobe.");
        }
        else
        {
            console.log("You are already inside the wardrobe! Please leave the wardrobe first.")
        }
}

function leaveWardrobe(){
        if (isInWardrobe==true)
        {
            isInWardrobe=false;
            console.log("You have just left the wardrobe.");
        }
        else
        {
            console.log("You are already outside of the wardrobe! Please enter it first.")
        }
}
