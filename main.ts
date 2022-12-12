let wooble = 0
basic.forever(function () {
    led.plotBarGraph(
    wooble,
    10
    )
    if (wooble > 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
        wooble += 1
        basic.pause(100)
    }
})
