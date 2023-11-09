class GameObject{
    constructor(cfg){
        this.x = cfg.x || 0;
        this.y = cfg.y || 0;
        this.sprite = new SpeechRecognitionResult({
            gameObject: this,
            src: cfg.src,
        });
    }
}