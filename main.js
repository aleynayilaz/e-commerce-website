
const count = document.getElementById('count')

let basketCount = 0

count.innerHTML = basketCount
const basketButtons = document.querySelectorAll('#basketButton')

for(let i = 0; i < basketButtons.length; i++) {
    basketButtons[i].addEventListener('click', function () {
        basketCount++
        count.innerHTML = basketCount
        
    })
}


