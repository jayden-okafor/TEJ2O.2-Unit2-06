/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Feb 2026
 * This program lights up an led when you click the "a" button and turns it off when you click the "b" button
 */

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})
 