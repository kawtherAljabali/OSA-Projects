;(function(window, document){ // Start IIFE
'use strict';

// Rules for validation
const rules = {
    userName: { 
        required: true,
        minlength: 3,
        maxlength: 10
    },
    userEmail: {
        required: true,
        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        validEmailDomains: ['gmail.com', 'yahoo.com', 'outlook.com', 'aol.com', 'mail.ru'],
        slangWords: ['LOL', 'OMG', 'WTF', 'LMAO', 'RIP', 'FUCK']     
    },
    userPassword: {
        required: true,
        minlength: 8
    },
    userPhoneNumber: {
        required: true,
        pattern: /^\d{3}-?\d{2}-?\d{3}-?\d{3}$/
    },
    userDOB: {
        required: true,
        pattern: /^\d\d?-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/
    },
    userPhoto: {
        required: true,
        accept: ['image/jpeg', 'image/png'],
        size: (1024 * 100)
    }
}

const signupForm        = document.querySelector('#signupForm')
const hasBorderFields   = signupForm.querySelectorAll('.hasBorder')
const userPhotoLabel    = signupForm.querySelector('#userPhotoLabel')
const boxFooter         = document.querySelector('.box__footer')
let errors, errorFields

function init() {
    errors = []
    errorFields = []
}

function addErrorField(field) {
    if (!errorFields.includes(field)) {
        errorFields.push(field)
    }
}

function validateUsername() {
    if (rules.userName.required) {
        const userNameEl = signupForm.elements.userName
        const userNameVal = userNameEl.value.trim().toLowerCase()

        if (userNameVal === '') {
            errors.push(`Username is <strong>required</strong>. You can't leave it empty.`)
            addErrorField(userNameEl)
        } else if (!isNaN(userNameVal.charAt(0))) {
            errors.push(`Username can't start with a number (<strong>${userNameVal.charAt(0)}</strong>)`)
            addErrorField(userNameEl)
        } else if (userNameVal.length < rules.userName.minlength) {
            errors.push(`Username must be at least <strong>${rules.userName.minlength}</strong> characters.`)
            addErrorField(userNameEl)
        } else if (userNameVal.length > rules.userName.maxlength) {
            errors.push(`Username can contain maximum <strong>${rules.userName.maxlength}</strong> characters.`)
            addErrorField(userNameEl)
        } else if (userNameVal.includes(' ')) {
            errors.push(`Username can't contain a <strong>space</strong>.`)
            addErrorField(userNameEl)
        }           
    }
}

function validateEmail() {
    if (rules.userEmail.required) {
        const userEmailEl = signupForm.elements.userEmail
        const userEmailVal = userEmailEl.value.trim().toLowerCase()
        const userEmailName = userEmailVal.slice(0, userEmailVal.indexOf('@'))
        const userEmailDomain = userEmailVal.slice(userEmailVal.indexOf('@') + 1)
        const searchSlangWord = rules.userEmail.slangWords.filter(function(slangWord) {
            return userEmailName.includes(slangWord.toLowerCase())
        })
        const isEmailValid = rules.userEmail.pattern.test(userEmailVal)
        
        if (userEmailVal === '') {
            errors.push(`Email address is <strong>mandatory</strong>. You can't leave it empty.`)
            addErrorField(userEmailEl)
        } else if (!isEmailValid) {
            errors.push(`<strong>${userEmailVal}</strong> is not a valid email address.`)
            addErrorField(userEmailEl)
        } else if (!rules.userEmail.validEmailDomains.includes(userEmailDomain)) {
            errors.push(`<strong>${userEmailDomain}</strong> is not a valid email domain.`)
            addErrorField(userEmailEl)
        } else if (searchSlangWord.length) {
            errors.push(`Your email username contains slang word <strong>${searchSlangWord.join(', ')}</strong>. Which we do not accept.`)
            addErrorField(userEmailEl)
        }
    }
}

function validatePassword() {
    if (rules.userPassword.required) {
        const userPasswordEl = signupForm.elements.userPassword
        const userPasswordVal = userPasswordEl.value.trim()

        if (!userPasswordVal.length) {
            errors.push(`Password is <strong>required</strong>. You can't leave it empty.`)
            addErrorField(userPasswordEl)
        } else if (userPasswordVal.length < rules.userPassword.minlength) {
            errors.push(`Password must be at least <strong>8</strong> characters long.`)
            addErrorField(userPasswordEl)
        } else if (
            !(/[a-z]/.test(userPasswordVal) &&
            /[A-Z]/.test(userPasswordVal) &&
            /[\d]/.test(userPasswordVal) &&
            /[\W]/.test(userPasswordVal))
        ) {
            errors.push(`Password must include at least <strong>1</strong> lowercase letter, <strong>1</strong> uppercase letter, <strong>1</strong> digit, and <strong>1</strong> special character.`)
            addErrorField(userPasswordEl)
        }
    }
}

function validatePasswordConfirm() {
    const userPasswordConfirmEl = signupForm.elements.userPasswordConfirm
    const userPasswordConfirmVal = userPasswordConfirmEl.value.trim()

    if (signupForm.elements.userPassword.value.trim() !== userPasswordConfirmVal) {
        errors.push(`Those passwords didn't <strong>match</strong>. Try again.`)
        addErrorField(userPasswordConfirmEl)
    }
}

function validatePhoneNumber() {
    if (rules.userPhoneNumber.required) {
        const userPhoneNumberEl = signupForm.elements.userPhoneNumber
        const userPhoneNumberVal = userPhoneNumberEl.value.trim()

        if (!userPhoneNumberVal.length) {
            errors.push(`Phone number is <strong>mandatory</strong>. You can't leave it empty.`)
            addErrorField(userPhoneNumberEl)
        } else if (userPhoneNumberVal.length < 11) {
            errors.push(`The phone number must be at least <strong>11</strong> digit long.`)
            addErrorField(userPhoneNumberEl)
        } else if (!rules.userPhoneNumber.pattern.test(userPhoneNumberVal)) {
            errors.push(`The phone number format is incorrect. We accept <strong>017-89-124-139</strong> or <strong>01789124139</strong> format.`)
            addErrorField(userPhoneNumberEl)
        }
    }
}

function validateDOB() {
    if (rules.userDOB.required) {
        const userDOBEl = signupForm.elements.userDOB
        const userDOBVal = userDOBEl.value.trim()

        if (!userDOBVal.length) {
            errors.push(`Date of birth is <strong>required</strong>. You can't leave it empty.`)
            addErrorField(userDOBEl)
        } else if (!rules.userDOB.pattern.test(userDOBVal)) {
            errors.push(`The date format is incorrect. We accept <strong>21-Sep-1994</strong> in this format.`)
            addErrorField(userDOBEl)
        }            
    }
}

function validateFile() {
    if (rules.userPhoto.required) {
        const userPhotoEl = signupForm.elements.userPhoto
        const userPhotos = userPhotoEl.files
        const userPhoto = userPhotoEl.files[0]

        function returnFileSize(number) {
            if ( number < 1024 ) {
                return number.toFixed(1) + 'Bytes';
            } else if ( number >= 1024 && number < (1024 * 1024) ) {
                return ( number / 1024 ).toFixed(1) + 'KB';
            } else if ( number >= (1024 * 1024) ) {
                return ( number / (1024 * 1024).toFixed(1) ) + 'MB';
            }
        }        

        if (userPhotos.length === 0 || userPhoto === undefined) {
            errors.push(`You didn't <strong>choose</strong> any photo.`)
            errorFields.push(userPhotoLabel)
        } else if (!rules.userPhoto.accept.includes(userPhoto.type)) {
            errors.push(`The file you selected (${userPhoto.name}) is not a valid type. Valid file types are: <strong>${rules.userPhoto.accept.join(', ')}</strong>.`)
            errorFields.push(userPhotoLabel)
        } else if (userPhoto.size > rules.userPhoto.size) {
            errors.push(`Your file size (${returnFileSize(userPhoto.size)}) is too large. The maximum allowed file size is <strong>100KB</strong>.`)
            errorFields.push(userPhotoLabel)
        }
    }
}

function hideError() {
    const errorsList = signupForm.querySelector('#errorsList')
    if (errorsList) {
        errorsList.remove()
    }

    hasBorderFields.forEach(field => field.style.borderColor = '')
}

function showError() {
    const ol = document.createElement('ol')
    ol.setAttribute('id', 'errorsList')
    errorFields.forEach(field => field.style.borderColor = 'red')
    errors.forEach(function(error) {
        const li = document.createElement('li')
        li.innerHTML = error
        ol.appendChild(li)
    })
    boxFooter.parentNode.insertBefore(ol, boxFooter)
}

function validateForm(event) {
    init()
    hideError()
    validateUsername()
    validateEmail()
    validatePassword()
    validatePasswordConfirm()
    validatePhoneNumber()
    validateDOB()
    validateFile()
    showError()

    if (errors.length !== 0) {
        event.preventDefault()
    }
}

// Listen for change event on userPhoto
signupForm.elements.userPhoto.onchange = function(event) {
    userPhotoLabel.textContent = event.target.files[0].name
}

// Listen for blur event on userPhoneNumber
signupForm.elements.userPhoneNumber.onblur = function(event) {
    event.target.value = event.target.value.replace(/^(\d{3})-?(\d{2})-?(\d{3})-?(\d{3})$/, '$1-$2-$3-$4')
}

// Listen for submit event on signupForm
signupForm.addEventListener('submit', validateForm)

})(window, document); // End of IIFE
