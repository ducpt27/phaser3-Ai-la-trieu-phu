class MenuBtnText extends Phaser.GameObjects.Text {

    constructor(scene, x, y, data, dataStyle) {
        super(scene, x, y, data, {
            "font": config.fontSize + 4 + "px Arial",
            "fill": dataStyle["color"],
            "wordWrap": {"width": dataStyle["maxWidth"] - 40},
            "align": 'center',
            "backgroundColor": dataStyle["bgColor"],
            "fixedWidth": dataStyle["maxWidth"],
            "padding": {
                "top": 20,
                "bottom": 20,
                "left": 20,
                "right": 20
            },
            "maxLines": 1,
        });
        scene.add.existing(this);
    }
}