class ScoreText extends Phaser.GameObjects.Text {

    constructor(scene, x, y, data, dataStyle) {
        let text = data["name"] + "\n" + data["score"];
        let width = dataStyle["width"];

        super(scene, x, y, text, {
            "font": config.fontSize - 4 + 'px Arial',
            "fill": 'rgb(255, 174, 116)',
            "wordWrap": {
                "width": width - 10
            },
            "align": 'center',
            "backgroundColor": 'rgb(51, 37, 90, 0.7)',
            "alpha": 0.5,
            "fixedWidth": width,
            "padding": {
                "left": 5,
                "top": 5,
                "right": 5,
                "bottom": 5
            },
            "maxLines": 10,
        });

        scene.add.existing(this);
    }
}