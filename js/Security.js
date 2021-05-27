class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code3")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }else{
                //vartext1 = NaN
                var random1 = Math.round(random(1,6));
                switch(random1){
                    case 1: //text1 = "wut";
                    console.log("It varys <= hint")
                    break;

                    case 2: //text1 = "wrogn";
                    console.log("You store information")
                    break;

                    case 3: //text1 = "no0o0";
                    console.log("Numbers, Text, Boolean, NaN, and undefined")
                    break;
                    
                    case 4: //text1 = "pls get corekt";
                    console.log("First letter is a V")
                    break;
                    
                    case 5: //text1 = "doent";
                    console.log("Last letter is a E")
                    break;
                    
                    case 6: //text1 = "trusure furter waway";
                    console.log("_ _ R I A B _ _")
                    break;
                } 
                //text(text1,0,0);
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }else{
                var text2 = NaN
                var random2 = Math.round(random(1,6));
                
                switch(random2){
                    case 1: 
                        text2 = "Connects through internet";
                        break;

                    case 2: 
                        text2 = "Is part of Firebase";
                        break;

                    case 3: 
                        text2 = "_ A _ A _ A _ _";
                        break;
                    
                    case 4: 
                        text2 = "Data is on the base";
                        break;
                    
                    case 5: 
                        text2 = "D _ _ _ _ _ _ _ ";
                        break;
                    
                    case 6: 
                        text2 = "_ _ _ _ _ _ S E";
                        break;
                }
                
                console.log(text2);
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }else{
                var text3 = NaN
                var random3 = Math.round(random(1,6));
                switch(random3){
                    case 1: 
                    text3 = "(answer) Play";
                    break;

                    case 2: 
                    text3 = "(answer) Setep";
                    break;

                    case 3: 
                    text3 = "(answer) Preload";
                    break;
                    
                    case 4: 
                    text3 = "F _ _ _ _ _ _ _";
                    break;
                    
                    case 5: 
                    text3 = "_ _ _ _ _ _ _ N";
                    break;
                    
                    case 6: 
                    text3 = "_ _ N C T I _ _";
                    break;
                } 
                    console.log(text3)
            }
        });
//add code for what happens when the third button is pressed
        

    }
}