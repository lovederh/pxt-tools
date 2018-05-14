//% color=195 weight=100 icon="\f1ec" block="Math Blocks"
namespace hyedu{
    //% blockId=hyedu_show_smile_face
    //% block="%eye1 %eye2"
    export function showSmileFace(eye1: number, eye2: number):void { 
        basic.showLeds(`
        . . . . .
        . # . # .
        . . * . .
        # . . . #
        . # # # .
        `);
    }
}
