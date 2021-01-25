class question{

    constructor(ques, option1, option2, option3, option4, correct){
        this.ques = createInput(ques);
        this.option1 = createButton(option1);
        this.option2 = createButton(option2);
        this.option3 = createButton(option3);
        this.option4 = createButton(option4);
        this.button = "";

    }

    hide(){
        this.ques.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
    }

    display(){
        this.ques.position(displayWidth/4 , displayHeight/2 - 80);
        this.option1.position(displayWidth/4 , displayHeight/2);
        this.option2.position(displayWidth/4 , displayHeight/2 + 80);
        this.option3.position(displayWidth/4 , displayHeight/2 + 160);
        this.option4.position(displayWidth/4 , displayHeight/2 + 240);

        this.button.mousePressed(()=>{
        }    
    }        
}

