scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan3`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    info.changeScoreBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`camera`, function (sprite2, location2) {
    mySprite.setPosition(135, 20)
    tiles.setTileAt(location2, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument3`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite3, location3) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan2`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . d 2 d d d d . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . d d f f f f d d . . . . . 
    . . . d d f f f f d d . . . . . 
    . . . d d 5 5 5 5 d d . . . . . 
    . . . . . 9 1 1 9 . . . . . . . 
    . . . . . 9 1 1 9 . . . . . . . 
    . . . . . 9 1 1 9 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(40)
