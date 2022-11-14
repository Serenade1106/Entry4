var button = document.getElementById('yes-button')
cosole.log(button)

function handleClick(event){
    console.log('clicked')
    var dot = document.querySelector('#dot')
    console.log(dot)
    dot.classList.toggle('enlarged')
    console.log(event.target)
    var clickedButton=event.target
    clickedButton.innerText = "OK"

}
//handleClick()

button.addEventListener('click',handleClick)

function enlargeDot() {
    var dot = document.querySelector('#dot')
    dot.classList.add('enlarged')
  }
  
  firstButton.addEventListener('click', enlargeDot)

  function enlargeDot2() {
    var dot = document.querySelector('#dot2')
    dot.classList.add('enlarged')
  }

  function enlargeDot3() {
    var dot = document.querySelector('#dot3')
    dot.classList.add('enlarged')
  } 

  function enlargeDot4() {
    var dot = document.querySelector('#dot4')
    dot.classList.add('enlarged')
  }

  function enlargeDot5() {
    var dot = document.querySelector('#dot5')
    dot.classList.add('enlarged')
  }