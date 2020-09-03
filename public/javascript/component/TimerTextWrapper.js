class TimerTextWrapper extends AbsTextWrapper{

    constructor(scene, x, y, dataStyle, data) {
        super(scene, x, y, dataStyle, data);
    }

    load(data) {
        super.load(data);
        this.component = new TimerText(this.scene, this.x, this.y, this.data, this.dataStyle);
    }
}