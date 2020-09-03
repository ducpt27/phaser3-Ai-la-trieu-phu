class MenuScene extends Phaser.Scene{
    constructor() {
        super('menuGame');
        this.init();
    }

    preload() {
        this.load.spritesheet("background", "/images/bg-1920x1080.jpg", {
            frameWidth: 1920,
            frameHeight: 1080
        });
    }

    create() {
        this.background = this.add.sprite(0, 0, "background");
        this.background.setOrigin(0, 0);

        let data = [
            {
                "name": "Bắt đầu",
                "isFocus": 1
            }, {
                "name": "Luật thi đấu"
            }
        ]
        this.menuBtnFact.load(data);

        this.time.addEvent({
            delay: 1500,
            callback: this.test,
            args: [],
            callbackScope: this,
            loop: false
        });
    }

    test() {
        this.scene.start("playGame");
    }

    init() {
        this.menuBtnFact = new MenuBtnTextFact(this, config.width/2, config.height/2);
    }
}
