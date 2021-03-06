

/**
* Sprite Wrapper for codeplant.explosions
*/
//% weight=100 color=#d2b48c 
//% groups='["Small Explosions", "Med Explosions", "Large Explosions", "Healing"]'
namespace effects {

    //% blockId=MedExplosionOne block="Med Explosion 1 on Sprite %s"
    //% weight=100
    //% group="Med Explosions"
    export function MedExplosionOne(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . f f f f . . . . . .
                . . . . . . . f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                f f f . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . f . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . 2 . . . . . f 1 2 . . f
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . f
                . . . . . . . . . . . . . . . f
                . . . . . . . . . f . . . . . .
                f f . . . . . . . f . . . . . .
                . f f . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . f
            `, img`
                . . . . . . . . c c . . . . . .
                . c c c . . . . c . . . . . . .
                . c 5 5 . . . . c . . . . 5 c .
                c c 5 5 . . . . . . . 5 5 5 5 c
                c 5 5 . . . . . . . . . . . 5 c
                . 5 . . . . 2 5 2 . . . . . 5 c
                . . . . . 2 5 c 1 2 . . . 5 5 c
                . . . . . 2 1 c 5 2 . . . . . .
                . . . . . . 2 5 2 . . . . c . .
                . . . . . . . . . . . . . c c .
                . c c . . . . . . . . . . . c .
                . . c c . . . . . . . . . . . .
                . . c . . . c 5 . . . . . . . .
                . . . . . . c c . . . 5 c . . .
                . . . . . . c c 5 5 5 5 c . . .
                . . . . . . . c c c c c c . . .
            `, img`
                . . . . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . . . . . . . f 1 2 . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . f . . . . . . . . . . . . . .
                . f . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . f
            `, img`
                5 . . . . . . . . . . . . . . 5
                5 5 . . . . . . . . . . . 5 5 .
                5 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 1 5 5 . 5 5 5 5 5 5 . . . .
                . 5 1 1 5 5 5 5 5 1 5 . . . . .
                . . 5 1 1 1 5 1 1 1 5 . . . . .
                . . 5 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 1 5 5 . . . .
                . . . . . 5 1 1 1 1 1 5 . . . .
                . . . . 5 5 1 5 5 5 5 5 . . . .
                . . . . 5 1 1 5 5 5 5 5 5 . . .
                . . . 5 5 5 5 5 5 . . 5 5 5 . .
                . . 5 5 5 5 . . . . . . . . . .
                . 5 5 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 . . . . . 5 5 . . . . . 5 5 5
                5 5 . . . . 5 5 . . . 5 5 5 5 .
                5 5 5 . . . 5 5 5 . 5 5 5 5 . .
                . 5 5 5 5 5 5 5 5 5 5 5 5 . . .
                . 5 5 5 5 5 5 1 5 5 5 5 5 . . .
                . 5 5 5 1 1 1 1 1 1 1 5 5 5 . .
                . 5 5 5 5 1 1 1 1 5 5 5 5 5 . .
                . . 5 5 5 1 1 1 1 1 5 5 5 5 . .
                . 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5
                . 5 5 5 1 1 1 1 1 1 5 5 5 . . .
                5 5 5 5 1 5 1 1 1 1 5 5 5 . . .
                5 5 5 5 5 5 5 5 5 1 1 5 5 . . .
                . . . 5 5 5 5 5 5 5 5 5 5 5 . .
                . . 5 5 5 5 . 5 5 5 5 5 5 5 . .
                . 5 5 5 . . . 5 5 5 5 5 . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 5 . . . . . . . . . . . . 5 5
                5 5 5 . . . . . . . . . . 5 5 5
                . 5 5 . . . . . . . . . . 5 . .
                . . 5 . c c c . . . . c c c . .
                . . . c c 4 c c . . c c 4 c . .
                . . c c 4 5 . . . . 5 5 4 4 c .
                . . c 4 5 5 5 . 1 . . 5 5 4 c .
                . . c 4 5 . . 1 1 1 . . 5 4 c .
                . . c c . . . 1 1 1 . c 5 4 c .
                . . . . c . . . 1 . . c c c c .
                . . . . c 5 5 5 . c c . . . . .
                . . 5 . c 4 4 5 5 4 c . . . . .
                . 5 5 . c c 4 4 5 4 c . . 5 . .
                . 5 . . . c c 4 4 4 c . . 5 5 .
                5 . . . . . c c c c c . . . 5 5
                5 . . . . . . . . . . . . . 5 5
            `, img`
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 . . . . .
                . . . . 2 . . . . . . . . . . .
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 2 . . . . . . . . . .
                . . . . . . . 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            75,
            false
        )
    }

    //% blockId=MedExplosionTwo block="Med Explosion 2 on Sprite %s"
    //% weight=100
    //% group="Med Explosions"
    export function MedExplosionTwo(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . 1 1 1 1 1 1 1 1 1 . . . .
                . . . . 1 1 1 1 1 1 1 . . . . .
                . . . . . 1 1 1 1 1 . . . . . .
                . . . . . . 1 1 1 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . f f f f f . . . . . .
                . . . . . f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . f f f f . . . . . .
                . . . . . . . f f . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                f f f . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . f . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . 2 . . . . . f 1 2 . . f
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . f
                . . . . . . . . . . . . . . . f
                . . . . . . . . . f . . . . . .
                f f . . . . . . . f . . . . . .
                . f f . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . f
            `, img`
                . . . . . . . . c c . . . . . .
                . c c c . . . . c . . . . . . .
                . c 5 5 . . . . c . . . . 5 c .
                c c 5 5 . . . . . . . 5 5 5 5 c
                c 5 5 . . . . . . . . . . . 5 c
                . 5 . . . . 2 5 2 . . . . . 5 c
                . . . . . 2 5 c 1 2 . . . 5 5 c
                . . . . . 2 1 c 5 2 . . . . . .
                . . . . . . 2 5 2 . . . . c . .
                . . . . . . . . . . . . . c c .
                . c c . . . . . . . . . . . c .
                . . c c . . . . . . . . . . . .
                . . c . . . c 5 . . . . . . . .
                . . . . . . c c . . . 5 c . . .
                . . . . . . c c 5 5 5 5 c . . .
                . . . . . . . c c c c c c . . .
            `, img`
                . . . . . . . . f f . . . . . .
                f . . . . . . . f . . . . . . .
                f . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 2 . . . f
                . . . . . . . . . . f 1 2 . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f f . . . . . . . . . . . . . .
                . . . . . . . . . . 5 2 . . . .
                . . . . . 2 1 . . . 2 . . . . .
                . . . . . . 2 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . f . . . . . . . . . . . . . .
                . f . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . f
            `, img`
                5 . . . . . . . . . . . . . . 5
                5 5 . . . . . . . . . . . 5 5 .
                5 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 1 5 5 . 5 5 5 5 5 5 . . . .
                . 5 1 1 5 5 5 5 5 1 5 . . . . .
                . . 5 1 1 1 5 1 1 1 5 . . . . .
                . . 5 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 1 5 5 . . . .
                . . . . . 5 1 1 1 1 1 5 . . . .
                . . . . 5 5 1 5 5 5 5 5 . . . .
                . . . . 5 1 1 5 5 5 5 5 5 . . .
                . . . 5 5 5 5 5 5 . . 5 5 5 . .
                . . 5 5 5 5 . . . . . . . . . .
                . 5 5 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 . . . . . 5 5 . . . . . 5 5 5
                5 5 . . . . 5 5 . . . 5 5 5 5 .
                5 5 5 . . . 5 5 5 . 5 5 5 5 . .
                . 5 5 5 5 5 5 5 5 5 5 5 5 . . .
                . 5 5 5 5 5 5 1 5 5 5 5 5 . . .
                . 5 5 5 1 1 1 1 1 1 1 5 5 5 . .
                . 5 5 5 5 1 1 1 1 5 5 5 5 5 . .
                . . 5 5 5 1 1 1 1 1 5 5 5 5 . .
                . 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5
                . 5 5 5 1 1 1 1 1 1 5 5 5 . . .
                5 5 5 5 1 5 1 1 1 1 5 5 5 . . .
                5 5 5 5 5 5 5 5 5 1 1 5 5 . . .
                . . . 5 5 5 5 5 5 5 5 5 5 5 . .
                . . 5 5 5 5 . 5 5 5 5 5 5 5 . .
                . 5 5 5 . . . 5 5 5 5 5 . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                5 5 . . . . . . . . . . . . 5 5
                5 5 5 . . . . . . . . . . 5 5 5
                . 5 5 . . . . . . . . . . 5 . .
                . . 5 . c c c . . . . c c c . .
                . . . c c 4 c c . . c c 4 c . .
                . . c c 4 5 . . . . 5 5 4 4 c .
                . . c 4 5 5 5 . 1 . . 5 5 4 c .
                . . c 4 5 . . 1 1 1 . . 5 4 c .
                . . c c . . . 1 1 1 . c 5 4 c .
                . . . . c . . . 1 . . c c c c .
                . . . . c 5 5 5 . c c . . . . .
                . . 5 . c 4 4 5 5 4 c . . . . .
                . 5 5 . c c 4 4 5 4 c . . 5 . .
                . 5 . . . c c 4 4 4 c . . 5 5 .
                5 . . . . . c c c c c . . . 5 5
                5 . . . . . . . . . . . . . 5 5
            `, img`
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f .
                . . . . . . . . . . 5 . . . . .
                . . . . 2 . . . . . . . . . . .
                . . . 2 5 . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 2 . . . . . . . . . .
                . . . . . . . 5 . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . f . . . . . .
                . . . . . . . . . . . . . . . f
                . f . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            75,
            false
        )
    }

    //% blockId=smallExplosionOne block="Small Explosion 1 on Sprite %s"
    //% weight=100
    //% group="Small Explosions"
    export function smallExplosionOne(s: Sprite) {
        animation.runImageAnimation(
            s,
            [

                img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . f f f . . . . . . .
                    . . . . . f f f f f . . . . . .
                    . . . . . f f f f f f . . . . .
                    . . . . f f f f f f f . . . . .
                    . . . . f f f f f f f . . . . .
                    . . . . . . f f f f . . . . . .
                    . . . . . . . f f . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 1 1 1 . . . . . . .
                    . . . . . 1 1 1 1 1 . . . . . .
                    . . . . 1 1 1 1 1 1 1 . . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . 1 1 1 1 1 1 1 1 1 . . . .
                    . . . . 1 1 1 1 1 1 1 . . . . .
                    . . . . . 1 1 1 1 1 . . . . . .
                    . . . . . . 1 1 1 . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `, img`
                    f f f . . . . . f f . . . . . .
                    f . . . . . . . f . . . . . . .
                    f . . . . . . . f . . . . . f .
                    . . . . . . . . . . 5 2 . . . f
                    . . . . 2 . . . . . f 1 2 . . f
                    . . . 2 5 . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    f f . . . . . . . . . . . . . .
                    . . . . . . . . . . 5 2 . . . .
                    . . . . . 2 1 . . . 2 . . . . .
                    . . . . . . 2 5 . f . . . . . f
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . f . . . . . .
                    f f . . . . . . . f . . . . . .
                    . f f . . . . . . . . . . . . f
                    . f . . . . . . . . . . . . . f
                `, img`
                    . . . . . . . . c c . . . . . .
                    . c c c . . . . c . . . . . . .
                    . c 5 5 . . . . c . . . . 5 c .
                    c c 5 5 . . . . . . . 5 5 5 5 c
                    c 5 5 . . . . . . . . . . . 5 c
                    . 5 . . . . 2 5 2 . . . . . 5 c
                    . . . . . 2 5 c 1 2 . . . 5 5 c
                    . . . . . 2 1 c 5 2 . . . . . .
                    . . . . . . 2 5 2 . . . . c . .
                    . . . . . . . . . . . . . c c .
                    . c c . . . . . . . . . . . c .
                    . . c c . . . . . . . . . . . .
                    . . c . . . c 5 . . . . . . . .
                    . . . . . . c c . . . 5 c . . .
                    . . . . . . c c 5 5 5 5 c . . .
                    . . . . . . . c c c c c c . . .
                `, img`
                    . . . . . . . . f f . . . . . .
                    f . . . . . . . f . . . . . . .
                    f . . . . . . . . . . . . . f .
                    . . . . . . . . . . 5 2 . . . f
                    . . . . . . . . . . f 1 2 . . .
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    f f . . . . . . . . . . . . . .
                    . . . . . . . . . . 5 2 . . . .
                    . . . . . 2 1 . . . 2 . . . . .
                    . . . . . . 2 5 . f . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . f . . . . . . . . . . . . . .
                    . f . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . f
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . f
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . f . . . . . .
                    . . . . . . . . . . . . . . . f
                    . f . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `],
            75,
            false
        )
    }

    export enum Direction {
        //%block='Left'
        Left = 1,
        //%block='Right',
        Right = 2
    }
    //% blockId=sendHealingBolt block="Send Bolt from Sprite %s towards %d for %t secs"
    //% weight=100
    //% group="Healing"
    export function sendHealingBolt(s: Sprite, d: Direction, t: number) {

        let healingBolt = sprites.create(img`
            . . 1 1 1 1 . .
            . 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1
            1 1 1 2 5 1 1 1
            1 1 1 5 2 1 1 1
            1 1 1 1 1 1 1 1
            . 1 1 1 1 1 1 .
            . . 1 1 1 1 . .
        `, SpriteKind.Projectile)
        animation.runImageAnimation(
            healingBolt,
            [img`
                . . 5 . . 5 . .
                5 . . 5 4 . . 5
                . f 5 f f 5 f .
                f f f 2 4 f f f
                f f f 4 2 f f f
                . f 5 f f 5 f .
                5 . f f f f . 5
                . . . 5 4 . . .
            `, img`
                . . 1 1 1 1 . .
                . 1 1 1 1 1 1 .
                1 1 1 1 1 1 1 1
                1 1 1 5 2 1 1 1
                1 1 1 2 5 1 1 1
                1 1 1 1 1 1 1 1
                . 1 1 1 1 1 1 .
                . . 1 1 1 1 . .
            `, img`
                . 5 . 5 4 . 5 .
                5 . f f f f . 5
                . f 5 f f 5 f .
                4 f f 2 5 f f 4
                4 f f 5 2 f f 4
                . f 5 f f 5 f .
                5 . f f f f . 5
                . 5 . 4 5 . 5 .
            `, img`
                . . 1 1 1 1 . .
                . 1 1 1 1 1 1 .
                1 1 1 1 1 1 1 1
                1 1 1 5 2 1 1 1
                1 1 1 2 5 1 1 1
                1 1 1 1 1 1 1 1
                . 1 1 1 1 1 1 .
                . . 1 1 1 1 . .
            `],
            100,
            true
        )
        // which side does the bolt originate
        let side = d === Direction.Right ? -10 : 10
        healingBolt.setPosition(s.x - side, s.y)
        // which direction does the bolt move on X axis
        let vel = d === Direction.Left ? -200 : 200
        healingBolt.setVelocity(vel, 0)
        pause(t*1000)
        healingBolt.destroy()
    }

    //% blockId=playSmallHealing block="Play Small Healing on Sprite %s"
    //% weight=100
    //% group="Healing"
    export function playSmallHealingAnimation(s: Sprite) {
        animation.runImageAnimation(
            s,
            [img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f f . . . . .
                . . . f f f f f f f f f . . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . f f f f f f f f f f f . . .
                . . . f f f f f f f f f . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . 5 5 1 1 1 1 1 5 5 . . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . 5 5 1 1 1 1 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 . 1 1 1 5 5 . . .
                . . 5 5 1 1 1 1 1 1 1 5 5 . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . . 5 5 1 1 1 1 1 5 5 . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . 5 5 5 1 1 1 5 5 5 . . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 . 1 1 5 5 5 . . .
                . . 5 5 5 1 1 1 1 1 5 5 5 . . .
                . . . 5 5 5 1 1 1 5 5 5 . . . .
                . . . . 5 5 1 1 1 5 5 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . 5 5 5 5 . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 5 . . . . . 5 5 5 . . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . 5 5 . . . . . . . . . 5 5 . .
                . 5 5 5 . . 5 . . . . 5 5 5 . .
                . . 5 5 5 . . 5 . . 5 5 5 . . .
                . . . 5 5 . 5 . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . . . 5 5 . .
                . . 5 5 5 . 5 . . . . 5 5 5 . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 5 . . . . . 5 5 . . . .
                . . 5 5 . . . . . . . 5 5 . . .
                . 5 5 . . . . . . . . . 5 5 . .
                . 5 . . . . . . . . . . . 5 . .
                . 5 5 5 . . . . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . 5 5 . . . .
                . . . . 5 . 5 . . . . 5 5 5 . .
                . . . 5 5 . . 5 . . . . . 5 . .
                . . . 5 . . 5 . . . . . 5 5 . .
                . 5 . 5 . . . . . . 5 . 5 . . .
                . 5 5 5 . . . . . . 5 5 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . 5 . . . . . . . . . 5 . . .
                . 5 . . . . . . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . 5 . . . . . . . . 5 . 5 . .
                . . . 5 5 . . . . . . . . . . .
                . . . . . . 5 . . . . 5 . 5 . .
                . . . . 5 . . . . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . 5 5 . . . . . . 5 . 5 . . .
                . . . . . . . . . . . 5 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . 5 . . . . . . . . . . . . . .
                . . 5 . . . . . . . . 5 . 5 . .
                . . . . 5 . . . . . 5 . . . . .
                . . . . 5 . . . . . . 5 . 5 . .
                . . . . . . . 5 . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . . . . . . . 5 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . 5 . 5 . .
                . . . . . . . . . . . . . . . .
                . . . 5 . . 5 . . . . . . 5 . .
                . . . . . . . . . . . . 5 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . 5 . . . . .
                . . . . . . . . . . . . . 5 . .
                . . . . 5 . . . . . . . . . . .
                . . . 5 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `],
            100,
            false
        )
    }

}