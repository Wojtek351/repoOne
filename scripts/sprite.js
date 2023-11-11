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
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            64,64,
            x,y,
            64,64
            )
    }
}