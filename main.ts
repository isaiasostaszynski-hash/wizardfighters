namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Player1 = SpriteKind.create()
    export const Projectile1 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player2.changeLifeBy(1)
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c b c 9 9 9 9 c c c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . f 9 9 9 b b b b 9 9 9 c . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 9 9 f e e . . 
        . . . . c e e 9 9 9 9 9 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 9 c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c b c 9 9 9 9 c c c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . f 9 9 9 b b b b 9 9 9 c . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 9 b b 9 b f b e . . 
        . . e e f 9 9 9 9 9 9 f e e . . 
        . . . . c b 9 9 9 9 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    pause(100)
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    Projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 50, 0)
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    pause(5000)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeLifeBy(1)
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c b c 9 9 9 9 c c c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . f 9 9 9 b b b b 9 9 9 c . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 9 9 f e e . . 
        . . . . c e e 9 9 9 9 9 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 9 c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c b c 9 9 9 9 c c c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . f 9 9 9 b b b b 9 9 9 c . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 9 b b 9 b f b e . . 
        . . e e f 9 9 9 9 9 9 f e e . . 
        . . . . c b 9 9 9 9 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    pause(100)
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    Projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 8 8 . . . . . . . . . . . . 
        . . 1 8 8 8 . . . . . . . . . . 
        . . . . 1 8 8 . . . . . . . . . 
        1 1 9 9 9 1 1 1 1 . . . . . . . 
        . 8 9 9 9 8 8 8 8 8 5 5 5 5 . . 
        1 1 1 1 1 1 1 1 8 8 8 8 1 1 5 . 
        . . 9 9 9 8 8 8 8 . 5 1 1 . . . 
        . 9 9 8 8 . 1 9 9 1 8 . . . . . 
        . . . . 1 1 9 9 8 8 . . . . . . 
        . 1 1 1 9 9 8 8 . . . . . . . . 
        1 1 . 9 9 8 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 1000, 0)
    pause(15000)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player1.changeLifeBy(1)
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 2 2 f e e . . 
        . . . . c e e 2 2 2 2 2 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 2 b b 2 b f b e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . c b 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    pause(100)
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    Projectile1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . 5 5 5 4 4 2 2 2 2 . . . . . 
        5 5 4 4 4 4 2 2 2 2 2 2 . . . . 
        4 4 4 5 5 4 4 4 4 4 2 2 2 . . . 
        4 5 5 4 4 4 5 5 5 4 4 2 2 . . . 
        4 4 4 2 2 4 5 5 5 5 4 2 2 . . . 
        4 5 2 5 4 4 5 5 5 5 4 2 2 . . . 
        4 4 4 2 5 4 5 5 5 5 4 2 2 . . . 
        . 4 4 4 2 5 5 2 4 4 4 2 2 . . . 
        . 5 5 5 4 4 4 4 4 2 2 2 . . . . 
        . . . 5 5 4 4 4 2 2 2 . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 1000, 0)
    pause(15000)
})
mp.onLifeZero(function (player2) {
    game.setGameOverMessage(true, "Player 1")
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    info.player1.changeLifeBy(1)
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 2 2 f e e . . 
        . . . . c e e 2 2 2 2 2 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 2 b b 2 b f b e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . c b 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
    pause(100)
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    Projectile1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 0)
    pause(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player1, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    pause(5000)
})
let Projectile1: Sprite = null
let Projectile2: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 2 b c . . . . . . 
    . . . . c c c 2 2 c c c . . . . 
    . . c c c c 2 2 2 2 c b c c . . 
    . c b b 2 b 2 2 2 2 b 2 b b c . 
    . c b 2 2 b b 2 2 b b 2 2 b c . 
    . . c 2 2 2 b b b b 2 2 2 f . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 2 b b 2 b c b e . . 
    . . e e f 2 2 2 2 2 2 f e e . . 
    . . . . c b 2 2 2 2 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player1))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 9 b c . . . . . . 
    . . . . c c c 9 9 c c c . . . . 
    . . c c c c 9 9 9 9 c b c c . . 
    . c b b 9 b 9 9 9 9 b 9 b b c . 
    . c b 9 9 b b 9 9 b b 9 9 b c . 
    . . c 9 9 9 b b b b 9 9 9 f . . 
    . . f f 9 9 9 9 9 9 9 9 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 9 b b 9 b c b e . . 
    . . e e f 9 9 9 9 9 9 f e e . . 
    . . . . c b 9 9 9 9 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player2))
info.player1.setLife(3)
info.player2.setLife(3)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(129, 67)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(29, 67)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
let Statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
Statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
