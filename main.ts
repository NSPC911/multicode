input.onButtonPressed(Button.A, function () {
    program += -1
})
input.onButtonPressed(Button.AB, function () {
    running = true
    // 1 = Smile
    // 2 = Sad
    // 3 = Beating Heart
    // 4 = SPS
    if (program == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # . # #
            . . # . .
            `)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(300)
            basic.clearScreen()
            basic.pause(300)
        }
    } else if (program == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Sad)
            basic.pause(300)
            basic.clearScreen()
            basic.pause(300)
        }
    } else if (program == 3) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(300)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(300)
        }
    } else if (program == 4) {
        sps = randint(1, 3)
        for (let index = 0; index < 4; index++) {
            if (sps == 1) {
                basic.showIcon(IconNames.Scissors)
            } else if (sps == 2) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else if (sps == 3) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . . . . .
                    `)
            }
            basic.pause(300)
            basic.clearScreen()
            basic.pause(300)
        }
    }
    basic.clearScreen()
    running = false
})
input.onButtonPressed(Button.B, function () {
    program += 1
})
let sps = 0
let running = false
let program = 0
program = 1
running = false
basic.showLeds(`
    . . . . .
    . # . . .
    . . . # .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    # . . # .
    . # # . .
    . # . # .
    . # . . #
    . . # . .
    `)
basic.showLeds(`
    # . # # #
    . # # . .
    # # # # #
    . # # # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.forever(function () {
    if (running == false) {
        if (program == 0 || program == 5) {
            program = 1
        }
        basic.showNumber(program)
    }
})
