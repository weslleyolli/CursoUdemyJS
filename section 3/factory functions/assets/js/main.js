function createCalculator() {
    return {
        display: document.querySelector(".display"),

        iStarted() {
            this.clickButtons();
            this.pressesEnter();
            this.pressesBackSpace();
        },

        pressesBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressesEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.performsAccount();
                }
            });
        },

        performsAccount() {
            let account = this.display.value;

            try {
                account = eval(account)

                if (!account) {
                    alert('invalid account')
                    return;
                }

                this.display.value = String(account);
            } catch (e) {
                alert('invalid account');
                return
            }
        },
        
        clearDisplay() {
            this.display.value = ''
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },
        

        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOne()
                }
                if (el.classList.contains('btn-eq')) {
                    this.performsAccount()
                }

                this.display.focus();
            });
        },

        btnToDisplay(value) {
            this.display.value += value
        }
    }
}

const calculator = createCalculator();
calculator.iStarted();