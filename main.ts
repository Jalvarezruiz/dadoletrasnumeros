input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(randint(0, 25), 1))
})
