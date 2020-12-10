const buttons = document.querySelectorAll("#buttons")
const visor1 = document.querySelector('#visor1')



buttons.forEach(btn =>{
  btn.addEventListener('click', ()=> {
    const clicked = btn.value
    const clickedIsNumber = parseInt(clicked) == parseInt(clicked)
    const visorIsClean = visor1.innerHTML != ""
    
    if (  clickedIsNumber || visorIsClean ) {
      
      if ( clicked == "=" ) {
        visor1.innerHTML = eval(visor1.innerHTML)
      } else if ( clicked == "AC" ) {
        visor1.innerHTML = ''
      } else if ( clicked == "←" ) {
        visor1.innerHTML = visor1.innerHTML.substr(0, visor1.innerHTML.length -1)
      } else {
        visor1.innerHTML += clicked
      }
    }
    
    
  })
})