const scene = new THREE.Scene()

let curColor = 0;
let colors = ['red', 'green', 'blue']

let box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: colors[curColor]})
)

scene.add(box)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(
    75, sizes.width / sizes.height, 1, 100
)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
    {canvas: document.querySelector('.webgl')}
)

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

window.addEventListener("click", function() {
    scene.remove(box)
    if(curColor === colors.length - 1) {
        curColor = 0
    } else {
        curColor += 1;
    }
    box = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({color: colors[curColor]})
    )
    box.rotation.y = clock.getElapsedTime() * 2
    scene.add(box)
    renderer.render(scene, camera)
})

const clock = new THREE.Clock()
const tick = () => {
    box.rotation.y = clock.getElapsedTime() * 2
    
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
