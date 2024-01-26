(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); //ek sahte all butotn avse 0-9
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let backspaceButton = document.getElementById("backspace");

    buttons.forEach(function(button){ // button badha hse witch are click... we can get for this foreach 
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num; // get the button value ex:- data-num="*"
            //push the value in screen 
            if (value !== undefined) {
                screen.value += value;
            }

        })
    });

    equal.addEventListener('click',function(e){ //user can click equal button thne the function is work
        console.log("equal btn work");
        if(screen.value === '') { // screen khali to kai pn na batava pade 
            screen.value = "";
        }else{
            let ans = eval(screen.value);
            screen.value = ans;
            console.log("done");
        }
    })

    clear.addEventListener('click',function(e){
        screen.value="";
    })

    backspaceButton.addEventListener('click',function(e){
        screen.value = screen.value.slice(0, -1);
    })

})();