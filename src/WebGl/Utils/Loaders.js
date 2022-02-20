import * as THREE from 'three'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    DRACOLoader
} from 'three/examples/jsm/loaders/DRACOLoader.js'
import EventEmitter from "./EventEmitter.js";
import WebGl from '../WebGl.js';



export default class Ressources extends EventEmitter {
    constructor(sources) {
        super()

        // Options

        this.sources = sources

        // Setup
        this.webGl = new WebGl()

        // Adding the sources to the items object
        this.resources = this.webGl.resources.items
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setUpLoaders()
        this.startLoading()
    }

    setUpLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
        this.loaders.dracoloader = new DRACOLoader()
    }

    startLoading() {

        //Loading the ressources based on the type of the file from sources.js
        for (const source of this.sources) {
            if (source.type === 'gltfmodel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {

                        this.sourcesLoaded(source, file)
                    }
                )
            } else if (source.type === 'texture') {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {

                        this.sourcesLoaded(source, file)
                    }
                )
            } else if (source.type === 'cubeTexture') {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) => {

                        this.sourcesLoaded(source, file)

                    }
                )
            }
        }
    }

    sourcesLoaded(source, file) {

        // If the item that have to be load equal source loaded
        this.resources[source.name] = file

        // Increament the item loaded
        this.loaded++

        if (this.loaded === this.toLoad) {
            
            this.trigger('loaded')
        }
    }
}