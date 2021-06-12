controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mysprite3.destroy()
    mySprite2.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.follow(mySprite)
    mysprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e 5 e e e e e e . . . . 
        . . . e 5 f 5 e e e e e . . . . 
        . . . e 5 f 5 e e e e e . . . . 
        . . . e 5 5 5 e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.baDing.play()
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite, 2, 2)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite2.x = 45
mySprite2.y = 44
