import { state } from "../../state";
export function init(){
    class TodoItem extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        title:string ;
        checked: boolean | null;
        constructor() {
          super();
        }
        connectedCallback(){
            this.title = this.getAttribute("title") || "";
            this.checked = this.hasAttribute("checked")
            const style = document.createElement("style")
            style.textContent = `
            .root ,.enable-border{
                background-color:  #FFF599;
                height: 112px;
                padding:10px;
                display:flex;
                flex-direction: column;
            }
           
            .checkbox-input{
                width:21px;
                height:21px;
            }
        
            .titulo.checked{
                text-decoration: line-through;
            }
            
            .titulo{
            margin-right:10px;
            font-size:18px;
             }
        
           .linea{
            display:flex;
            justify-content: space-between;
               }

              .contenedor-boton{
                  display: flex;
                justify-content: end;
              }
              .contenedor-boton__eliminar{
                  width:60px;
                  height: 20px;
                  visibility:hidden;
                  background-color: tomato;
                  color: white;
                  text-decoration: underline;
              }
              `
           this.shadow.appendChild(style)
            this.render()
        }
        addCallbacks(){
            const rootEl = this.shadow.querySelector(".root")
            rootEl?.addEventListener("click",(e)=>{
               const target = e.target as any
               const enableEl:any = this.shadow.querySelector(".enable-border")
               enableEl.style.border = `solid`
               const boton:any = this.shadow.querySelector(".contenedor-boton__eliminar")
               boton.style.visibility = "visible"
            })
            const chEl = this.shadow.querySelector(".checkbox-input")
            chEl?.addEventListener("click",(e:any)=>{

                const event = new CustomEvent('change', {
                    detail: {
                      id:this.id,
                      value: e.target.checked
                    }
                  });
                  this.dispatchEvent(event)
                })
                const botonEl = this.shadow.querySelector(".contenedor-boton__eliminar")
                botonEl?.addEventListener("click",(e)=>{
                  e.preventDefault()
                  const id = this.getAttribute("id")
                  const currentState = state.getState()
    
                  for (const tasks of currentState.tasks) {
                    if (tasks.id == id) {
                        tasks.deleted = true
                    }
                }
               state.setState(currentState)
                })
            }
        render(){
            const div = document.createElement("div")

           div.innerHTML = `
           <div class="enable-border">
           <div class="root">
             <h4 class="titulo ${this.checked ? "checked" : ""}">
                 <div class="linea">
                   ${this.title}<input class="checkbox-input" type="checkbox" ${this.checked ? "checked" : ""} />
                </h4>
             </div>
             <div class="contenedor-boton">
           <button class="contenedor-boton__eliminar">eliminar</button>
           </div>
            </div>
           </div>
            `
            this.shadow.appendChild(div)
            this.addCallbacks()
        }
    }
    customElements.define('todo-item', TodoItem);
}