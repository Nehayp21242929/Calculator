let string = "";
let history = [];
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.plate');

function updateDisplay() {
    inputField.value = string;
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                const result = eval(string);
                history.push(`${string} = ${result}`);
                string = result.toString();
                updateDisplay();
            } catch {
                string = "Error";
                updateDisplay();
                string = "";
            }
        } else if (value === 'C') {
            string = "";
            updateDisplay();
        } else if (value === 'l') {
            string = string.slice(0, -1); // delete last char
            updateDisplay();
        } else if (value === 'N') {
            if (string) {
                string = (parseFloat(string) * -1).toString();
                updateDisplay();
            }
        } else if (value === '%') {
            if (string) {
                string = (parseFloat(string) / 100).toString();
                updateDisplay();
            }
        } else {
            string += value;
            updateDisplay();
        }
    });
});

// Keyboard input support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9' || "+-*/.%".includes(e.key)) {
        string += e.key;
        updateDisplay();
    } else if (e.key === 'Enter') {
        try {
            const result = eval(string);
            history.push(`${string} = ${result}`);
            string = result.toString();
            updateDisplay();
        } catch {
            string = "Error";
            updateDisplay();
            string = "";
        }
    } else if (e.key === 'Backspace') {
        string = string.slice(0, -1);
        updateDisplay();
    } else if (e.key === 'Escape') {
        string = "";
        updateDisplay();
    }
});
