import { state } from "../../state";
export function init(){
    class Inbox extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        constructor() {
          super();
     this.render()
        }
        connectedCallback(){
            const form = this.shadow.querySelector(".form")
            
            form?.addEventListener("submit",(e)=>{
                e.preventDefault()
                const c = e.target as any  
                               
              console.log(c.text.value,state.data);
              
            })
        }
        render(){
         
            const style = document.createElement("style")
            style.textContent =`
            .form{
                display:flex;
                flex-direction:column;  
            }
            .label{
                font-size: 18px;
            }
            .input{
                height: 50px;
                border: 2px solid #000000;
                border-radius: 4px;
                margin-bottom: 12px;
                padding:5px;
            }
            .boton{
                background-color: #9CBBE9;
                height: 55px;
                border-radius: 4px;
                font-size: 22px;
                margin-bottom: 46px;
            }
            `
            this.shadow.appendChild(style)
            const form = document.createElement("form")
            form.classList.add("form")
            
            form.innerHTML = `
            <label class="label"> Nuevo pendiente </label>
            <input class="input" type="text" name="text">
            <button class="boton">agregar</button>
            `
          
            const input = form.querySelector(".input")
           
            
            this.shadow.appendChild(form)
        }
    }
    customElements.define('custom-inbox', Inbox);
}