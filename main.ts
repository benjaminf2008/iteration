input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
led.plot(1, 0)
led.plot(3, 0)
led.plot(2, 1)
led.plot(1, 3)
led.plot(2, 3)
led.plot(3, 3)
basic.forever(function () {
    led.toggle(0, 2)
    led.toggle(4, 2)
    basic.pause(100)
    led.toggle(0, 3)
    led.toggle(4, 3)
    basic.pause(100)
    led.toggle(0, 4)
    led.toggle(4, 4)
    basic.pause(100)
})
