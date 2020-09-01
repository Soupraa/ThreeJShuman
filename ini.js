var scene;
var camera;
var renderer;
var controls;
var material;
var swimmer;
var head;
var body;
var Rshoulder;
var Lshoulder;
var Rleg;
var Lleg;

var directionalLight;
var keyPress = [];
var isWireFrame = false;

// //keydown?
// document.onkeypress = function (event) {
//     keyPress[event.keyCode] = true;
// }
function toggleWireframe() {
    var material;
    material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    material.side = THREE.DoubleSide;
    if (keysDown[77]) {
        scene.traverse(function (swimmer) {
            if (material.wireframe == true) {
                if (swimmer.material) {
                    swimmer.material.wireframe = isWireFrame;
                }
            }

        });

        scene.traverse(function (swimmer) {
            if (material.wireframe == false) {
                console.log("Off");
                if (swimmer.material) {
                    swimmer.material.wireframe = !isWireFrame;
                }
            }
        });


    }
    if (keysDown[76]) {
        if (material.wireframe == true) {
            scene.traverse(function (swimmer) {
                if (swimmer.material) {
                    swimmer.material = new THREE.MeshLambertMaterial({ color: 0xffff00, wireframe: true });
                    swimmer.material.side = THREE.DoubleSide;

                }
                if (material.wireframe == false) {
                    if (swimmer.material) {
                        swimmer.material = new THREE.MeshLambertMaterial({ color: 0xffff00, wireframe: false });
                        swimmer.material.side = THREE.DoubleSide;
                    }
                }

            });
        }
    }
    return material;
}

function initalise() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000);
    //camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    camera.position.z = 20;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x404040, 1);	// grey background 
    document.body.appendChild(renderer.domElement);

    swimmer = new THREE.Object3D();
    material = toggleWireframe();

    //head
    head = createHead(material);
    swimmer.add(head);
    //body
    body = createBody(material);
    swimmer.add(body);
    //R-arm
    Rshoulder = createArm(material, 'right');
    swimmer.add(Rshoulder);
    //L-arm
    Lshoulder = createArm(material, 'left');
    swimmer.add(Lshoulder);
    //R-leg
    Rleg = createLeg(material, 'right');
    swimmer.add(Rleg);
    //L-leg
    Lleg = createLeg(material, 'left');
    swimmer.add(Lleg);

    scene.add(swimmer);
    //lighting toggle

    var ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    var point = new THREE.PointLight(0xffffff, 1);
    point.position.set(0, 0, 1);
    scene.add(point);

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 5;
    animate();
}
initalise();
function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);

    toggleWireframe();
    animateSwimmer();
}



