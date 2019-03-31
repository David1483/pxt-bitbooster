/**
* Motor Speed
*/
enum MotorSpeed {
    Off = 0,
    Slow = 64,
    Fast = 1024
}

/**
 * HBridge
 */
namespace Bitbooster {
    //% block="Speed"
    export function Speed() {
        pins.analogWritePin(AnalogPin.P15, 512)
        pins.analogWritePin(AnalogPin.P16, 512)
    }
    //% block="Forward"
    export function Forward() {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        Speed()
        images.createImage(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `).showImage(0)
    }
    //% block="Backward"
    export function Backward() {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        Speed()
        images.createImage(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `).showImage(0)
    }
    //% block="Left"
    export function Left() {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        Speed()
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).showImage(0)
    }
    //% block="Stop"
    export function Stop() {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        images.iconImage(IconNames.No).showImage(0)
    }
    //% block="Right"
    export function Right() {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        Speed()
        images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `).showImage(0)
    }
}