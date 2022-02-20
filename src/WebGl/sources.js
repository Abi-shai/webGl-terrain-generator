export default [

    // An array to store the name, type of file, and path of each file to be loaded

    // EnvironmentMap texture source of the environment map
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path: [
            './textures/environmentMap/nx.jpg',
            './textures/environmentMap/ny.jpg',
            './textures/environmentMap/nz.jpg',
            './textures/environmentMap/px.jpg',
            './textures/environmentMap/py.jpg',
            './textures/environmentMap/pz.jpg'
        ]
    },

    /**
     * Floor textures sources
     */
    
    // For the color texture of the Floor
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: [
            './textures/grass/color.jpg'
        ]
    },

    // For the normal texture of the Floor
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: [
            './textures/grass/normal.jpg'
            
        ]
    }
]
