input.onPinPressed(TouchPin.P0, function () {
    row_select += -1
})
input.onButtonPressed(Button.A, function () {
    row_select += 1
})
input.onButtonPressed(Button.B, function () {
    _delete += 1
})
input.onPinPressed(TouchPin.P1, function () {
    _delete += -1
    if (_delete == 1) {
        if (row_select == 1) {
            led.toggle(0, 4)
            basic.pause(300)
            led.toggle(0, 4)
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.toggle(0, 3)
                basic.pause(300)
                led.toggle(0, 3)
            } else {
                led.toggle(1, 3)
                basic.pause(300)
                led.toggle(1, 3)
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.toggle(0, 2)
                basic.pause(300)
                led.toggle(0, 2)
            } else if (row_3_deleted == 1) {
                led.toggle(1, 2)
                basic.pause(300)
                led.toggle(1, 2)
            } else {
                led.toggle(2, 2)
                basic.pause(300)
                led.toggle(2, 2)
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.toggle(0, 1)
                basic.pause(300)
                led.toggle(0, 1)
            } else if (row_4_deleted == 2) {
                led.toggle(1, 1)
                basic.pause(300)
                led.toggle(1, 1)
            } else if (row_4_deleted == 1) {
                led.toggle(2, 1)
                basic.pause(300)
                led.toggle(2, 1)
            } else {
                led.toggle(3, 1)
                basic.pause(300)
                led.toggle(3, 1)
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.toggle(0, 0)
                basic.pause(300)
                led.toggle(0, 0)
            } else if (row_5_deleted == 3) {
                led.toggle(1, 0)
                basic.pause(300)
                led.toggle(1, 0)
            } else if (row_5_deleted == 2) {
                led.toggle(2, 0)
                basic.pause(300)
                led.toggle(2, 0)
            } else if (row_5_deleted == 1) {
                led.toggle(3, 0)
                basic.pause(300)
                led.toggle(3, 0)
            } else {
                led.toggle(4, 0)
                basic.pause(300)
                led.toggle(4, 0)
            }
        }
    } else if (_delete == 2) {
        if (row_select == 1) {
            led.toggle(0, 0)
            basic.pause(300)
            led.toggle(0, 0)
        }
        if (row_select == 2) {
            led.toggle(0, 3)
            led.toggle(1, 3)
            basic.pause(300)
            led.toggle(0, 3)
            led.toggle(1, 3)
        }
        if (row_select == 3) {
            if (row_3_deleted == 0) {
                led.unplot(2, 2)
                led.unplot(1, 2)
                basic.pause(300)
                led.unplot(2, 2)
                led.unplot(1, 2)
            } else if (row_3_deleted == 1) {
                led.unplot(1, 2)
                led.unplot(0, 2)
                basic.pause(300)
                led.unplot(1, 2)
                led.unplot(0, 2)
            } else {
                led.unplot(0, 2)
                basic.pause(300)
                led.unplot(0, 2)
            }
        }
        if (row_select == 4) {
        	
        }
        if (row_select == 5) {
        	
        }
    } else if (_delete == 3) {
        if (row_select == 1) {
        	
        }
        if (row_select == 2) {
        	
        }
        if (row_select == 3) {
        	
        }
        if (row_select == 4) {
        	
        }
        if (row_select == 5) {
        	
        }
    } else if (_delete == 4) {
        if (row_select == 1) {
        	
        }
        if (row_select == 2) {
        	
        }
        if (row_select == 3) {
        	
        }
        if (row_select == 4) {
        	
        }
        if (row_select == 5) {
        	
        }
    } else {
        if (row_select == 1) {
        	
        }
        if (row_select == 2) {
        	
        }
        if (row_select == 3) {
        	
        }
        if (row_select == 4) {
        	
        }
        if (row_select == 5) {
        	
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (_delete == 1) {
        if (row_select == 1) {
            led.unplot(0, 4)
            row_1_deleted += 1
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.unplot(0, 3)
                row_2_deleted += 1
            }
            if (row_2_deleted == 0) {
                led.unplot(1, 3)
                row_2_deleted += 1
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.unplot(0, 2)
                row_3_deleted += 1
            }
            if (row_3_deleted == 1) {
                led.unplot(1, 2)
                row_3_deleted += 1
            }
            if (row_3_deleted == 0) {
                led.unplot(2, 2)
                row_3_deleted += 1
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.unplot(0, 1)
                row_4_deleted += 1
            }
            if (row_4_deleted == 2) {
                led.unplot(1, 1)
                row_4_deleted += 1
            }
            if (row_4_deleted == 1) {
                led.unplot(2, 1)
                row_4_deleted += 1
            }
            if (row_4_deleted == 0) {
                led.unplot(3, 1)
                row_4_deleted += 1
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.unplot(0, 0)
                row_5_deleted += 1
            }
            if (row_5_deleted == 3) {
                led.unplot(1, 0)
                row_5_deleted += 1
            }
            if (row_5_deleted == 2) {
                led.unplot(2, 0)
                row_5_deleted += 1
            }
            if (row_5_deleted == 1) {
                led.unplot(3, 0)
                row_5_deleted += 1
            }
            if (row_5_deleted == 0) {
                led.unplot(4, 0)
                row_5_deleted += 1
            }
        }
    }
    if (_delete == 2) {
        if (row_select == 1) {
            led.unplot(0, 4)
            row_1_deleted += 1
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.unplot(0, 3)
                row_2_deleted += 2
            }
            if (row_2_deleted == 0) {
                led.unplot(1, 3)
                led.unplot(0, 3)
                row_2_deleted += 2
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.unplot(0, 2)
                row_3_deleted += 2
            }
            if (row_3_deleted == 1) {
                led.unplot(1, 2)
                led.unplot(0, 2)
                row_3_deleted += 2
            }
            if (row_3_deleted == 0) {
                led.unplot(2, 2)
                led.unplot(1, 2)
                row_3_deleted += 2
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.unplot(0, 1)
                row_4_deleted += 2
            }
            if (row_4_deleted == 2) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                row_4_deleted += 2
            }
            if (row_4_deleted == 1) {
                led.unplot(1, 1)
                led.unplot(2, 1)
                row_4_deleted += 2
            }
            if (row_4_deleted == 0) {
                led.unplot(2, 1)
                led.unplot(3, 1)
                row_4_deleted += 2
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.unplot(0, 0)
                row_5_deleted += 2
            }
            if (row_5_deleted == 3) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                row_5_deleted += 2
            }
            if (row_5_deleted == 2) {
                led.unplot(1, 0)
                led.unplot(2, 0)
                row_5_deleted += 2
            }
            if (row_5_deleted == 1) {
                led.unplot(2, 0)
                led.unplot(3, 0)
                row_5_deleted += 2
            }
            if (row_5_deleted == 0) {
                led.unplot(3, 0)
                led.unplot(4, 0)
                row_5_deleted += 2
            }
        }
    }
    if (_delete == 3) {
        if (row_select == 1) {
            led.unplot(0, 4)
            row_1_deleted += 1
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.unplot(0, 3)
                row_2_deleted += 3
            }
            if (row_2_deleted == 0) {
                led.unplot(0, 3)
                led.unplot(1, 3)
                row_2_deleted += 3
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.unplot(0, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 1) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 0) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                led.unplot(2, 2)
                row_3_deleted += 3
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.unplot(0, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 2) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 1) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 0) {
                led.unplot(1, 1)
                led.unplot(2, 1)
                led.unplot(3, 1)
                row_4_deleted += 3
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.unplot(0, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 3) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 2) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 1) {
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 0) {
                led.unplot(2, 0)
                led.unplot(3, 0)
                led.unplot(4, 0)
                row_5_deleted += 3
            }
        }
    }
    if (_delete == 4) {
        if (row_select == 1) {
            led.unplot(0, 4)
            row_1_deleted += 1
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.unplot(0, 3)
                row_2_deleted += 3
            }
            if (row_2_deleted == 0) {
                led.unplot(0, 3)
                led.unplot(1, 3)
                row_2_deleted += 3
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.unplot(0, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 1) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 0) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                led.unplot(2, 2)
                row_3_deleted += 3
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.unplot(0, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 2) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 1) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 0) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                led.unplot(3, 1)
                row_4_deleted += 4
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.unplot(0, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 3) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 2) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 1) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                row_5_deleted += 4
            }
            if (row_5_deleted == 0) {
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                led.unplot(4, 0)
                row_5_deleted += 4
            }
        }
    }
    if (_delete == 4) {
        if (row_select == 1) {
            led.unplot(0, 4)
            row_1_deleted += 1
        }
        if (row_select == 2) {
            if (row_2_deleted == 1) {
                led.unplot(0, 3)
                row_2_deleted += 3
            }
            if (row_2_deleted == 0) {
                led.unplot(0, 3)
                led.unplot(1, 3)
                row_2_deleted += 3
            }
        }
        if (row_select == 3) {
            if (row_3_deleted == 2) {
                led.unplot(0, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 1) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                row_3_deleted += 3
            }
            if (row_3_deleted == 0) {
                led.unplot(0, 2)
                led.unplot(1, 2)
                led.unplot(2, 2)
                row_3_deleted += 3
            }
        }
        if (row_select == 4) {
            if (row_4_deleted == 3) {
                led.unplot(0, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 2) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 1) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                row_4_deleted += 3
            }
            if (row_4_deleted == 0) {
                led.unplot(0, 1)
                led.unplot(1, 1)
                led.unplot(2, 1)
                led.unplot(3, 1)
                row_4_deleted += 4
            }
        }
        if (row_select == 5) {
            if (row_5_deleted == 4) {
                led.unplot(0, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 3) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 2) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                row_5_deleted += 3
            }
            if (row_5_deleted == 1) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                row_5_deleted += 4
            }
            if (row_5_deleted == 0) {
                led.unplot(0, 0)
                led.unplot(1, 0)
                led.unplot(2, 0)
                led.unplot(3, 0)
                led.unplot(4, 0)
                row_5_deleted += 4
            }
        }
    }
    if (_delete == 5) {
        if (row_select == 1) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(index, 5 - row_select)
            }
            row_1_deleted += 1
        }
        if (row_select == 2) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(index, 5 - row_select)
            }
            row_2_deleted += 2
        }
        if (row_select == 3) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(index, 5 - row_select)
            }
            row_3_deleted += 3
        }
        if (row_select == 4) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(index, 5 - row_select)
            }
            row_4_deleted += 4
        }
        if (row_select == 5) {
            for (let index = 0; index <= 4; index++) {
                led.unplot(index, 5 - row_select)
            }
            row_5_deleted += 5
        }
    }
    turns += 1
    row_select = 0
    _delete = 0
})
let turns = 0
let row_1_deleted = 0
let row_5_deleted = 0
let row_4_deleted = 0
let row_3_deleted = 0
let row_2_deleted = 0
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
row_select = 0
_delete = 0
row_2_deleted = 0
row_3_deleted = 0
row_4_deleted = 0
row_5_deleted = 0
basic.forever(function () {
    if (row_2_deleted > 1 && (row_4_deleted > 3 && (row_5_deleted > 4 && row_3_deleted > 2)) && row_1_deleted > 0) {
        if (turns % 2 == 1) {
            basic.showString("P1 wins!")
        } else {
            basic.showString("P2 wins!")
        }
    }
})
