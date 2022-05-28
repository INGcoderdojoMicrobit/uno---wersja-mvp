let mySprite: Sprite = null
for (let index = 0; index <= 8; index++) {
    if (index % 4 == 0) {
        mySprite = sprites.create(img`
            ..777777777777..
            .77777777777777.
            7777777fff777777
            777777ffff777777
            77777fffff777777
            7777ffffff777777
            777fffffff777777
            77ffffffff777777
            77ffffffff777777
            77fff7ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            777777ffff777777
            77ffffffffffff77
            77ffffffffffff77
            77ffffffffffff77
            7777777777777777
            .77777777777777.
            ..777777777777..
            `, SpriteKind.Player)
    } else if (index % 4 == 1) {
        mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    } else if (index % 4 == 2) {
        mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    } else {
        mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        mySprite = sprites.create(assets.image`karta_plus4`, SpriteKind.Player)
    }
    mySprite.setPosition(8 + index * 18, 16)
}
