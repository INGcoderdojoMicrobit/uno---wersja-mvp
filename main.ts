controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (wybierak.x == value.x) {
            value.y = 16
            wybierak.y = 16
            WybraneKarty[iterator] = 0
            IleWybranych += -1
        }
    }
})
function doWykonajRuch () {
    if (ktoryGracz == 1) {
        wyswreka = reka1
    } else if (ktoryGracz == 2) {
        wyswreka = reka2
    } else if (ktoryGracz == 3) {
        wyswreka = reka3
    } else if (ktoryGracz == 4) {
        wyswreka = reka4
    } else {
        wyswreka = talia
    }
    czyWybracKolor = 0
    czyZlaKarta = 0
    for (let index210 = 0; index210 <= WybraneKarty.length - 1; index210++) {
        if (WybraneKarty[index210] == 1) {
            if (doJakiKolorKarty(wyswreka[index210]) == doJakiKolorKarty(KartaNaKupce)) {
                if (wyswreka[index210] == 2 || (wyswreka[index210] == 3 || (wyswreka[index210] == 4 || wyswreka[index210] == 5))) {
                    kierunek = kierunek * -1
                } else if (doJakaWartoscKarty(wyswreka[index210]) == 10) {
                    IlePauzy += 1
                }
                KartaNaKupce = wyswreka.removeAt(index210)
            } else {
                if (doJakiKolorKarty(wyswreka[index210]) == 0) {
                    KartaNaKupce = wyswreka.removeAt(index210)
                    czyWybracKolor = 1
                }
                czyZlaKarta = 1
            }
        }
    }
    if (czyZlaKarta == 1) {
        for (let index211 = 0; index211 <= WybraneKarty.length - 1; index211++) {
            if (WybraneKarty[index211] == 1) {
                if (doJakaWartoscKarty(wyswreka[index211]) == doJakaWartoscKarty(KartaNaKupce)) {
                    if (wyswreka[index211] == 2 || (wyswreka[index211] == 3 || (wyswreka[index211] == 4 || wyswreka[index211] == 5))) {
                        kierunek = kierunek * -1
                    } else if (doJakaWartoscKarty(wyswreka[index211]) == 10) {
                        IlePauzy += 1
                    }
                    czyZlaKarta = 0
                    KartaNaKupce = wyswreka.removeAt(index211)
                } else {
                    czyZlaKarta = 1
                }
            }
        }
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Player)) {
        if (wybierak.x == value4.x) {
            value4.setVelocity(kupka1.x - wybierak.x, kupka1.y - wybierak.y)
            break;
        }
    }
    pause(1000)
    kupka1.setImage(doDajObrazek(KartaNaKupce))
    if (czyWybracKolor == 1) {
        doWybierzKolorKartyNaKupce()
    } else {
        doGraNastepny()
    }
}
function doGraNastepny () {
    doWyswietlReke(ktoryGracz)
    doWyswietlGracza(ktoryGracz)
    wybierak.y = 16
    IleWybranych = 0
    pause(1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.disintegrate, 500)
    pause(1000)
    doGraczPlusJeden()
    doPauzy()
    game.showLongText("Gra teraz " + ktoryGracz + " gracz", DialogLayout.Full)
    pause(500)
    doWyswietlReke(ktoryGracz)
    doWyswietlGracza(ktoryGracz)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function doWyswietlReke (numerGracza: number) {
    iterator = 0
    gdziewybierak = 0
    wybierak.setPosition(8 + gdziewybierak * 18, 16)
    if (numerGracza == 1) {
        wyswreka = reka1
    } else if (numerGracza == 2) {
        wyswreka = reka2
    } else if (numerGracza == 3) {
        wyswreka = reka3
    } else if (numerGracza == 4) {
        wyswreka = reka4
    } else {
        wyswreka = talia
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    koniecPetli = WybraneKarty.length - 1
    for (let index2 = 0; index2 <= koniecPetli; index2++) {
        WybraneKarty.pop()
    }
    for (let index22 = 0; index22 <= wyswreka.length - 1; index22++) {
        kartalosowana = wyswreka[index22]
        mySprite = sprites.create(assets.image`1blue`, SpriteKind.Player)
        mySprite.setImage(doDajObrazek(kartalosowana))
        mySprite.setPosition(8 + index22 * 18, 16)
        WybraneKarty.push(0)
    }
}
// 1 Żółty
// 2 Niebieski
// 3 Zielony
// 4 Czerwony
// 0 specjalny (zmiany koloru)
function doJakiKolorKarty (karta: number) {
    if (karta == 4) {
        return 1
    } else if (karta >= 14 && karta <= 20) {
        return 1
    } else if (karta == 37) {
        return 1
    } else if (karta == 41) {
        return 1
    } else if (karta == 45) {
        return 1
    } else if (karta == 49) {
        return 1
    } else if (karta == 50) {
        return 1
    } else if (karta == 56 || karta == 60) {
        return 1
    }
    if (karta >= 5 && karta <= 13) {
        return 2
    } else if (karta == 36) {
        return 2
    } else if (karta == 40) {
        return 2
    } else if (karta == 44) {
        return 2
    } else if (karta == 52) {
        return 2
    } else if (karta == 58 || karta == 62) {
        return 2
    }
    if (karta == 2) {
        return 3
    } else if (karta >= 28 && karta <= 35) {
        return 3
    } else if (karta == 39) {
        return 3
    } else if (karta == 43) {
        return 3
    } else if (karta == 48) {
        return 3
    } else if (karta == 53) {
        return 3
    } else if (karta == 55 || karta == 59) {
        return 3
    }
    if (karta == 3) {
        return 4
    } else if (karta >= 21 && karta <= 27) {
        return 4
    } else if (karta == 38) {
        return 4
    } else if (karta == 42) {
        return 4
    } else if (karta == 46) {
        return 4
    } else if (karta == 47) {
        return 4
    } else if (karta == 51) {
        return 4
    } else if (karta == 57 || karta == 61) {
        return 4
    }
    return 0
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (czyWybracKolor == 0) {
        if (ktoryGracz == 1) {
            wyswreka = reka1
        } else if (ktoryGracz == 2) {
            wyswreka = reka2
        } else if (ktoryGracz == 3) {
            wyswreka = reka3
        } else if (ktoryGracz == 4) {
            wyswreka = reka4
        } else {
            wyswreka = talia
        }
        if (gdziewybierak > 0) {
            gdziewybierak += -1
            iterator += -1
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
            if (value2.x < 0 && gdziewybierak == 0) {
                iterator += -1
                doMoveRight()
            }
        }
        if (WybraneKarty[iterator] == 0) {
            wybierak.setPosition(8 + gdziewybierak * 18, 16)
        } else {
            wybierak.setPosition(8 + gdziewybierak * 18, 32)
        }
    } else {
        if (KartaNaKupce == 0) {
            KartaNaKupce = 58
        } else if (KartaNaKupce == 55) {
            KartaNaKupce = 58
        } else if (KartaNaKupce == 56) {
            KartaNaKupce = 55
        } else if (KartaNaKupce == 57) {
            KartaNaKupce = 56
        } else if (KartaNaKupce == 58) {
            KartaNaKupce = 57
        } else if (KartaNaKupce == 1) {
            KartaNaKupce = 62
        } else if (KartaNaKupce == 59) {
            KartaNaKupce = 62
        } else if (KartaNaKupce == 60) {
            KartaNaKupce = 59
        } else if (KartaNaKupce == 61) {
            KartaNaKupce = 60
        } else if (KartaNaKupce == 62) {
            KartaNaKupce = 61
        }
        kupka1.setImage(doDajObrazek(KartaNaKupce))
    }
})
function doWybierzKolorKartyNaKupce () {
    doWyswietlReke(ktoryGracz)
    game.showLongText("Wybierz kolor strzałkami lewo-prawo i potwierdź B", DialogLayout.Full)
}
function doPauzy () {
    komunikat = "to zły komunikat jest.. gra teraz gracz: " + ktoryGracz + "nazbierane pauzy:" + IlePauzy + "to jest błąd"
    KoniecPauzy = true
    while (KoniecPauzy) {
        if (ktoryGracz == 1) {
            if (IlePauzy1 > 0) {
                komunikat = "Pauzuje teraz " + ktoryGracz + " gracz przez " + IlePauzy1 + " kolejek"
                IlePauzy1 += -1
                doGraczPlusJeden()
            } else {
                KoniecPauzy = false
            }
        } else if (ktoryGracz == 2) {
            if (IlePauzy2 > 0) {
                komunikat = "Pauzuje teraz " + ktoryGracz + " gracz przez " + IlePauzy2 + " kolejek"
                IlePauzy2 += -1
                doGraczPlusJeden()
            } else {
                KoniecPauzy = false
            }
        } else if (ktoryGracz == 3) {
            if (IlePauzy3 > 0) {
                komunikat = "Pauzuje teraz " + ktoryGracz + " gracz przez " + IlePauzy3 + " kolejek"
                IlePauzy3 += -1
                doGraczPlusJeden()
            } else {
                KoniecPauzy = false
            }
        } else if (ktoryGracz == 4) {
            if (IlePauzy4 > 0) {
                komunikat = "Pauzuje teraz " + ktoryGracz + " gracz przez " + IlePauzy4 + " kolejek"
                IlePauzy4 += -1
                doGraczPlusJeden()
            } else {
                KoniecPauzy = false
            }
        }
        doWyswietlReke(ktoryGracz)
        doWyswietlGracza(ktoryGracz)
        game.showLongText(komunikat, DialogLayout.Full)
    }
}
function doInicjujTalie () {
    for (let index3 = 0; index3 <= talia.length - 1; index3++) {
        talia.pop()
    }
    for (let index = 0; index < 4; index++) {
        talia.unshift(0)
    }
    for (let index = 0; index < 4; index++) {
        talia.unshift(1)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(2)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(3)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(4)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(5)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(6)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(48)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(49)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(50)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(47)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(51)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(52)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(53)
    }
    for (let index = 0; index < 1; index++) {
        talia.unshift(43)
    }
    for (let index = 0; index < 1; index++) {
        talia.unshift(44)
    }
    for (let index = 0; index < 1; index++) {
        talia.unshift(45)
    }
    for (let index = 0; index < 1; index++) {
        talia.unshift(46)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(7)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(8)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(9)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(10)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(11)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(12)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(13)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(14)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(15)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(16)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(17)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(18)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(19)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(20)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(21)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(22)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(23)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(24)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(25)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(26)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(27)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(28)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(29)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(30)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(31)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(32)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(33)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(34)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(35)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(36)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(37)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(38)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(39)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(40)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(41)
    }
    for (let index = 0; index < 2; index++) {
        talia.unshift(42)
    }
}
function doGraczPlusJeden () {
    ktoryGracz += kierunek
    if (ktoryGracz > IluGraczy) {
        ktoryGracz = 1
    } else if (ktoryGracz < 1) {
        ktoryGracz = IluGraczy
    }
}
function doCzyRuchMozliwy (PorKarta: number) {
    if (ktoryGracz == 1) {
        wyswreka = reka1
    } else if (ktoryGracz == 2) {
        wyswreka = reka2
    } else if (ktoryGracz == 3) {
        wyswreka = reka3
    } else if (ktoryGracz == 4) {
        wyswreka = reka4
    } else {
        wyswreka = talia
    }
    czyZlaKarta = 0
    for (let index210 = 0; index210 <= WybraneKarty.length - 1; index210++) {
        if (WybraneKarty[index210] == 1) {
            if (doJakiKolorKarty(wyswreka[index210]) != doJakiKolorKarty(KartaNaKupce)) {
                if (doJakiKolorKarty(wyswreka[index210]) != 0) {
                    czyZlaKarta = 1
                } else {
                    czyZlaKarta = 0
                }
            } else if (doJakaWartoscKarty(wyswreka[index210]) != 10 && doJakaWartoscKarty(PorKarta) == 10) {
                czyZlaKarta = 1
            }
        }
    }
    if (czyZlaKarta == 1) {
        for (let index211 = 0; index211 <= WybraneKarty.length - 1; index211++) {
            if (WybraneKarty[index211] == 1) {
                if (doJakaWartoscKarty(wyswreka[index211]) == doJakaWartoscKarty(KartaNaKupce)) {
                    czyZlaKarta = 0
                }
            }
        }
    }
    return czyZlaKarta
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ktoryGracz == 1) {
        wyswreka = reka1
    } else if (ktoryGracz == 2) {
        wyswreka = reka2
    } else if (ktoryGracz == 3) {
        wyswreka = reka3
    } else if (ktoryGracz == 4) {
        wyswreka = reka4
    } else {
        wyswreka = talia
    }
    if (czyWybracKolor == 0) {
        if (gdziewybierak < 8) {
            if (gdziewybierak < wyswreka.length - 1) {
                gdziewybierak += 1
                iterator += 1
                wybierak.setPosition(8 + gdziewybierak * 18, 16)
            }
        }
        for (let value22 of sprites.allOfKind(SpriteKind.Player)) {
            if (value22.x > scene.screenWidth() && gdziewybierak == 8) {
                iterator += 1
                for (let value3 of sprites.allOfKind(SpriteKind.Player)) {
                    for (let index59 = 0; index59 <= 5; index59++) {
                        value3.x += 3 * -1
                        if (value3.x >= 0 && value3.x <= scene.screenWidth()) {
                            pause(10)
                        }
                    }
                }
            }
        }
        if (WybraneKarty[iterator] == 0) {
            wybierak.setPosition(8 + gdziewybierak * 18, 16)
        } else {
            wybierak.setPosition(8 + gdziewybierak * 18, 32)
        }
    } else {
        if (KartaNaKupce == 0) {
            KartaNaKupce = 55
        } else if (KartaNaKupce == 55) {
            KartaNaKupce = 56
        } else if (KartaNaKupce == 56) {
            KartaNaKupce = 57
        } else if (KartaNaKupce == 57) {
            KartaNaKupce = 58
        } else if (KartaNaKupce == 58) {
            KartaNaKupce = 55
        } else if (KartaNaKupce == 1) {
            KartaNaKupce = 59
        } else if (KartaNaKupce == 59) {
            KartaNaKupce = 60
        } else if (KartaNaKupce == 60) {
            KartaNaKupce = 61
        } else if (KartaNaKupce == 61) {
            KartaNaKupce = 62
        } else if (KartaNaKupce == 62) {
            KartaNaKupce = 59
        }
        kupka1.setImage(doDajObrazek(KartaNaKupce))
    }
})
function doWyswietlGracza (numerGracza: number) {
    if (numerGracza == 1) {
        gracz1.setImage(assets.image`cat1`)
        textGracz1.setText("Player1")
        if (IlePauzy1 > 0) {
            textSprite2.setText("Pauzujesz: ")
            textSprite3.setText(convertToText(IlePauzy1))
        }
    } else if (numerGracza == 2) {
        gracz1.setImage(assets.image`forestMonkey0`)
        textGracz1.setText("Player2")
        if (IlePauzy2 > 0) {
            textSprite2.setText("Pauzujesz: ")
            textSprite3.setText(convertToText(IlePauzy2))
        }
    } else if (numerGracza == 3) {
        gracz1.setImage(assets.image`forestSnake0`)
        textGracz1.setText("Player3")
        if (IlePauzy3 > 0) {
            textSprite2.setText("Pauzujesz: ")
            textSprite3.setText(convertToText(IlePauzy3))
        }
    } else if (numerGracza == 4) {
        gracz1.setImage(assets.image`duck5`)
        textGracz1.setText("Player4")
        if (IlePauzy4 > 0) {
            textSprite2.setText("Pauzujesz: ")
            textSprite3.setText(convertToText(IlePauzy4))
        }
    } else {
        gracz1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        textGracz1.setText("")
    }
    if (IlePauzy > 0) {
        textSprite2.setText("Pauzy: ")
        textSprite3.setText(convertToText(IlePauzy))
    }
}
// 10 - POSTÓJ
// 11 - WEŹ 2
// 12 - ZMIANA KIERUNKU
// 13 - WYBIERZ KOLOR
// 14 - WYBIERZ KOLOR + WEŹ 4
function doJakaWartoscKarty (karta: number) {
    if (karta == 7 || (karta == 14 || (karta == 21 || karta == 28))) {
        return 1
    }
    if (karta == 8 || (karta == 15 || (karta == 22 || karta == 29))) {
        return 2
    }
    if (karta == 9 || (karta == 16 || (karta == 23 || karta == 30))) {
        return 3
    }
    if (karta == 10 || (karta == 17 || (karta == 24 || karta == 31))) {
        return 4
    }
    if (karta == 11 || (karta == 18 || (karta == 25 || karta == 32))) {
        return 5
    }
    if (karta == 12 || (karta == 19 || (karta == 26 || karta == 33))) {
        return 6
    }
    if (karta == 13 || (karta == 20 || (karta == 27 || karta == 34))) {
        return 7
    }
    if (karta == 35 || (karta == 36 || (karta == 37 || karta == 38))) {
        return 8
    }
    if (karta == 39 || (karta == 40 || (karta == 41 || karta == 42))) {
        return 9
    }
    if (karta == 43 || (karta == 44 || (karta == 45 || karta == 46))) {
        return 0
    }
    if (karta == 47 || (karta == 48 || (karta == 49 || karta == 6))) {
        return 10
    }
    if (karta == 50 || (karta == 51 || (karta == 52 || karta == 53))) {
        return 11
    }
    if (karta == 2 || (karta == 3 || (karta == 4 || karta == 5))) {
        return 12
    }
    if (karta == 1 || (karta == 59 || (karta == 60 || (karta == 61 || karta == 62)))) {
        return 13
    }
    if (karta == 0 || (karta == 55 || (karta == 56 || (karta == 57 || karta == 58)))) {
        return 14
    }
    return 2037
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (IleWybranych == 0) {
        for (let value4 of sprites.allOfKind(SpriteKind.Player)) {
            if (wybierak.x == value4.x) {
                value4.y = 32
                wybierak.y = 32
                WybraneKarty[iterator] = 1
                IleWybranych += 1
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (czyWybracKolor == 0) {
        if (IleWybranych > 0) {
            if (IlePauzy > 0) {
                czyZlaKarta = doCzyRuchMozliwy(KartaNaKupce)
            } else {
                czyZlaKarta = doCzyRuchMozliwy(0)
            }
            if (czyZlaKarta == 1) {
                game.showLongText("Nie można tak zagrać", DialogLayout.Full)
            } else {
                doWykonajRuch()
            }
        } else {
            if (IlePauzy > 0) {
                if (ktoryGracz == 1) {
                    IlePauzy1 += IlePauzy
                } else if (ktoryGracz == 2) {
                    IlePauzy2 += IlePauzy
                } else if (ktoryGracz == 3) {
                    IlePauzy3 += IlePauzy
                } else if (ktoryGracz == 4) {
                    IlePauzy4 += IlePauzy
                }
                IlePauzy = 0
            } else {
                if (game.ask("    Czy dobrać kartę?")) {
                    doDobierzKarte()
                    doWyswietlReke(ktoryGracz)
                    if (IleWybranych == 0) {
                        for (let value4 of sprites.allOfKind(SpriteKind.Player)) {
                            if (wybierak.x == value4.x) {
                                value4.startEffect(effects.bubbles, 1000)
                            }
                        }
                    }
                    pause(1000)
                    czyZlaKarta = doCzyRuchMozliwy(1)
                    if (czyZlaKarta == 0) {
                        if (game.ask("    Czy zagrać kartą?")) {
                            doWykonajRuch()
                        }
                    } else {
                        game.showLongText("Nie możesz zagrać kartą...", DialogLayout.Full)
                        doGraNastepny()
                    }
                }
            }
        }
    } else {
        czyWybracKolor = 0
        doGraNastepny()
    }
})
function doRozdajKarty (ileGraczy: number) {
    for (let index572 = 0; index572 <= reka1.length - 1; index572++) {
        reka1.pop()
    }
    for (let index582 = 0; index582 <= reka2.length - 1; index582++) {
        reka2.pop()
    }
    for (let index592 = 0; index592 <= reka3.length - 1; index592++) {
        reka3.pop()
    }
    for (let index60 = 0; index60 <= reka4.length - 1; index60++) {
        reka4.pop()
    }
    doInicjujTalie()
    for (let index61 = 0; index61 <= 8; index61++) {
        reka1.unshift(talia.removeAt(randint(0, talia.length - 1)))
        reka2.unshift(talia.removeAt(randint(0, talia.length - 1)))
        if (ileGraczy > 2) {
            reka3.unshift(talia.removeAt(randint(0, talia.length - 1)))
        }
        if (ileGraczy > 3) {
            reka4.unshift(talia.removeAt(randint(0, talia.length - 1)))
        }
    }
    reka1.unshift(47)
    reka1.unshift(48)
    reka1.unshift(49)
    reka1.unshift(6)
    reka2.unshift(47)
    reka2.unshift(48)
    reka2.unshift(49)
    reka2.unshift(6)
}
function doMoveRight () {
    for (let index310 = 0; index310 <= sprites.allOfKind(SpriteKind.Player).length - 1; index310++) {
        value32 = sprites.allOfKind(SpriteKind.Player)[sprites.allOfKind(SpriteKind.Player).length - 1 - index310]
        for (let index410 = 0; index410 <= 5; index410++) {
            value32.x += 3 * 1
            if (value32.x >= 0 && value32.x <= scene.screenWidth()) {
                pause(10)
            }
        }
    }
}
function doDajObrazek (numerKarty: number) {
    if (numerKarty == 0) {
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
    } else if (numerKarty == 55) {
        obrazeKarty = assets.image`plus4zielona`
    } else if (numerKarty == 56) {
        obrazeKarty = assets.image`plus4zolta`
    } else if (numerKarty == 57) {
        obrazeKarty = assets.image`plus4czerwona`
    } else if (numerKarty == 58) {
        obrazeKarty = assets.image`plus4niebieska`
    } else if (numerKarty == 59) {
        obrazeKarty = assets.image`zmiana_koloru_green`
    } else if (numerKarty == 60) {
        obrazeKarty = assets.image`zmiana_koloru_yellow`
    } else if (numerKarty == 61) {
        obrazeKarty = assets.image`zmiana_koloru_red`
    } else if (numerKarty == 62) {
        obrazeKarty = assets.image`zmiana_koloru_blue`
    } else {
        obrazeKarty = assets.image`myImage`
        game.splash(numerKarty)
    }
    return obrazeKarty
}
function doDobierzKarte () {
    if (ktoryGracz == 1) {
        reka1.unshift(talia.removeAt(randint(0, talia.length - 1)))
    } else if (ktoryGracz == 2) {
        reka2.unshift(talia.removeAt(randint(0, talia.length - 1)))
    } else if (ktoryGracz == 3) {
        reka3.unshift(talia.removeAt(randint(0, talia.length - 1)))
    } else if (ktoryGracz == 4) {
        reka4.unshift(talia.removeAt(randint(0, talia.length - 1)))
    }
    KartaDobrana = 1
}
let KartaDobrana = 0
let obrazeKarty: Image = null
let value32: Sprite = null
let KoniecPauzy = false
let komunikat = ""
let mySprite: Sprite = null
let kartalosowana = 0
let koniecPetli = 0
let czyZlaKarta = 0
let reka4: number[] = []
let reka3: number[] = []
let reka2: number[] = []
let reka1: number[] = []
let wyswreka: number[] = []
let czyWybracKolor = 0
let IluGraczy = 0
let IlePauzy4 = 0
let IlePauzy3 = 0
let IlePauzy2 = 0
let IlePauzy1 = 0
let IlePauzy = 0
let kierunek = 0
let ktoryGracz = 0
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let kupka1: Sprite = null
let KartaNaKupce = 0
let textGracz1: TextSprite = null
let gracz1: Sprite = null
let wybierak: Sprite = null
let IleWybranych = 0
let gdziewybierak = 0
let iterator = 0
let WybraneKarty: number[] = []
let talia: number[] = []
talia = []
WybraneKarty = []
iterator = 0
gdziewybierak = 0
IleWybranych = 0
wybierak = sprites.create(assets.image`selector_off`, SpriteKind.Enemy)
wybierak.z = 1
wybierak.setPosition(8 + gdziewybierak * 18, 16)
animation.runImageAnimation(
wybierak,
assets.animation`selector`,
50,
true
)
gracz1 = sprites.create(assets.image`cat1`, SpriteKind.Enemy)
gracz1.setPosition(9, 110)
textGracz1 = textsprite.create("Player1")
textGracz1.setPosition(20, 90)
KartaNaKupce = 31
kupka1 = sprites.create(assets.image`4green`, SpriteKind.Enemy)
kupka1.setPosition(77, 78)
textSprite2 = textsprite.create("dobierz:")
textSprite2.setPosition(135, 96)
textSprite3 = textsprite.create("6")
textSprite3.setPosition(145, 106)
ktoryGracz = 1
kierunek = 1
IlePauzy = 0
IlePauzy1 = 0
IlePauzy2 = 0
IlePauzy3 = 0
IlePauzy4 = 0
IluGraczy = 4
doRozdajKarty(4)
doWyswietlReke(ktoryGracz)
doWyswietlGracza(ktoryGracz)
game.setDialogFrame(assets.image`bialetlo`)
czyWybracKolor = 0
