const tooltip = document.getElementsByClassName('has-tooltip') 
console.log(tooltip)
const array = Array.from(tooltip) 



array.forEach(el => {
    el.addEventListener('click', show) 
     function show(event) {
     event.preventDefault()
     const tooltipActive = el.getElementsByClassName('tooltip')
     const text = el.getAttribute('title')

      if (tooltipActive[0] == undefined){
          el.insertAdjacentHTML('beforeEnd', `<div class="tooltip">${text}</div>`)
          console.log(1)
      }
       
      if (tooltipActive[0].classList.contains('tooltip_active')){
          tooltipActive[0].classList.remove('tooltip_active')
      }
      
      else {
          tooltipActive[0].classList.add('tooltip_active')
          console.log(2)
      }
         
   }
})

 

   