import * as THREE from 'three'
import App from './WebGl.js'

export default class Renderer {
    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas
        this.sizes = this.app.sizes
        this.scene = this.app.scene
        this.camera = this.app.camera

        this.setInstance()
        this.resize()


    }

    setInstance() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })

        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.CineonToneMapping
        this.renderer.toneMappingExposure = 1.75
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setClearColor('#211d20')
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)

    }

    resize()
    {
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
    }
    
    update()
    {
        this.renderer.render(this.scene, this.camera.instance)
    }
}