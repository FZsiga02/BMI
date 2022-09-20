
function calculate(){
    let height = parseFloat(document.getElementById('height').value)
    let weight = parseFloat(document.getElementById('weight').value)
    let bmi = weight / (height / 100) ** 2
    document.getElementById('BMI').value = bmi

    if (bmi <= 18,5){
        document.getElementById('row1').style.backgroundColor = "orange";
    } else if (bmi <= 24,9){
        document.getElementById('row2').style.backgroundColor = "orange";
    } else if (bmi <= 29,9){
        document.getElementById('row3').style.backgroundColor = "orange";
    } else if (bmi <= 34,9){
        document.getElementById('row4').style.backgroundColor = "orange";
    } else if (bmi <= 39,9){
        document.getElementById('row5').style.backgroundColor = "orange";
    } else{
        document.getElementById('row6').style.backgroundColor = "orange";
    }
}

function init(){
    document.getElementById('calculate').addEventListener('click', calculate)
}

document.addEventListener('DOMContentLoaded', init)


