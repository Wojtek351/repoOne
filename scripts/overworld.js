class Overworld{
    constructor(cfg){
        this.element = cfg.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init(){
        
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image,0,0);
        };
        image.src = './images/maps/corridor2.png';
        
        const tag1 = new GameObject({
            x: 5,
            y: 8,
        })

        setTimeout(() => {
            tag1.sprite.draw(this.ctx);
        }, 200)

    }
}