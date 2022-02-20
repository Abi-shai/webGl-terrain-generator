import * as THREE from 'three'
import WebGl from '../WebGl'
import TerrainVertexShader from '../Shaders/Terrain/vertex.glsl'
import TerrainFragmentShader from '../Shaders/Terrain/fragment.glsl'


export default class Floor {
    constructor() {
        this.webGl = new WebGl()
        this.scene = this.webGl.scene
        this.renderer = this.webGl.renderer

        this.setFloor()
    }

    setFloor() {
        this.floor = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.ShaderMaterial(
                {
                    vertexShader: TerrainVertexShader,
                    fragmentShader: TerrainFragmentShader,	
                }
            )
        )

        const testes =[1, 2, 3]

        const vertices = this.floor.geometry.attributes.position.array
        for (let v = 0; v < vertices.length; v++) {

            console.log(v.x);
            
        }

        this.floor.material.side = THREE.DoubleSide

        this.floor.rotation.x = Math.PI / 2
        this.scene.add(this.floor)

    }
}