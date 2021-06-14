class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Name");
        this.button = createButton("START");
    }
    hide() {
    this.input.hide();
    this.button.hide();
    }
    display() {
        this.input.position(600,300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(600,400);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
      
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            gameState=1;
        });

}
}