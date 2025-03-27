let a = 0
let allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
radio.setGroup(1)
radio.onReceivedNumber(function (num) {
    a = num
    console.log(a)
})
input.onButtonPressed(Button.A, function () {
    if (a<51) a += 1; else a = 0;
    console.log(a)
    radio.sendNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    a = 0
    console.log(a)
    radio.sendNumber(a)
})
input.onButtonPressed(Button.B, function () {
    if (a>0) a += 0 - 1;
    else a = 51;
    console.log(a)
    radio.sendNumber(a)
})
basic.forever(function () {
    let letter = allChar.charAt(a)
    basic.showString(letter)
})
input.onPinPressed(TouchPin.P0, ()=> {
    console.log("hi")
})