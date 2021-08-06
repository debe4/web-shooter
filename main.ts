bluetooth.onBluetoothConnected(function () {
    basic.showString("bluetooth mode")
    bluetooth.startAccelerometerService()
    bluetooth.startButtonService()
    bluetooth.startIOPinService()
    bluetooth.startLEDService()
    bluetooth.startTemperatureService()
    bluetooth.startMagnetometerService()
    basic.showLeds(`
        . . . . .
        # . . . #
        # # . # #
        # # . # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        `)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        . . # . .
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
basic.pause(500)
basic.showString("web shooter actifade")
music.playTone(139, music.beat(BeatFraction.Whole))
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    . . # . .
    `)
basic.forever(function () {
	
})
