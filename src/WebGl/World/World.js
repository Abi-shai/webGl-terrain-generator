import WebGl from '../WebGl.js'
import Floor from './Floor.js'


// This file contains all the elements of the World, which means of the WebGL experience.
export default class World {
    constructor() {


        this.webGl = new WebGl()
        this.scene = this.webGl.scene
        this.loaders = this.webGl.loaders
        this.time = this.webGl.time

        // Create the all the components of the World after all ressources needed have been loaded
        this.loaders.on('loaded', () => {

            // If an environment have been applied to the scene, then the environment should be called last.
            // Done so, the environment color, materials's shadow will be applied on everything in the world.
            new Floor()

            console.log("The world hs been generated ");
        })
    }

    update()
    {
        
    }

}