var keysDown = [];
var max = Math.PI / 2
var min = -Math.PI / 2
var elbowMax = Math.PI
var elbowMin = -Math.PI

var selectJoint = "";
var selectSide = "";
var materialtoggle = "off";
document.onkeyup = handleKeyUp;

document.onkeydown = function (event) {
    console.log(event.keyCode);
    keysDown[event.keyCode] = true;

    if (event.keyCode == 83) {
        selectJoint = 'shoulder';
    }
    if (event.keyCode == 69) {
        selectJoint = 'elbow';
    }
    if (event.keyCode == 87) {
        selectJoint = 'wrist';
    }
    if (event.keyCode == 72) {
        selectJoint = 'hip';
    }
    if (event.keyCode == 75) {
        selectJoint = 'knee';
    }
    if (event.keyCode == 65) {
        selectJoint = 'ankle';
    }
    if (event.keyCode == 78) {
        selectJoint = 'neck';
    }
    if (event.keyCode == 37) {
        selectSide = 'left';
    }
    if (event.keyCode == 39) {
        selectSide = 'right';
    }
}

function handleKeyUp(event) {
    keysDown[event.keyCode] = false;
}
function animateSwimmer() {
    //increase angles
    if (keysDown[38]) {
        if (selectJoint == 'neck') {
            head.rotation.y -= 1 * Math.PI / 80;
            if (head.rotation.y <= min) {
                head.rotation.y = min;
            }
        }
        if (selectJoint == 'shoulder') {
            if (selectSide == 'right') {
                Rshoulder.rotation.z += 1 * Math.PI / 140;
                if (Rshoulder.rotation.z >= max) {
                    Rshoulder.rotation.z = max;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.rotation.z -= 1 * Math.PI / 140;
                if (Lshoulder.rotation.z <= min) {
                    Lshoulder.rotation.z = min;
                }
            }
        }
        if (selectJoint == 'elbow') {
            if (selectSide == 'right') {
                Rshoulder.elbow.rotation.z += 1 * Math.PI / 120;
                if (Rshoulder.elbow.rotation.z >= elbowMax) {
                    Rshoulder.elbow.rotation.z = elbowMax;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.elbow.rotation.z -= 1 * Math.PI / 120;
                if (Lshoulder.elbow.rotation.z <= elbowMin) {
                    Lshoulder.elbow.rotation.z = elbowMin;
                }

            }
        }
        if (selectJoint == 'wrist') {
            if (selectSide == 'right') {
                Rshoulder.elbow.wrist.rotation.z += 1 * Math.PI / 90;
                if (Rshoulder.elbow.wrist.rotation.z >= max) {
                    Rshoulder.elbow.wrist.rotation.z = max;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.elbow.wrist.rotation.z -= 1 * Math.PI / 90;
                if (Lshoulder.elbow.wrist.rotation.z <= min) {
                    Lshoulder.elbow.wrist.rotation.z = min;
                }

            }
        }
        if (selectJoint == 'hip') {
            if (selectSide == 'right') {
                Rleg.rotation.x -= 1 * Math.PI / 140;
                if (Rleg.rotation.x <= min) {
                    Rleg.rotation.x = min;
                }
            }
            if (selectSide == 'left') {
                Lleg.rotation.x -= 1 * Math.PI / 140;
                if (Lleg.rotation.x <= min) {
                    Lleg.rotation.x = min;
                }
            }
        }
        if (selectJoint == 'knee') {
            if (selectSide == 'right') {
                Rleg.knee.rotation.x -= 1 * Math.PI / 140;
                if (Rleg.knee.rotation.x <= 0) {
                    Rleg.knee.rotation.x = 0;
                }
            }
            if (selectSide == 'left') {
                Lleg.knee.rotation.x -= 1 * Math.PI / 140;
                if (Lleg.knee.rotation.x <= 0) {
                    Lleg.knee.rotation.x = 0;
                }
            }
        }
        if (selectJoint == 'ankle') {
            if (selectSide == 'right') {
                Rleg.knee.ankle.rotation.x -= 1 * Math.PI / 140;
                if (Rleg.knee.ankle.rotation.x <= 0) {
                    Rleg.knee.ankle.rotation.x = 0;
                }
            }
            if (selectSide == 'left') {
                Lleg.knee.ankle.rotation.x -= 1 * Math.PI / 140;
                if (Lleg.knee.ankle.rotation.x <= 0) {
                    Lleg.knee.ankle.rotation.x = 0;
                }
            }
        }
    }


    //decrease angles
    if (keysDown[40]) {
        if (selectJoint == 'neck') {
            head.rotation.y += 1 * Math.PI / 80;
            if (head.rotation.y >= max) {
                head.rotation.y = max;
            }
        }
        if (selectJoint == 'shoulder') {
            if (selectSide == 'right') {
                Rshoulder.rotation.z -= 1 * Math.PI / 140;
                if (Rshoulder.rotation.z <= min) {
                    Rshoulder.rotation.z = min;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.rotation.z += 1 * Math.PI / 140;
                if (Lshoulder.rotation.z >= max) {
                    Lshoulder.rotation.z = max;
                }
            }
        }
        if (selectJoint == 'elbow') {
            if (selectSide == 'right') {
                Rshoulder.elbow.rotation.z -= 1 * Math.PI / 120;
                if (Rshoulder.elbow.rotation.z <= 0) {
                    Rshoulder.elbow.rotation.z = 0;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.elbow.rotation.z += 1 * Math.PI / 120;
                if (Lshoulder.elbow.rotation.z >= 0) {
                    Lshoulder.elbow.rotation.z = 0;
                }

            }
        }
        if (selectJoint == 'wrist') {
            if (selectSide == 'right') {
                Rshoulder.elbow.wrist.rotation.z -= 1 * Math.PI / 90;
                if (Rshoulder.elbow.wrist.rotation.z <= min) {
                    Rshoulder.elbow.wrist.rotation.z = min;
                }
            }
            if (selectSide == 'left') {
                Lshoulder.elbow.wrist.rotation.z += 1 * Math.PI / 90;
                if (Lshoulder.elbow.wrist.rotation.z >= max) {
                    Lshoulder.elbow.wrist.rotation.z = max;

                }
            }
        }

        if (selectJoint == 'hip') {
            if (selectSide == 'right') {
                Rleg.rotation.x += 1 * Math.PI / 140;
                if (Rleg.rotation.x >= max) {
                    Rleg.rotation.x = max;
                }
            }
            if (selectSide == 'left') {
                Lleg.rotation.x += 1 * Math.PI / 140;
                if (Lleg.rotation.x >= max) {
                    Lleg.rotation.x = max;
                }
            }
        }
        if (selectJoint == 'knee') {
            if (selectSide == 'right') {
                Rleg.knee.rotation.x += 1 * Math.PI / 140;
                if (Rleg.knee.rotation.x >= max) {
                    Rleg.knee.rotation.x = max;
                }
            }
            if (selectSide == 'left') {
                Lleg.knee.rotation.x += 1 * Math.PI / 140;
                if (Lleg.knee.rotation.x >= max) {
                    Lleg.knee.rotation.x = max;
                }
            }
        }
        if (selectJoint == 'ankle') {
            if (selectSide == 'right') {
                Rleg.knee.ankle.rotation.x += 1 * Math.PI / 140;
                if (Rleg.knee.ankle.rotation.x >= max) {
                    Rleg.knee.ankle.rotation.x = max;
                }
            }
            if (selectSide == 'left') {
                Lleg.knee.ankle.rotation.x += 1 * Math.PI / 140;
                if (Lleg.knee.ankle.rotation.x >= max) {
                    Lleg.knee.ankle.rotation.x = max;
                }
            }
        }
    }
}
