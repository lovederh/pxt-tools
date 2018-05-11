
namespace hyedu{
    //% blockId=hyedu_show_smile_face
    //% block="show|number %eye1 %eye2"
    export function showSmileFace(eye1: number, eye2: number) { 
        basic.showLeds(`
        . . . . .
        . # . # .
        . . * . .
        # . . . #
        . # # # .
        `);
    }
}
