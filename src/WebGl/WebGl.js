import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Loaders from './Utils/Loaders.js'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import World from './World/World.js'
import sources from './sources'
import Debug from './Utils/Debug.js'
import Resources from './Utils/Resources.js'
import { Scene } from 'three'



let instance = null


// This is the Application for the whole WebGl experience.
export default class App
{
    constructor(canvas)
    {

        if(instance)
        {
            return instance
        }

        instance = this


        // Global acces
        window.app = this

        // Parameter
        this.canvas = canvas

        // Methods to organize each setup ( parts ) of the WebGl experience.
        this.debug()
        this.sizes()
        this.time()
        this.scene()
        this.resources()
        this.loaders()
        this.camera()
        this.renderer()
        this.world()

        // Method to update the App on each frame
        this.update()

    }

    debug()
    {
        this.debug = new Debug()
    }



    sizes()
    {
        this.sizes = new Sizes()

        // Size resize event
        this.sizes.on('resize', () =>{

            this.resize()
        })
    }



    time()
    {
        this.time = new Time()
    }



    scene()
    {
        this.scene = new Scene()
    }



    resources()
    {
        this.resources = new Resources()
    }



    loaders()
    {
        this.loaders = new Loaders(sources)
    }



    camera()
    {
        this.camera = new Camera()
    }



    renderer()
    {
        this.renderer = new Renderer()
    }



    world()
    {
        this.world = new World
    }



    resize()
    {
        this.camera.resize()
        this.renderer.resize()

    }



    update()
    {
        this.camera.update()
        this.world.update()
        // Always add the renderer to be updated last, so everything that need to be update, will before the render.
        this.renderer.update()

        window.requestAnimationFrame(() =>{

            this.update()
        })
    }

}