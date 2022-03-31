input.onButtonPressed(Button.A, function () {
    basic.showString("now we gonna learn what is a line segment and line!")
    for (let index = 0; index < 6; index++) {
        basic.showString("this is a line")
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    basic.showString("this is a line segment its not a entire line thats why they are different",75)
for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    }
    basic.clearScreen()
    basic.showString("now we gonna learn what is a angle")
    basic.showString("this is a straight angle!")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            # # # # #
            `)
    }
    basic.showString("this is a obtuse angle!")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            # # # # .
            # . . # .
            . # . # .
            . . # # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . # . . .
            . . # # #
            `)
        basic.showLeds(`
            # . . . .
            # # # # .
            # . . # .
            . # . # .
            . . # # #
            `)
    }
    basic.showString("this is a reflex angle!")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    }
    basic.showString("this is a acute angle!")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
    basic.showString("now we gonna learn what is a circle and if there is a 360 degres in it")
    basic.showString("this is a circle")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    basic.showString("you can see that there is a 360 angle")
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("lets start!",75)
basic.clearScreen()
    basic.showString("this is a point its the starting point!",75)
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
            . . . . .
            . . # # #
            . . . . .
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
    basic.showString("now we gonna learn what is a ray!")
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        . # . . #
        . # # # #
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . #
        . . # . #
        . . # # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        . # . . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # . # #
        # . # . #
        # # # # #
        `)
    basic.showString("the lines beside the center point are the ray")
    basic.showString("if your are ready press on a to start the second lesson",75)
})
basic.showString("hello my name is microbit welcome to your first class",75
)
basic.showString("press A+B to start")
