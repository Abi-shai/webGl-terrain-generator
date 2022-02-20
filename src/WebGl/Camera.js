import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import WebGl from './WebGl.js'

export default class Camera {
    constructor()
    {
        this.webGl = new WebGl()
        this.sizes = this.webGl.sizes
        this.scene = this.webGl.scene
        this.canvas = this.webGl.canvas

        this.setInstance()
        this.setOrbitControl()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera
        (
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )

        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setOrbitControl()
    {
        this.orbitControl = new OrbitControls
        (
            this.instance,
            this.canvas
        )

        this.orbitControl.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()

    }

    update()
    {
        this.orbitControl.update()
    }
}