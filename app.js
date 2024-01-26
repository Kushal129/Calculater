(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); //ek sahte all butotn avse 0-9
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let backspaceButton = document.getElementById("backspace");

    buttons.forEach(function (button) { // button badha hse witch are click... we can get for this foreach 

        button.addEventListener('click', function (e) { // get the button value ex:- data-num="*"
            //push the value in screen 
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function (e) {  //user can click equal button thne the function is work
        if (screen.value === '') { // screen khali to kai pn na batava pade 
            screen.value = "";
        } else {
            evaluateExpression();
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
        clearError();
    });

    backspaceButton.addEventListener('click', function (e) {
        screen.value = screen.value.slice(0, -1);
        clearError();
    });

    document.addEventListener('keydown', function (event) {
        const key = event.key;

        if (/[0-9.+\-*/]/.test(key)) {
            screen.value += key;
        } else if (key === 'Enter') {
            evaluateExpression();
        } else if (key === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
            clearError();
        }
    });

    function evaluateExpression() {
        try {
            const result = eval(screen.value);
            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Invalid expression");
            }
            screen.value = result;
            clearError();
        } catch (error) {
            screen.value = "Error";
            screen.style.color = "red";
        }
    }

    function clearError() {
        screen.style.color = "whitesmoke";
    }
})();
