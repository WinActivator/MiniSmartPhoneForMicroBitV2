input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (app == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (app == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (app == 0) {
    	
    } else {
    	
    }
})
let app = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.clearScreen()
if (app == 0) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        # . . . .
        `)
} else {
	
}
basic.forever(function () {
	
})
