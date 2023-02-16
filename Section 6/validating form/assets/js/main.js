class Validforms {
    constructor() {
        this.form = document.querySelector('.form')
        this.events()
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValidFields = this.isValidFields();
        const validPasswords =  this.passwordsValid();

        if(isValidFields && validPasswords) {
            alert('Forms sended.');
            this.form.submit();
        }
    }

    passwordsValid() {
        let valid = true;

        const password = this.form.querySelector('.password')
        const repeatPasswords = this.form.querySelector('.repeatPassword')

        if(password.value !== repeatPasswords.value) {
            valid = false;
            this.createError(password, 'Fields password and repeat password need be equals')
            this.createError(repeatPasswords, 'Fields password and repeat password need be equals')
        }

        if(password.value.length < 6 || password.value.length > 12) {
            this.createError(password, 'Fields password be need between 6 and 12 character')
        }
    }

    isValidFields() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let field of this.form.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerHTML

            if(!field.value) {
                this.createError(field, `Field "${label}" not can be empty`)
                valid = false
            }

            if(field.classList.contains('cpf')) {
                if(!this.validCpf(field)) valid = false
            }

            if(field.classList.contains('user')) {
                if(!this.validUser(field)) valid = false
            }
        }

        return valid
    }

    validUser(field) {
        const user = field.value
        let valid = true

        if(user.length < 3 || user.length > 12){
            this.createError(field, 'User need have between 3 and 12 character.')
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'User need have letters and numbers.')
            valid = false;
        }

        return valid
    }

    validCpf(field) {
        const cpf = new ValidCpf(field.value);

        if(!cpf.valid()){
            this.createError(field, 'CPF invalid')
            return false;
        }
        return true
    }

    createError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}

const valid = new Validforms()