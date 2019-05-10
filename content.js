class pageContent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode:"open"});

    const header = ["content section"];
    const contentDiscription = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  `];

    this.shadowRoot.innerHTML = `
      ${
        header.map((o) => {
          return `<h2>${o}</h2>
          `
        }).join('')
      }

      <div>
      ${
        contentDiscription.map((o) => {
          return `<p>${o}</p>`
        }).join('')
      }
      </div>

      <style>
      h2{
        text-align:center;
      }
           p{
             background-color:lightblue;
           }

      </style>
    `



  }




}
window.customElements.define("page-content", pageContent);
