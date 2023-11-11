class Ovmap{
    constructor(cfg){
        this.gameobjects = cfg.gameobjects;
        
        this.image = new Image();
        this.src = cfg.src;

        ctx.drawImage(this.image,0,0)

    }
}

window.ovmaps = {
    corridor2:{
        src: './images/maps/corridor2.png',
        name: 'Korytarz Wejściowy',
        gameobjects: {
            tag1: new GameObject({
                x: 50,
                y: 100,
            }),
        }
    },
}