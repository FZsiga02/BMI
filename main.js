
function calculate(){
    let height = parseFloat(document.getElementById('height').value)
    let weight = parseFloat(document.getElementById('weight').value)
    document.getElementById('BMI').value = weight / (height / 100) ** 2
}

function init(){
    document.getElementById('calculate').addEventListener('click', calculate)
}

document.addEventListener('DOMContentLoaded', init)


