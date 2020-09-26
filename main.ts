basic.showIcon(IconNames.Happy)
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, 0)
    basic.pause(100)
    DFRobotMaqueenPlus.servoRun(Servos.S1, 90)
    basic.pause(100)
})
