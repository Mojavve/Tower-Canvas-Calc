
function fLoad(){

}

function clickPress(event) {
    if (event.keyCode == 13) {
        fCalc();
    }
}

function clickPressURL(event) {
    if (event.keyCode == 13) {
        fURL();
    }
}

function fCalc() {
   var xres = document.getElementById("xres");
   var yres = document.getElementById("yres");
   var xscale = document.getElementById("xscale");
   var yscale = document.getElementById("yscale");

   var xres = parseInt(xres.value,10);
   var yres = parseInt(yres.value,10);
   
    if ( xres < 0 || yres < 0){
        alert("Error: Resolution values cannot be negative")
        xscale.value = ''
        yscale.value = ''

    }
    else if (xres > 4*yres || yres > 4*xres) {
        alert("Error: One resolution value is 4x larger than the other")
        xscale.value = ''
        yscale.value = ''

    }
    else if (xres == yres){
        xscale.value = 1.00
        yscale.value = 1.00
    }
    else {
            if (xres < yres) {
                xscale.value = (((( (xres/yres) * 4) - 1)/3)).toFixed(2);
                yscale.value = 1.00;
            } else if (xres > yres) {
                xscale.value = 1.00;
                yscale.value = (((( (yres/xres) * 4) - 1 )/3)).toFixed(2);
            }
    }
}

function fURL() {
    var img = new Image();

    img.onload = function() { 
        document.getElementById("xres").value = this.width;
        document.getElementById("yres").value = this.height;
        fCalc()
     }

    img.src = document.getElementById("vURL").value
    img = null;
    
}


function fClear() {
    document.getElementById("xres").value = '';
    document.getElementById("yres").value = '';
    document.getElementById("xscale").value = '';
    document.getElementById("yscale").value = '';

}