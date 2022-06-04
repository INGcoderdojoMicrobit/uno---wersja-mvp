controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    doShuffle()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (Math.percentChance(30)) {
            value.y = 32
        } else {
            value.y = 16
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        for (let index = 0; index <= 5; index++) {
            value2.x += 3 * -1
            if (value2.x >= 0 && value2.x <= scene.screenWidth()) {
                pause(10)
            }
        }
    }
})
function doShuffle () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    for (let index2 = 0; index2 <= 19; index2++) {
        kartalosowana = randint(0, 54)
        mySprite = sprites.create(assets.image`1blue`, SpriteKind.Player)
        if (kartalosowana == 0) {
            mySprite.setImage(assets.image`plus4`)
        } else if (kartalosowana == 1) {
            mySprite.setImage(assets.image`zmiana_koloru`)
        } else if (kartalosowana == 2) {
            mySprite.setImage(assets.image`Zmiana_kierunku_green`)
        } else if (kartalosowana == 3) {
            mySprite.setImage(assets.image`Zmiana_kierunku_red`)
        } else if (kartalosowana == 4) {
            mySprite.setImage(assets.image`Zmiana_kierunku_yellow`)
        } else if (kartalosowana == 5) {
            mySprite.setImage(assets.image`Zmiana_kierunku_blue`)
        } else if (kartalosowana == 6) {
            mySprite.setImage(assets.image`blokada_blue`)
        } else if (kartalosowana == 7) {
            mySprite.setImage(assets.image`1blue`)
        } else if (kartalosowana == 8) {
            mySprite.setImage(assets.image`2blue`)
        } else if (kartalosowana == 9) {
            mySprite.setImage(assets.image`3blue`)
        } else if (kartalosowana == 10) {
            mySprite.setImage(assets.image`4blue`)
        } else if (kartalosowana == 11) {
            mySprite.setImage(assets.image`5blue`)
        } else if (kartalosowana == 12) {
            mySprite.setImage(assets.image`6blue`)
        } else if (kartalosowana == 13) {
            mySprite.setImage(assets.image`7blue`)
        } else if (kartalosowana == 14) {
            mySprite.setImage(assets.image`1yellow`)
        } else if (kartalosowana == 15) {
            mySprite.setImage(assets.image`2yellow`)
        } else if (kartalosowana == 16) {
            mySprite.setImage(assets.image`3yellow`)
        } else if (kartalosowana == 17) {
            mySprite.setImage(assets.image`4yellow`)
        } else if (kartalosowana == 18) {
            mySprite.setImage(assets.image`5yellow`)
        } else if (kartalosowana == 19) {
            mySprite.setImage(assets.image`6yellow`)
        } else if (kartalosowana == 20) {
            mySprite.setImage(assets.image`7yellow`)
        } else if (kartalosowana == 21) {
            mySprite.setImage(assets.image`1red`)
        } else if (kartalosowana == 22) {
            mySprite.setImage(assets.image`2red`)
        } else if (kartalosowana == 23) {
            mySprite.setImage(assets.image`3red`)
        } else if (kartalosowana == 24) {
            mySprite.setImage(assets.image`4red`)
        } else if (kartalosowana == 25) {
            mySprite.setImage(assets.image`5red`)
        } else if (kartalosowana == 26) {
            mySprite.setImage(assets.image`6red`)
        } else if (kartalosowana == 27) {
            mySprite.setImage(assets.image`7red`)
        } else if (kartalosowana == 28) {
            mySprite.setImage(assets.image`1green`)
        } else if (kartalosowana == 29) {
            mySprite.setImage(assets.image`2green`)
        } else if (kartalosowana == 30) {
            mySprite.setImage(assets.image`3green`)
        } else if (kartalosowana == 31) {
            mySprite.setImage(assets.image`4green`)
        } else if (kartalosowana == 32) {
            mySprite.setImage(assets.image`5green`)
        } else if (kartalosowana == 33) {
            mySprite.setImage(assets.image`6green`)
        } else if (kartalosowana == 34) {
            mySprite.setImage(assets.image`7green`)
        } else if (kartalosowana == 35) {
            mySprite.setImage(assets.image`8green`)
        } else if (kartalosowana == 36) {
            mySprite.setImage(assets.image`8blue`)
        } else if (kartalosowana == 37) {
            mySprite.setImage(assets.image`8yellow`)
        } else if (kartalosowana == 38) {
            mySprite.setImage(assets.image`8red`)
        } else if (kartalosowana == 39) {
            mySprite.setImage(assets.image`9green`)
        } else if (kartalosowana == 40) {
            mySprite.setImage(assets.image`9blue`)
        } else if (kartalosowana == 41) {
            mySprite.setImage(assets.image`9yellow`)
        } else if (kartalosowana == 42) {
            mySprite.setImage(assets.image`9red`)
        } else if (kartalosowana == 43) {
            mySprite.setImage(assets.image`0green`)
        } else if (kartalosowana == 44) {
            mySprite.setImage(assets.image`0blue`)
        } else if (kartalosowana == 45) {
            mySprite.setImage(assets.image`0yellow`)
        } else if (kartalosowana == 46) {
            mySprite.setImage(assets.image`0red`)
        } else if (kartalosowana == 47) {
            mySprite.setImage(assets.image`blokada_red`)
        } else if (kartalosowana == 48) {
            mySprite.setImage(assets.image`blokada_green`)
        } else if (kartalosowana == 49) {
            mySprite.setImage(assets.image`blokada_yellow`)
        } else if (kartalosowana == 50) {
            mySprite.setImage(assets.image`plus2yellow`)
        } else if (kartalosowana == 51) {
            mySprite.setImage(assets.image`plus2red`)
        } else if (kartalosowana == 52) {
            mySprite.setImage(assets.image`plus2blue`)
        } else if (kartalosowana == 53) {
            mySprite.setImage(assets.image`plus2green`)
        } else if (kartalosowana == 54) {
            mySprite.setImage(assets.image`plus4`)
        } else {
            mySprite.setImage(assets.image`myImage`)
        }
        mySprite.setPosition(8 + index2 * 18, 16)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    doMoveRight()
})
function doMoveRight () {
    for (let index3 = 0; index3 <= sprites.allOfKind(SpriteKind.Player).length - 1; index3++) {
        value3 = sprites.allOfKind(SpriteKind.Player)[sprites.allOfKind(SpriteKind.Player).length - 1 - index3]
        for (let index4 = 0; index4 <= 5; index4++) {
            value3.x += 3 * 1
            if (value3.x >= 0 && value3.x <= scene.screenWidth()) {
                pause(10)
            }
        }
    }
}
let value3: Sprite = null
let mySprite: Sprite = null
let kartalosowana = 0
doShuffle()
let wybierak = sprites.create(assets.image`selector_off`, SpriteKind.Enemy)
wybierak.z = 1
wybierak.setPosition(8 + 4 * 18, 16)
animation.runImageAnimation(
wybierak,
assets.animation`selector`,
50,
true
)
let gracz1 = sprites.create(assets.image`duck5`, SpriteKind.Enemy)
gracz1.setPosition(9, 110)
let textSprite = textsprite.create("Player1")
textSprite.setPosition(20, 90)
let kupka1 = sprites.create(assets.image`4green`, SpriteKind.Enemy)
kupka1.setPosition(77, 78)
let textSprite2 = textsprite.create("dobierz:")
textSprite2.setPosition(135, 96)
let textSprite3 = textsprite.create("6")
textSprite3.setPosition(145, 106)
