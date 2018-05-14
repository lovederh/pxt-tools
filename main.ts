//% color=195 weight=100 icon="\uf1ec" block="Math Blocks"
namespace hyedu{
    //% blockId=hyedu_show_smile_face
    //% block="%eye1"
    export function showSmileFace(eye1: number): void { 
        if (eye1 === 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . * . .
                # . . . #
                . # # # .
                `);
        } else { 
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `);
        }
    }
    //% blockId=hyedu_get_eyes block="eyes %x"
    export function getEyes(x: number): number { 
        return x;
    }
}
