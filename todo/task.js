
const card = document.getElementsByClassName('card')
const arrayTasks = document.getElementsByClassName('tasks__list')

const removeNote = document.getElementsByClassName('task__remove')
const task = document.getElementsByClassName('task') 

   function save(event){
        const input = document.getElementById('task__input')
        const text = input.value
       if(event.keyCode === 13 && text !== undefined){
           arrayTasks[0].insertAdjacentHTML('beforeEnd', `<div class="task">
                      <div class="task__title">
                        ${text}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`)
          input.value = '';
        
       function removeTask(event){
           x.closest('.task').remove()
       }
        const x = arrayTasks[0].lastElementChild.getElementsByClassName('task__remove')[0]
        x.addEventListener('click', removeTask)
       }
    
     }
    
    card[0].addEventListener('keydown', save)
    


     
       
        
    
        
        
        
            
         
      
    

