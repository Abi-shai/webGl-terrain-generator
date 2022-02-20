import GUI from 'lil-gui'
;

export default class Debug{

    // Debug Panel
    constructor()
    {

        // Access the Debug Panel by adding #Debug at the end of the page link adress, and refresh the page by pressing CTRL + R.
        this.active = window.location.hash === '#debug'

        if(this.active)
        {
            this.ui = new GUI()
        }
    }
}