class component extends HTMLElement{
  constructor() {
    super();

    this.attachShadow({mode : "open"});
    this.shadowRoot.innerHTML=`
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    <style>
        ul{
          background-color:red;
        }
        li{
          display:inline-block
        }

      </style>
      `
        var button = document.getElementById('button');
          button.addEventListener('click', () => {

          alert('button clicked')
          })

  }
}

window.customElements.define("test-component", component);
