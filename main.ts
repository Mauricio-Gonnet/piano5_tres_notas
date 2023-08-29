basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
