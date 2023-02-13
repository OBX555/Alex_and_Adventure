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
    if (level == 0) {
        game.splash("Starting Level")
        tiles.setCurrentTilemap(tilemap`level 0`)
    }
    if (level == 1) {
        game.splash("Level 1")
        tiles.setCurrentTilemap(tilemap`level 1`)
    }
    if (level == 2) {
        game.splash("Level 2")
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (level == 3) {
        game.splash("Level 3")
        tiles.setCurrentTilemap(tilemap`level3`)
    }
    if (level == 4) {
        game.splash("Level 4")
        tiles.setCurrentTilemap(tilemap`level4`)
    }
    if (level == maxlevel) {
        tiles.setCurrentTilemap(tilemap`WinScreen`)
        game.gameOver(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Obsidian boots with background`, function (sprite, location) {
    game.splash("New Item Obsidian Boots!")
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
let Meteor: Sprite = null
let CAR: Sprite = null
let DUCK: Sprite = null
let LavaMonster: Sprite = null
let Dungeon_Monster: Sprite = null
let Alex: Sprite = null
let invulnabler = 0
let level = 0
let maxlevel = 0
let hasobsdboot = 0
hasobsdboot = 0
maxlevel = 5
level = 0
invulnabler = 0
Alex = sprites.create(assets.image`Alex`, SpriteKind.Player)
Alex.setPosition(77, 7)
controller.moveSprite(Alex)
scene.cameraFollowSprite(Alex)
music.play(music.createSong(assets.song`Background Music`), music.PlaybackMode.LoopingInBackground)
levelup(level)
game.onUpdateInterval(25, function () {
    if (level > 2) {
        Dungeon_Monster = sprites.create(assets.image`dungeon monster`, SpriteKind.Enemy)
        Dungeon_Monster.setVelocity(50, 0)
        tiles.placeOnRandomTile(Dungeon_Monster, sprites.dungeon.darkGroundCenter)
        Dungeon_Monster.x = 16
        Dungeon_Monster.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(25, function () {
    if (level == 4) {
        LavaMonster = sprites.create(assets.image`Lava Monster`, SpriteKind.Enemy)
        LavaMonster.setVelocity(50, 0)
        tiles.placeOnRandomTile(LavaMonster, sprites.dungeon.hazardLava0)
        LavaMonster.x = 16
        LavaMonster.setFlag(SpriteFlag.DestroyOnWall, true)
        Dungeon_Monster = sprites.create(assets.image`dungeon monster`, SpriteKind.Enemy)
        Dungeon_Monster.setVelocity(50, 0)
        tiles.placeOnRandomTile(Dungeon_Monster, sprites.dungeon.darkGroundCenter)
        Dungeon_Monster.x = 16
        Dungeon_Monster.setFlag(SpriteFlag.DestroyOnWall, true)
        DUCK = sprites.create(assets.image`Duck`, SpriteKind.Enemy)
        DUCK.setVelocity(50, 0)
        tiles.placeOnRandomTile(DUCK, sprites.castle.tileDarkGrass3)
        DUCK.x = 16
        DUCK.setFlag(SpriteFlag.DestroyOnWall, true)
        CAR = sprites.create(assets.image`Lil Car`, SpriteKind.Enemy)
        CAR.setVelocity(100, 0)
        tiles.placeOnRandomTile(CAR, sprites.vehicle.roadHorizontal)
        CAR.x = 16
        CAR.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(250, function () {
    DUCK = sprites.create(assets.image`Duck`, SpriteKind.Enemy)
    DUCK.setVelocity(50, 0)
    tiles.placeOnRandomTile(DUCK, sprites.castle.tileDarkGrass3)
    DUCK.x = 16
    DUCK.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(1, function () {
    if (level == 4) {
        Meteor = sprites.create(assets.image`Meteor`, SpriteKind.Enemy)
        Meteor.setVelocity(200, 0)
        tiles.placeOnRandomTile(Meteor, sprites.dungeon.stairWest)
        Meteor.x = 16
        Meteor.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(150, function () {
    if (level > 0) {
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
