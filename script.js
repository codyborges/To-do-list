//DOM variables 
let input = document.querySelector('.listInput')
let addBtn = document.querySelector('.sub')
let clearBtn = document.querySelector('.clear')
let answer = document.querySelector('#list')

//event Listeners
addBtn.addEventListener('click', addToList)
clearBtn.addEventListener('click', clearAll)

//function
function addToList (){
let newItem = document.createElement('li')
newItem.innerHTML = input.value
answer.appendChild(newItem)
input.value = ''


}

function clearAll(){
answer.innerHTML = ''

}