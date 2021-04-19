//?? 4 image slider

function imgSlider(anything) {
    document.getElementById("productsSlider").src = anything;
}


//?? increment & decremnent

let counter = document.querySelector('#counter')
let count = 1


function up() {
    if (count < 10000000) {
        count++
    }
    counter.innerHTML = count
}

function down() {
    if (count > 1) {
        count--
    }
    counter.innerHTML = count
}

//?? Mid section for responsive screens
window.onload = function () {
    document.getElementById('prod-mid-img-txt-mob-txt').style.visibility = 'hidden'
}



num1 = document.getElementById('prod-mid-img-txt-mob-num1')
num2 = document.getElementById('prod-mid-img-txt-mob-num2')
num3 = document.getElementById('prod-mid-img-txt-mob-num3')

txt1 = document.getElementById('prod-mid-img-txt-mob-txt1')
txt2 = document.getElementById('prod-mid-img-txt-mob-txt2')
txt3 = document.getElementById('prod-mid-img-txt-mob-txt3')

num1.addEventListener('click', () => {
    txt1.style.visibility = 'visible'
    txt2.style.visibility = 'hidden'
    txt3.style.visibility = 'hidden'
})

num2.addEventListener('click', () => {
    txt1.style.visibility = 'hidden'
    txt2.style.visibility = 'visible'
    txt3.style.visibility = 'hidden'
})

num3.addEventListener('click', () => {
    txt1.style.visibility = 'hidden'
    txt2.style.visibility = 'hidden'
    txt3.style.visibility = 'visible'
})