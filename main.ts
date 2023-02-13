scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (!(hasobsdboot)) {
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    level += 1
    levelup(level)
})
function levelup (level: number) {
    Alex.setPosition(77, 7)
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level 1`)
    }
    if (level == maxlevel) {
        tiles.setCurrentTilemap(tilemap`WinScreen`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Obsidian boots with background`, function (sprite, location) {
    hasobsdboot = 1
    sprites.destroy(Alex)
    Alex = sprites.create(assets.image`Alex With Obsidian Boots`, SpriteKind.Player)
    controller.moveSprite(Alex)
    scene.cameraFollowSprite(Alex)
    Alex.setPosition(77, 7)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(invulnabler)) {
        game.gameOver(false)
    }
})
let CAR: Sprite = null
let LavaMonster: Sprite = null
let DUCK: Sprite = null
let Alex: Sprite = null
let invulnabler = 0
let level = 0
let maxlevel = 0
let hasobsdboot = 0
hasobsdboot = 0
maxlevel = 5
level = 0
invulnabler = 0
tiles.setCurrentTilemap(tilemap`level 0`)
Alex = sprites.create(assets.image`Alex`, SpriteKind.Player)
Alex.setPosition(77, 7)
controller.moveSprite(Alex)
scene.cameraFollowSprite(Alex)
music.play(music.createSong(assets.song`Background Music`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(250, function () {
    DUCK = sprites.create(assets.image`Duck`, SpriteKind.Enemy)
    DUCK.setVelocity(50, 0)
    tiles.placeOnRandomTile(DUCK, sprites.castle.tileDarkGrass3)
    DUCK.x = 16
    DUCK.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(150, function () {
    if (level == 1) {
        LavaMonster = sprites.create(assets.image`Lava Monster`, SpriteKind.Enemy)
        LavaMonster.setVelocity(50, 0)
        tiles.placeOnRandomTile(LavaMonster, sprites.dungeon.hazardLava0)
        LavaMonster.x = 16
        LavaMonster.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(200, function () {
    CAR = sprites.create(assets.image`Lil Car`, SpriteKind.Enemy)
    CAR.setVelocity(100, 0)
    tiles.placeOnRandomTile(CAR, sprites.vehicle.roadHorizontal)
    CAR.x = 16
    CAR.setFlag(SpriteFlag.DestroyOnWall, true)
})
