let mySprite: Sprite = null
let kartalosowana = 0
for (let index = 0; index <= 8; index++) {
    kartalosowana = randint(0, 35)
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
    } else if (false) {
    	
    } else {
    	
    }
    mySprite.setPosition(8 + index * 18, 16)
}
