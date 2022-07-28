export function init(){
    class Text extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        tags = ["h1","p"]
        tag = "p"
        constructor() {
            super();
            this.render()
        }
        render(){
            const atributoTag:any = this.getAttribute("tag")
            if(this.tags.includes(atributoTag)){
                this.tag =  this.getAttribute("tag") || this.tag;  
            }
          //  const style = document.createElement("style")
          //  style.textContent = `
          //  .h1{
          //      font-size: 28px;
          //  }
          //  `
          //  this.shadow.appendChild(style)

            const rootEl = document.createElement(this.tag)
            rootEl.innerHTML = this.innerHTML
            this.shadow.appendChild(rootEl)
        }
    }
    customElements.define('custom-text', Text);
}