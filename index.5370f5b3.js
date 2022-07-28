const t={data:{tasks:[]},listeners:[],init(){const t=localStorage.getItem("saved-state");this.setState(JSON.parse(t))},getState(){return this.data},getEnableTasks(){return this.getState().tasks.filter((t=>!t.deleted))},setState(t){this.data=t;for(const e of this.listeners)e(t);localStorage.setItem("saved-state",JSON.stringify(t)),console.log("he cambiado",this.data)},subscribe(t){this.listeners.push(t)},addTask(t,e){const n=this.getState();n.tasks.push({id:t,title:e,completed:!1,deleted:!1}),this.setState(n)},changeItemState(t,e){const n=this.getState(),s=n.tasks.find((e=>e.id==t));s.completed=e,this.setState(n),console.log(s)},addItem(t){const e=this.getState();e.data.tasks.push(t),this.setState(e)}};t.init(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){this.innerHTML="by Andrestone",this.style.display="flex",this.style.justifyContent="center",this.style.alignItems="center",this.style.backgroundColor="#FF8282",this.style.height="60px",this.style.display="flex"}}customElements.define("custom-header",t)}(),function(){class e extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){this.shadow.querySelector(".form")?.addEventListener("submit",(e=>{e.preventDefault();const n=e.target;console.log(n.text.value,t.data)}))}render(){const t=document.createElement("style");t.textContent="\n            .form{\n                display:flex;\n                flex-direction:column;  \n            }\n            .label{\n                font-size: 18px;\n            }\n            .input{\n                height: 50px;\n                border: 2px solid #000000;\n                border-radius: 4px;\n                margin-bottom: 12px;\n                padding:5px;\n            }\n            .boton{\n                background-color: #9CBBE9;\n                height: 55px;\n                border-radius: 4px;\n                font-size: 22px;\n                margin-bottom: 46px;\n            }\n            ",this.shadow.appendChild(t);const e=document.createElement("form");e.classList.add("form"),e.innerHTML='\n            <label class="label"> Nuevo pendiente </label>\n            <input class="input" type="text" name="text">\n            <button class="boton">agregar</button>\n            ';e.querySelector(".input");this.shadow.appendChild(e)}}customElements.define("custom-inbox",e)}(),function(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});tags=["h1","p"];tag="p";constructor(){super(),this.render()}render(){const t=this.getAttribute("tag");this.tags.includes(t)&&(this.tag=this.getAttribute("tag")||this.tag);const e=document.createElement(this.tag);e.innerHTML=this.innerHTML,this.shadow.appendChild(e)}}customElements.define("custom-text",t)}(),function(){class e extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.title=this.getAttribute("title")||"",this.checked=this.hasAttribute("checked");const t=document.createElement("style");t.textContent="\n            .root ,.enable-border{\n                background-color:  #FFF599;\n                height: 112px;\n                padding:10px;\n                display:flex;\n                flex-direction: column;\n            }\n           \n            .checkbox-input{\n                width:21px;\n                height:21px;\n            }\n        \n            .titulo.checked{\n                text-decoration: line-through;\n            }\n            \n            .titulo{\n            margin-right:10px;\n            font-size:18px;\n             }\n        \n           .linea{\n            display:flex;\n            justify-content: space-between;\n               }\n\n              .contenedor-boton{\n                  display: flex;\n                justify-content: end;\n              }\n              .contenedor-boton__eliminar{\n                  width:60px;\n                  height: 20px;\n                  visibility:hidden;\n                  background-color: tomato;\n                  color: white;\n                  text-decoration: underline;\n              }\n              ",this.shadow.appendChild(t),this.render()}addCallbacks(){this.shadow.querySelector(".root")?.addEventListener("click",(t=>{t.target;this.shadow.querySelector(".enable-border").style.border="solid";this.shadow.querySelector(".contenedor-boton__eliminar").style.visibility="visible"}));this.shadow.querySelector(".checkbox-input")?.addEventListener("click",(t=>{const e=new CustomEvent("change",{detail:{id:this.id,value:t.target.checked}});this.dispatchEvent(e)}));this.shadow.querySelector(".contenedor-boton__eliminar")?.addEventListener("click",(e=>{e.preventDefault();const n=this.getAttribute("id"),s=t.getState();for(const t of s.tasks)t.id==n&&(t.deleted=!0);t.setState(s)}))}render(){const t=document.createElement("div");t.innerHTML=`\n           <div class="enable-border">\n           <div class="root">\n             <h4 class="titulo ${this.checked?"checked":""}">\n                 <div class="linea">\n                   ${this.title}<input class="checkbox-input" type="checkbox" ${this.checked?"checked":""} />\n                </h4>\n             </div>\n             <div class="contenedor-boton">\n           <button class="contenedor-boton__eliminar">eliminar</button>\n           </div>\n            </div>\n           </div>\n            `,this.shadow.appendChild(t),this.addCallbacks()}}customElements.define("todo-item",e)}(),function(e){const n=document.createElement("div"),s=t.getEnableTasks();n.innerHTML='\n    <custom-header></custom-header>\n    <div class="container">\n      <h1 class="title">Mis pendientes</h1>\n      <form class="form">\n       <label class="label">\n       Nuevo pendiente\n           <input class="input-tasks" type="text" name="text">\n       </label>\n      <button class="boton">agregar</button>\n      </form>\n    <ul class="lista">\n    </ul>\n    ';const i=n.querySelector(".lista");function o(e){i.innerHTML="";for(const n of e){const e=document.createElement("todo-item");e.setAttribute("title",n.title),e.setAttribute("id",n.id),n.completed&&e.setAttribute("checked","true"),e.addEventListener("change",(e=>{t.changeItemState(e.detail.id,e.detail.value)})),i.appendChild(e)}}const a=n.querySelector(".input-tasks");n.querySelector(".form")?.addEventListener("submit",(e=>{e.preventDefault();const n={title:e.target.text.value,id:Math.random()};a.value="",t.addTask(n.id,n.title)})),t.subscribe((()=>{o(t.getEnableTasks())})),o(s),e.appendChild(n)}(document.querySelector(".root"));
//# sourceMappingURL=index.5370f5b3.js.map