//octahedron shape for limbs
function createOctahedron() {
    var vertices = [
        1, 0, 0, 0, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, -1, 0, 0
    ];
    var indices = [
        0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 1, 4, 5, 4, 3, 5, 3, 2, 5, 2, 1
    ];
    var geometry = new THREE.PolyhedronGeometry(vertices, indices, 2, 0);
    var octahedron = new THREE.Mesh(geometry, material);
    octahedron.scale.set(1, 0.6, 0.6);
    return octahedron;
}
//pyramid shape for hands
function createPyramid() {
    var vertices = [
        1, 0, 0, 0, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1
    ];
    var indices = [
        0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 1, 2, 3, 4
    ];
    var geometry = new THREE.PolyhedronGeometry(vertices, indices, 2, 0);
    var pyramid = new THREE.Mesh(geometry, material);
    pyramid.scale.set(0.5, 0.5, 0.5);
    return pyramid;
}

//create Head 
function createHead(material) {
    var neck = createJoint(3);
    neck.position.set(0, 5, 0);
    var head = createOctahedron(material);
    head.position.set(0, 2, 0);
    head.scale.set(1, 1, 1);
    neck.add(head);

    return neck;
}
//create body dechaedron
function createBody(material) {
    var vertices = [
        0, 1, 0,
        1, 0.25, 0,
        -1, 0.25, 0,
        0.7, -1, 0,
        -0.7, -1, 0,
        0, 0, 0.75,
        0, 0, -0.75,

    ];
    var indices = [
        0, 5, 1,
        1, 5, 3,
        3, 5, 4,
        4, 5, 2,
        2, 5, 0,
        0, 6, 1,
        1, 6, 3,
        3, 6, 4,
        4, 6, 2,
        2, 6, 0,
    ];
    var geometry = new THREE.PolyhedronGeometry(vertices, indices, 2.5, 0);
    var decahedron = new THREE.Mesh(geometry, material);

    var body = createJoint(1);
    decahedron.position.set(0, 0, 0);
    decahedron.scale.set(2, 2, 1.25);
    body.add(decahedron);
    return body;
}
var side;
function createArm(material, side) {
    //shoulder joint
    if (side == 'right') {
        var shoulder = createJoint(1);
        shoulder.position.set(4.85, 1.2, 0);
        //upperarm
        var upperarm = createOctahedron(material);
        upperarm.position.set(2, 0, 0);
        shoulder.add(upperarm);
        //elbow joint
        var elbow = createJoint(1);
        shoulder.add(elbow);
        elbow.position.set(4, 0, 0);
        shoulder.elbow = elbow;
        //lower arm
        var lowerarm = createOctahedron(material);
        lowerarm.position.set(1.65, 0, 0);
        lowerarm.scale.set(0.8, 0.55, 0.55);
        elbow.add(lowerarm);
        //wrist joint
        var wrist = createJoint(1);
        elbow.add(wrist);
        wrist.position.set(3.25, 0, 0);
        elbow.wrist = wrist;
        //hand
        var hand = createPyramid(material);
        hand.position.set(1, 0, 0);
        hand.rotation.set(0, 3.14159, 0);
        wrist.add(hand);
    }
    if (side == 'left') {
        // shoulder joint
        var shoulder = createJoint(1);
        shoulder.position.set(-4.85, 1.2, 0);
        //upperarm
        var upperarm = createOctahedron(material);
        upperarm.position.set(-2, 0, 0);
        shoulder.add(upperarm);
        //elbow joint
        var elbow = createJoint(1);
        shoulder.add(elbow);
        elbow.position.set(-4, 0, 0);
        shoulder.elbow = elbow;
        //lower arm
        var lowerarm = createOctahedron(material);
        lowerarm.position.set(-1.65, 0, 0);
        lowerarm.scale.set(-0.8, 0.55, 0.55);
        elbow.add(lowerarm);
        //wrist joint
        var wrist = createJoint(1);
        elbow.add(wrist);
        wrist.position.set(-3.25, 0, 0);
        elbow.wrist = wrist;
        //hand
        var hand = createPyramid(material);
        hand.position.set(-1, 0, 0);
        wrist.add(hand);
    }
    return shoulder;
}
function createLeg(material, side) {
    if(side == 'right'){
    //hip joint
    var hip = createJoint(1);
    hip.position.set(2.85, -4.1, 0);
    //upper leg
    var upperleg = createOctahedron(material);
    upperleg.position.set(0, -2, 0);
    upperleg.scale.set(0.6, 1, 0.6);
    hip.add(upperleg);
    //knee joint
    var knee = createJoint(1);
    hip.add(knee);
    knee.position.set(0, -4, 0);
    hip.knee = knee;
    //lower leg
    var lowerleg = createOctahedron(material);
    lowerleg.position.set(0, -2, 0);
    lowerleg.scale.set(0.6, 1, 0.6);
    knee.add(lowerleg);

    //ankle joint
    var ankle = createJoint(1);
    knee.add(ankle);
    ankle.position.set(0, -4, 0);
    knee.ankle = ankle;
    //foot
    var foot = createPyramid(material);
    foot.position.set(0, -1, 0);
    foot.rotation.set(0, 0, 1.5708);
    ankle.add(foot);
    }
    if(side == 'left'){
        //hip joint
    var hip = createJoint(1);
    hip.position.set(-2.85, -4.1, 0);
    //upper leg
    var upperleg = createOctahedron(material);
    upperleg.position.set(0, -2, 0);
    upperleg.scale.set(0.6, 1, 0.6);
    hip.add(upperleg);
    //knee joint
    var knee = createJoint(1);
    hip.add(knee);
    knee.position.set(0, -4, 0);
    hip.knee = knee;
    //lower leg
    var lowerleg = createOctahedron(material);
    lowerleg.position.set(0, -2, 0);
    lowerleg.scale.set(0.6, 1, 0.6);
    knee.add(lowerleg);

    //ankle joint
    var ankle = createJoint(1);
    knee.add(ankle);
    ankle.position.set(0, -4, 0);
    knee.ankle = ankle;
    //foot
    var foot = createPyramid(material);
    foot.position.set(0, -1, 0);
    foot.rotation.set(0, 0, 1.5708);
    ankle.add(foot);
    }
    return hip;
}

