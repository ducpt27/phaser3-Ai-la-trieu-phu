class QuestionText extends Phaser.GameObjects.Text {

    constructor(scene, x, y, data, dataStyle) {
        if (data == null || data["question"] === undefined) {
            data = {
                "question": "..."
            }
        }
        super(scene, x, y, data["question"], {
            "font": config.fontSize + 2 + 'px Arial',
            "fill": 'rgb(255, 255, 255)',
            "wordWrap": {"width": dataStyle["maxWidth"] - 40},
            "align": 'left',
            "backgroundColor": 'coral',
            "fixedWidth": dataStyle["maxWidth"],
            "maxLines": 4,
            "padding": {
                "top": 20,
                "left": 20,
                "bottom": 20,
                "right": 20
            }
        });
        scene.add.existing(this);
    }
}