
const mehsullar = document.getElementById('mehsullar')
const sebetopen = document.getElementById('sebetopen')
const desktopsebet = document.getElementById('desktopsebet')
const numre = document.getElementById('numre')
const email = document.getElementById('email')
const meshullarelavesi=document.getElementById('meshullarelavesi')
const desktopmehsuleal=document.getElementById('desktopmehsuleal')
// const qiymetntc = document.getElementById('qiymetntc')
const popmehsulsebet = document.getElementById('popmehsulsebet')
const umummebcem = document.getElementById('umummebcem')
const mobumcem = document.getElementById('mobumcem')
const say = document.getElementById('say')
const saydes = document.getElementById('saydes')
function opensebet() {
    if (sebetopen.style.display === 'none' || sebetopen.style.display === '') {

        sebetopen.style.display = 'block'
    } else {
        sebetopen.style.display === 'none'
    }
}
function sebetbagla() {
    sebetopen.style.display = 'none'
}
function desktopopenn() {
    if (desktopsebet.style.display === 'none' || desktopsebet.style.display === '') {

        desktopsebet.style.display = 'block'
    } else {
        desktopsebet.style.display === 'none'
    }
}
function desclosd() {
    if (desktopsebet.style.display === 'block') {
        desktopsebet.style.display = 'none'
    } else {
        desktopsebet.style.display === 'block'
    }
}
function emailgo() {
    if (numre.style.display === "flex") {
        numre.style.display = "none"
        email.style.display = 'flex'
    } else {
        numre.style.display === "flex"

    }
}
function numgo() {

    if (numre.style.display === "none") {
        numre.style.display = "flex"
        email.style.display = 'none'
    } else {
        numre.style.display = "flex"
        email.style.display = 'none'

    }
}
function openLogin() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.remove('hidden');
}
function clossebet() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.add('hidden');
}

function opensebet() {
    if (sebetopen.style.display === 'none' || sebetopen.style.display === '') {

        sebetopen.style.display = 'block'
    } else {
        sebetopen.style.display === 'none'
    }
}
function sebetbagla() {
    sebetopen.style.display = 'none'
}
function desktopopenn() {
    if (desktopsebet.style.display === 'none' || desktopsebet.style.display === '') {

        desktopsebet.style.display = 'block'
    } else {
        desktopsebet.style.display === 'none'
    }
}
function desclosd() {
    if (desktopsebet.style.display === 'block') {
        desktopsebet.style.display = 'none'
    } else {
        desktopsebet.style.display === 'block'
    }
}
function emailgo() {
    if (numre.style.display === "flex") {
        numre.style.display = "none"
        email.style.display = 'flex'
    } else {
        numre.style.display === "flex"

    }
}
function numgo() {

    if (numre.style.display === "none") {
        numre.style.display = "flex"
        email.style.display = 'none'
    } else {
        numre.style.display = "flex"
        email.style.display = 'none'

    }
}
function openLogin() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.remove('hidden');
}
function clossebet() {
    const overlay = document.getElementById('login-overlay');
    overlay.classList.add('hidden');
}

function secbagla() {
    document.querySelector('.mehsul-al').classList.add('hidden');
}
