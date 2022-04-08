input.onButtonPressed(Button.A, function () {
    row_select += -1
})
input.onButtonPressed(Button.B, function () {
    _delete += 1
})
input.onGesture(Gesture.Shake, function () {
    if (_delete == 1) {
        led.unplot(0, row_select)
        deleters += 1
    }
})
let deleters = 0
let _delete = 0
let row_select = 0
led.plot(0, 0)
led.plot(0, 1)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
led.plot(1, 0)
led.plot(1, 1)
led.plot(1, 2)
led.plot(1, 3)
led.plot(2, 0)
led.plot(2, 1)
led.plot(2, 2)
led.plot(3, 0)
led.plot(3, 1)
led.plot(4, 0)
row_select = 5
_delete = 0
