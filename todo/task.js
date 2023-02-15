
const card = document.getElementsByClassName('card')
const arrayTasks = document.getElementsByClassName('tasks__list')
const form = document.getElementsByClassName('tasks__control')
const removeNote = document.getElementsByClassName('task__remove')
const task = document.getElementsByClassName('task') 
const input = document.getElementById('task__input')
    
    function send(event){
        event.preventDefault()
        const text = input.value
        arrayTasks[0].insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${text}
        </div><a href="#" class="task__remove">&times;</a>
        </div>`)
           input.value = '';
        
       function removeTask(event){
           x.closest('.task').remove()
       }
        const x = arrayTasks[0].lastElementChild.getElementsByClassName('task__remove')[0]
        x.addEventListener('click', removeTask)     
    }

    form[0].addEventListener('submit', send)


     
       
        
    
        
        
        
            
         
      
    

