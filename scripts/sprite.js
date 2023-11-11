class Sprite{
    constructor(cfg){

        this.image = new Image();
        this.image.src = cfg.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        
        this.animations = cfg.animations || {
            idleDown: [
                [0,0]
            ]
        }
            this.currentAnimation = cfg.currentAnimation || "idleDown";
            this.currentAnimationFrame = 0;

            this.gameObject = cfg.gameObject;
    }
    draw(ctx){
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
            )
    }
}