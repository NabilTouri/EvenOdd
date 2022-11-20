//variables
let edtNumber = document.getElementById("edtNumber") //input text
const bntEven = document.getElementById("bntEven") //radio button
const bntOdd = document.getElementById("bntOdd") //radio button

bntEven.checked = false
bntOdd.checked = false //turn off the buttons
document.getElementById("alertError").style.display = "none" //error signal not visible

//functions
function hover(){

    if (edtNumber.value %1 == 0 && edtNumber.value != "") { //verify if input text is integer
        edtNumber.classList.remove("input-error") //remove red border
        document.getElementById("alertError").style.display = "none"; //error signal not visible
        if(edtNumber.value %2 ==0){ //verify if input text is even or odd
            Checked(bntEven)
        }
        else{
            Checked(bntOdd)
        }
    }
    else if(edtNumber.value == ""){ //verify if input text is null turn off buttons
        bntEven.checked = false
        bntOdd.checked = false
    }
    else{
        edtNumber.classList.add("input-error") //add red border
        document.getElementById("alertError").style.display = "block" //error signal visible
        Unchecked(bntEven)
        Unchecked(bntOdd)
    }
    
}

function Unchecked(x){
    x.checked = false
}
function Checked(x){
    x.checked = true
}

//events
edtNumber.onmouseover = function(){
    hover()
}