class QuestionTextWrapper extends AbsTextWrapper{

    constructor(scene, x, y, dataStyle, data) {
        super(scene, x, y, dataStyle, data);
    }

    load(data) {
        super.load(data);
        this.component = new QuestionText(this.scene, this.x, this.y, this.data, this.dataStyle);
    }
}