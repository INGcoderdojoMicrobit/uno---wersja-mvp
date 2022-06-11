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
        mySprite.setImage(doDajObrazek(kartalosowana))
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
function doDajObrazek (numerKarty: number) {
    if (kartalosowana == 0) {
        obrazeKarty = assets.image`plus4`
    } else if (numerKarty == 1) {
        obrazeKarty = assets.image`zmiana_koloru`
    } else if (numerKarty == 2) {
        obrazeKarty = assets.image`Zmiana_kierunku_green`
    } else if (numerKarty == 3) {
        obrazeKarty = assets.image`Zmiana_kierunku_red`
    } else if (numerKarty == 4) {
        obrazeKarty = assets.image`Zmiana_kierunku_yellow`
    } else if (numerKarty == 5) {
        obrazeKarty = assets.image`Zmiana_kierunku_blue`
    } else if (numerKarty == 6) {
        obrazeKarty = assets.image`blokada_blue`
    } else if (numerKarty == 7) {
        obrazeKarty = assets.image`1blue`
    } else if (numerKarty == 8) {
        obrazeKarty = assets.image`2blue`
    } else if (numerKarty == 9) {
        obrazeKarty = assets.image`3blue`
    } else if (numerKarty == 10) {
        obrazeKarty = assets.image`4blue`
    } else if (numerKarty == 11) {
        obrazeKarty = assets.image`5blue`
    } else if (numerKarty == 12) {
        obrazeKarty = assets.image`6blue`
    } else if (numerKarty == 13) {
        obrazeKarty = assets.image`7blue`
    } else if (numerKarty == 14) {
        obrazeKarty = assets.image`1yellow`
    } else if (numerKarty == 15) {
        obrazeKarty = assets.image`2yellow`
    } else if (numerKarty == 16) {
        obrazeKarty = assets.image`3yellow`
    } else if (numerKarty == 17) {
        obrazeKarty = assets.image`4yellow`
    } else if (numerKarty == 18) {
        obrazeKarty = assets.image`5yellow`
    } else if (numerKarty == 19) {
        obrazeKarty = assets.image`6yellow`
    } else if (numerKarty == 20) {
        obrazeKarty = assets.image`7yellow`
    } else if (numerKarty == 21) {
        obrazeKarty = assets.image`1red`
    } else if (numerKarty == 22) {
        obrazeKarty = assets.image`2red`
    } else if (numerKarty == 23) {
        obrazeKarty = assets.image`3red`
    } else if (numerKarty == 24) {
        obrazeKarty = assets.image`4red`
    } else if (numerKarty == 25) {
        obrazeKarty = assets.image`5red`
    } else if (numerKarty == 26) {
        obrazeKarty = assets.image`6red`
    } else if (numerKarty == 27) {
        obrazeKarty = assets.image`7red`
    } else if (numerKarty == 28) {
        obrazeKarty = assets.image`1green`
    } else if (numerKarty == 29) {
        obrazeKarty = assets.image`2green`
    } else if (numerKarty == 30) {
        obrazeKarty = assets.image`3green`
    } else if (numerKarty == 31) {
        obrazeKarty = assets.image`4green`
    } else if (numerKarty == 32) {
        obrazeKarty = assets.image`5green`
    } else if (numerKarty == 33) {
        obrazeKarty = assets.image`6green`
    } else if (numerKarty == 34) {
        obrazeKarty = assets.image`7green`
    } else if (numerKarty == 35) {
        obrazeKarty = assets.image`8green`
    } else if (numerKarty == 36) {
        obrazeKarty = assets.image`8blue`
    } else if (numerKarty == 37) {
        obrazeKarty = assets.image`8yellow`
    } else if (numerKarty == 38) {
        obrazeKarty = assets.image`8red`
    } else if (numerKarty == 39) {
        obrazeKarty = assets.image`9green`
    } else if (numerKarty == 40) {
        obrazeKarty = assets.image`9blue`
    } else if (numerKarty == 41) {
        obrazeKarty = assets.image`9yellow`
    } else if (numerKarty == 42) {
        obrazeKarty = assets.image`9red`
    } else if (numerKarty == 43) {
        obrazeKarty = assets.image`0green`
    } else if (numerKarty == 44) {
        obrazeKarty = assets.image`0blue`
    } else if (numerKarty == 45) {
        obrazeKarty = assets.image`0yellow`
    } else if (numerKarty == 46) {
        obrazeKarty = assets.image`0red`
    } else if (numerKarty == 47) {
        obrazeKarty = assets.image`blokada_red`
    } else if (numerKarty == 48) {
        obrazeKarty = assets.image`blokada_green`
    } else if (numerKarty == 49) {
        obrazeKarty = assets.image`blokada_yellow`
    } else if (numerKarty == 50) {
        obrazeKarty = assets.image`plus2yellow`
    } else if (numerKarty == 51) {
        obrazeKarty = assets.image`plus2red`
    } else if (numerKarty == 52) {
        obrazeKarty = assets.image`plus2blue`
    } else if (numerKarty == 53) {
        obrazeKarty = assets.image`plus2green`
    } else if (numerKarty == 54) {
        obrazeKarty = assets.image`plus4`
    } else {
        obrazeKarty = assets.image`myImage`
    }
    return obrazeKarty
}
let value3: Sprite = null
let mySprite: Sprite = null
let kartalosowana = 0
let obrazeKarty
obrazeKarty = null
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
