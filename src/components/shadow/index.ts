export function init(){
    class PopUpInfo extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        constructor() {
          super();
     this.render()
        }
        render(){
        }
    }
    customElements.define('popup-info', PopUpInfo);
}