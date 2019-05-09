class countryFlag extends HTMLElement {
  constructor() {
     super();
     this.shadow = this.createShadowRoot();

     this._countryCode = null;
   }
    static get observedAttributes (){
      return['country'];
  }

  attributeChangedCallback(name ,newValue ,oldValue){
    this._countryCode = newValue;
    this._updateRendering();
  }

  connectedCallback(){
    this._updateRendering();
  }

  get country(){
  return this._countryCode;
  }

  set country(value){
    return this.setAttribute('country',value);
  }

  _updateRendering(){
    //This needs to be done
   console.log("component _updateRendering loads");
  }

}
  const countryFlagIcon = new countryFlag();
  countryFlagIcon.country = "jp"
  document.body.appendChild(countryFlagIcon)





window.customElements.define('country-flag', countryFlag);
