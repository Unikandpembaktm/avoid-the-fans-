def on_overlap_tile(sprite, location):
    tiles.set_tile_at(location, assets.tile("""
        transparency16
    """))
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        instrument1
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    tiles.set_tile_at(location2, assets.tile("""
        transparency16
    """))
    info.change_score_by(-1)
    if True:
        controller.move_sprite(mySprite, 0, 0)
        info.start_countdown(5)
        controller.move_sprite(mySprite, 100, 100)
        info.start_countdown(30)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        fan1
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        exit
    """),
    on_overlap_tile3)

mySprite: Sprite = None
scene.set_background_color(13)
tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
tiles.place_on_random_tile(mySprite, assets.tile("""
    stage
"""))
scene.camera_follow_sprite(mySprite)
info.start_countdown(40)