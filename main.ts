scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(invulnabler)) {
        game.gameOver(false)
    }
})
let CAR: Sprite = null
let DUCK: Sprite = null
let invulnabler = 0
invulnabler = 0
tiles.setCurrentTilemap(tilemap`level 0`)
let Alex = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Alex.setPosition(77, 7)
controller.moveSprite(Alex)
scene.cameraFollowSprite(Alex)
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042a0000000400012c10001400012c14001800012c28002c00012c2c003000012c30003400012c38003c00012c01001c000f05001202c102c201000405002800000064002800031400060200045f0000000400012704000800012708000c0001270c00100002272c10001400012714001800012718001c0002272a1c00200002272c2000240002272c24002800012728002c0001272c00300001273000340001273400380002272c38003c00012705001c000f0a006400f4010a00000400000000000000000000000000000000021e000000040001241000140001242000240001243000340001243c0040000124`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(250, function () {
    DUCK = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    DUCK.setVelocity(50, 0)
    tiles.placeOnRandomTile(DUCK, sprites.castle.tileDarkGrass3)
    DUCK.x = 16
    DUCK.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(200, function () {
    CAR = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    CAR.setVelocity(100, 0)
    tiles.placeOnRandomTile(CAR, sprites.vehicle.roadHorizontal)
    CAR.x = 16
    CAR.setFlag(SpriteFlag.DestroyOnWall, true)
})
