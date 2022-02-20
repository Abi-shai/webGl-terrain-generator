import EventEmitter from "./EventEmitter.js"

export default class Time extends EventEmitter{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
        this.playing = true

        window.requestAnimationFrame(() =>
        {
            this.tick()
        } )

    }

    playing()
    {
        this.playing = true
    }

    pause()
    {
        this.playing = false
    }

    tick()
    {

        const current = Date.now()

        this.delta = current - this.current
        this.elapsed += this.playing ? this.delta : 0
        this.current = current

        // this.trigger('tick')
        if(this.delta > 60)
        {
            this.delta = 60
        }

        if(this.playing)
        {
            this.trigger('tick')
        }



        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    // Stop the window requestAnimation
    stop()
    {
        window.cancelAnimationFrame(this.tick)
    }
}