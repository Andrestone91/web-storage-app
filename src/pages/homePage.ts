import { state } from "../state"

export function initHomePage(root){
  const div = document.createElement("div")
  const tasks = state.getEnableTasks()

    div.innerHTML = `
    <custom-header></custom-header>
    <div class="container">
      <h1 class="title">Mis pendientes</h1>
      <form class="form">
       <label class="label">
       Nuevo pendiente
           <input class="input-tasks" type="text" name="text">
       </label>
      <button class="boton">agregar</button>
      </form>
    <ul class="lista">
    </ul>
    `
    const listaEl:any = div.querySelector(".lista")
    
    function createTasks(items){    
      
      listaEl.innerHTML = "";
      for (const item of items) {
        const todoItem = document.createElement("todo-item")
        todoItem.setAttribute("title",item.title)
        todoItem.setAttribute("id",item.id)
        if(item.completed){
          todoItem.setAttribute("checked", "true")
        }
        todoItem.addEventListener("change",(e:any)=>{
          state.changeItemState(e.detail.id, e.detail.value)
          
        })
        listaEl.appendChild(todoItem)
      }
    }
    const input:any = div.querySelector(".input-tasks")
  const form = div.querySelector(".form")
  form?.addEventListener("submit",(e)=>{
    e.preventDefault()
    const target = e.target as any
  const tareas = {
   title: target.text.value,
   id: Math.random(),
   }
   input.value = ""
   state.addTask(tareas.id,tareas.title)

  })
    
    state.subscribe(()=>{
     createTasks(state.getEnableTasks())
    })

   createTasks(tasks)

   
    root.appendChild(div)
}