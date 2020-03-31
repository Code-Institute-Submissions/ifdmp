


export class AnimationFunctions{
    constructor(){
       this.fade;
       this.bgMove;
    }

     // Background fadeing function
     backgroundFadeToggle(id){

        // Defining opacity variable
        let op = 1;

        // Variable to check that function was called once
        let called = true;
        

        this.fade =  setInterval(() => {

           // Decrementing opacity by 0.003 each time
           op -= 0.003;
    
           document.getElementById(id).style.opacity = `${op}`;

           // When opacity is less or equal to 0.7 than calling a backgroundMoving function for second background image
           if(op.toFixed(1) <= 1 && called){
                //alert("naklebia");
                this.backgroundMoving("dianaSlider");
                called = false;
           }else if(op.toFixed(1) < 0){
               clearInterval(this.fade);
               console.log(op.toFixed(1));
           }
          
          
        }, 15);
    
    }


    backgroundMoving(id){

        // Declaring variable for moving ration 
        let move = 1;

        // Gettig element
        let el = document.getElementById(id);


        let called = true;

        // Running timer for animation
        this.bgMove = setInterval(() => {


            // Decreasing move variable by 0.1 unit 
            move -= 0.1;
            
            // Animating positions
            el.style.backgroundPosition = `${move}px ${move}px`;

            // Incirsing in size to cover div element
            el.style.backgroundSize = "120%";
           
            if(move.toFixed(0) <= -100 && called === true){

                this.backgroundFadeToggle("dianaSlider");

                called = false;
            }

        });
        
    }
}