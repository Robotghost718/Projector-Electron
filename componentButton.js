

const template = document.createElement('template');
template.innerHTML =  /*html*/
`<!-- Bootstrap core CSS -->
 <!-- Custom styles for this template -->
 <link href="./bootstrap/css/bootstrap.css" rel="stylesheet">
 <link href="./bootstrap/css/bootstrap-reboot.css" rel="stylesheet">
<link href="theme.css" rel="stylesheet">

<div id="parentDiv">
<button type="button" class="btn btn-source btn-circle btn-xl m-2">
<slot name="inputIcon"/>
</button>
</div>
<div><label class="input-label container-fluid ">Laptop</label>
</div>
`;
class compButton extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('button').id = this.getAttribute('name');
    }
}

customElements.define("component-button", compButton);