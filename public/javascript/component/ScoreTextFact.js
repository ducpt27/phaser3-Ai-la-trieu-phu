class ScoreTextFact extends AbsFact{

    constructor(scene, data) {
        super(scene, data);
        this.scene = scene;
    }

    load(data) {
        super.load(data);
        let width = 120;
        let x = config.width/2 + width;
        let y = 10;
        for (let i = 0; i < this.data.length; i++) {
            if (i > 2) {
                break;
            }
            this.components[i] = new ScoreText(this.scene, x, y, this.data[i], {
                "width": width
            });

            x += width + 20;
        }
    }
}