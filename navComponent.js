class component extends HTMLElement{
  constructor() {
    super();

    const navItems = ["home","about" , "contact"];
    this.attachShadow({mode : "open"});
    this.shadowRoot.innerHTML=`
    <ul>
      ${
        navItems.map((o) => {
          return `<li>${o}</li>`
        }).join('')
      }
    </ul>
    <style>
        ul{
          background-color:red;
          text-align:center;
          overflow: auto;
        }
        li{
          display:inline-block;
          padding: 15px;
        }

      </style>
      `
        var button = document.getElementById('button');
          button.addEventListener('click', () => {
            alert('clicked');

          })
  }
}

window.customElements.define("nav-component", component);
