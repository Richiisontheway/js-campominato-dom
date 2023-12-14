const buttonPlay = document.getElementById('play');


let existence = false;

const numberBomb = [];

let counter = 0

buttonPlay.addEventListener('click',function(){
    
    const diff = parseInt(document.getElementById('difficulty').value);
    //console.log('caselle',diff);

    //console.log('button',buttonPlay, typeof buttonPlay);
    
    for (let j = 1; j <= 16; j++) {
        
        //console.log('bomb',bomb);
        
        let bomb = randomNumber(1,diff);

        let foundInArray = numberBomb.includes(bomb);
        while (foundInArray == true) {

            bomb = randomNumber(1, diff);
            //console.log('bomb',bomb);
            foundInArray = numberBomb.includes(bomb);
        }
        numberBomb.push(bomb);
        console.log(numberBomb);
    };
    if(existence){
        
        existence = false;

        document.getElementById('contenitore').innerHTML = '';

        document.getElementById('main-container').classList.remove('p-3');
    }
    else{

        existence = true;

        for (let i = 1; i <= diff ; i++) {
        
            const element = document.createElement('div');
            element.classList.add('cell','col-auto','flex-wrap');
            //console.log(element);
    
            document.getElementById('contenitore').append(element);
            element.innerHTML = i

            element.addEventListener('click', function(){
                
                
                console.log('punteggio',counter,typeof counter);
                
                //console.log(this);

                

                //console.log(this.innerHTML)
                
                if(numberBomb.includes(i)){

                    alert("hai perso");
                    this.classList.add('bomb');
    
                }
                else{
                    counter++
                    this.classList.add('continua');
                    //alert("continua");
                    
                }

        });
        };

        document.getElementById('main-container').classList.add('p-3')
    
    }

});

// FUNCTION

function randomNumber (min,max){

    return (Math.floor(Math.random() * (max - min + 1)) + min);
    
}