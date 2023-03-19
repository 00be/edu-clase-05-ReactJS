let myDom = document;

class Button {
    constructor (parentID, text){
        this.parentID = parentID;
        this.text = text;
   }
  render() {
        let app = document.getElementById(this.parentID);
        app.innerHTML = `<button>${this.text}</button>`;
  }
}
class Input {
  constructor(parentID, Texto){
    this.parentID = parentID;
    this.texto = "ingrese Texto";
  };
  render() {
    let texto = document.getElementById(this.parentID);
    texto.innerHTML = `<input type="text" placeholder="${this.texto}">`;
  }
}
let myInput = new Input("app2", "Ingrese texto aqui");
myInput.render();

let myButton = new Button("app", "BOTON DOM");
myButton.render();
