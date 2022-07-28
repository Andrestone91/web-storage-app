export function init(){
    class Header extends HTMLElement {
        
        constructor() {
          super();
         this.render()
        }
        render(){
            this.innerHTML = "by Andrestone"
            this.style.display = "flex"
            this.style.justifyContent = "center"
            this.style.alignItems = "center"
            this.style.backgroundColor ="#FF8282"
            this.style.height = "60px"
            this.style.display ="flex"
            
        }
        
    }
    customElements.define('custom-header', Header);
}