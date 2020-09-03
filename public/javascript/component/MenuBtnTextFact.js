class MenuBtnTextFact extends AbsFact {

    constructor(scene, x, y, data) {
        super(scene, data, x, y);
    }

    load(data) {
        super.load(data);
        let width = 300;
        for (let i = 0; i < this.data.length; i++) {
            let xItem = this.x - width / 2;
            let yItem = this.y + i * 100;
            let dataStyle = {
                "bgColor": this.getBackground(this.data[i]["isFocus"]),
                "maxWidth": width,
                "color": this.getColor(this.data[i]["isFocus"])
            }
            this.components[i] = new MenuBtnText(this.scene, xItem, yItem, this.data[i]["name"], dataStyle);
        }
    }

    getBackground(isFocus) {
        if (isFocus === 1) {
            return 'rgb(50,145,200)';
        } else {
            return 'rgb(166,206,234)';
        }
    }

    getColor(isFocus) {
        if (isFocus === 1) {
            return 'rgb(255,255,255)';
        } else {
            return "rgb(38,70,83)";
        }
    }
}