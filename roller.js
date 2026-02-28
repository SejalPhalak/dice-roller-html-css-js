    function roller(){
            const min=1;
            const max=6;
            const move= document.getElementById("dice");
            move.classList.add("roll");
            const randomnum =Math.floor(Math.random()*(max - min +1))+min;
            if(randomnum==1){
                move.src="./PIC/B1.png";
             }else if(randomnum==2){
                move.src="./PIC/B2.png";
             }else if(randomnum==3){
                move.src="./PIC/B3.png";
             }else if(randomnum==4){
                move.src="./PIC/B4.png";
             }else if(randomnum==5){
                move.src="./PIC/B5.png";
             }else if(randomnum==6){
                move.src="./PIC/B6.png";
             }else{
                move.src="./PIC/B1.png";
             }
          setTimeout(() => {
               move.classList.remove("roll");
          }, 500);  
        }