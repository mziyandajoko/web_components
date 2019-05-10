class chatBox extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});

  }

  static get observedAttributes(){
    return ["name","msgBox"];
  }
  attributeChangedCallback(name, msgBox, oldValue, newValue) {
    this._shadowRoot.innerHTML = `<p>${newValue} ${newValue}</p>`;
  }
  connectedCallback(){
    let name = this.getAttribute("name");
    let msgBox = this.getAttribute("msgBox");
    this._shadowRoot.innerHTML = `
                                  <style>
                                      .updateBox{
                                        width:500px;
                                        height:300px;
                                        border:2px solid black;
                                        margin-left:50px;
                                        padding:5px;
                                        }
                                  </style>

                                  <div class="updateBox"><p>${name} : ${msgBox}</p></div>
                                    <br />
                                    <br />
                                  <form class="" action="index.html" method="post">
                                    <label for="inputext">Type a massage</label>
                                    <input type="text" id="inputext" name ="inputext" value="" onclick="typeAlert()">
                                  </form>


    `;

  }

}

window.customElements.define('chat-box', chatBox);
