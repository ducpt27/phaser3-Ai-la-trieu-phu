class AnswerTextFact extends AbsFact {
    bgColor = [
        '#777', // answer wrong
        '#FFAE74', '#0290C3', '#E24A8C', '#804BD4'
    ]

    constructor(scene, x, y, data) {
        super(scene, data, x, y);
    }

    load(data) {
        super.load(data);
        let idxResult = this.data["idx_rs"] === undefined ? -1 : this.data["idx_rs"];
        let width = 400;
        for (let i = 0; i < this.data["answer"].length; i++) {
            let xItem;
            let yItem;
            let n = 60;
            let n2 = 60;
            switch (i) {
                case 0:
                    xItem = this.x - width - n2;
                    yItem = this.y - n;
                    break;
                case 1:
                    xItem = this.x + n2;
                    yItem = this.y - n;
                    break;
                case 2:
                    xItem = this.x - width - n2;
                    yItem = this.y + n;
                    break;
                case 3:
                    xItem = this.x + n2;
                    yItem = this.y + n;
                    break;
            }

            let dataStyle = {
                "bgColor": this.getBackground(i, idxResult),
                "maxWidth": width
            }
            this.components[i] = new AnswerText(this.scene, xItem, yItem, this.data["answer"][i], dataStyle);
        }
    }

    getBackground(idx, idxResult) {
        if (idxResult !== -1 && idxResult !== idx) {
            return this.bgColor[0];
        }
        if (this.bgColor[idx + 1] !== undefined) {
            return this.bgColor[idx + 1];
        }
        return 'white';
    }

    getX(idx, max_size) {
        if (idx == null || max_size === null) {
            return;
        }
        let padding = 50;
        max_size += padding;
        return config.width / 2 - ((idx === 0 || idx === 2) ? max_size : -padding);
    }

    getY(idx, max_size) {
        if (idx == null || max_size === null) {
            return;
        }
        return config.height / 3 * 2 - ((idx === 0 || idx === 1) ? max_size : -max_size);
    }
}