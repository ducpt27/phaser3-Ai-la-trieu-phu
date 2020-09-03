class PlayScene extends Phaser.Scene {

    timeOutSecond = 0;
    timeOutMin = 0;
    deadAnswerDate = 0;
    timeOutLabel;

    constructor() {
        super("playGame");
    }

    init() {
        this.scoreFact = new ScoreTextFact(this);
        this.answerFact = new AnswerTextFact(this, config.width / 2, config.height / 3 * 2 - 50);
        this.scoreFact = new ScoreTextFact(this);
        this.question = new QuestionTextWrapper(this, config.width / 4, config.height / 3, {
            "maxWidth": config.width / 2
        });
        this.timeOutLabel = new TimerTextWrapper(this, config.width / 2 - 50, 30, null, "test");
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

        let var1 = {
            "question": "Đâu là một loại hình chợ tạm tự phát thường xuất hiện trong các khu dân cư?",
            "answer": [
                "A. Ếch",
                "B. Cóc",
                "C. Thằn lằn",
                "D. Nhái"
            ]
        };
        this.newQuestion(var1);

        //test
        let var2 = {
            "question": "Cho tới thời điểm hiện nay, vườn quốc gia nào của nước ta chưa được công nhận là Vườn Di sản ASEAN?",
            "answer": [
                "A. Vườn quốc gia Kon Ka Kinh",
                "B. Vườn quốc gia Tam Đảo",
                "C. Vườn quốc gia Chư Mom Ray",
                "D. Vườn quốc gia Bái Tử Long",
            ]
        };
        this.time.addEvent({
            delay: 8000,
            callback: this.newQuestion,
            args: [
                var2
            ],
            callbackScope: this,
            loop: false
        });

        let dataResult = {
            "score": [
                {
                    "name": "ducpt",
                    "score": 1200
                },
                {
                    "name": "hongnv",
                    "score": 1110
                },
                {
                    "name": "truongnv",
                    "score": 890
                },
                {
                    "name": "test",
                    "score": 20
                }
            ]
        }
        this.time.addEvent({
            delay: 15000,
            callback: this.changeScene,
            args: ["resultGame", dataResult],
            callbackScope: this,
            loop: false
        });
    }

    changeScene(sceneConfig, data) {
        this.scene.start(sceneConfig, data);
    }

    renderTimeOut() {
        if (!this.timer_TimeOut.paused) {
            let tempMin = 0;
            let tempSec = Math.ceil((this.deadAnswerDate - new Date().getTime()) / 1000);
            if (tempSec < 0) {
                return;
            }

            while (tempSec > 60) {
                tempSec -= 60;
                tempMin++;
            }
            if (this.timeOutSecond === tempSec - 1 && (this.timeOutMin === tempMin - 1 && this.timeOutSecond === 0)) {
                return;
            } else {
                this.timeOutSecond = tempSec;
                this.timeOutMin = tempMin;
            }

            if (this.timeOutSecond > 0 && this.timeOutMin > 0) {
                this.timeOutSecond -= 1;
            } else if (this.timeOutSecond === 0 && this.timeOutMin > 0) {
                this.timeOutMin -= 1;
                this.timeOutSecond = 60;
            } else if (this.timeOutSecond > 0) {
                this.timeOutSecond -= 1;
            } else if (this.timeOutSecond <= 0 && this.timeOutMin <= 0) {
                this.getResult();
            }

            let text = "TIME: "
                + (this.timeOutMin === 0 ? "00" : this.timeOutMin) + ":"
                + (this.timeOutSecond === 0 ? "00" : this.timeOutSecond);
            this.timeOutLabel.load(text);
        }
    }

    resetTimeOut(paused) {
        if (this.timer_TimeOut === undefined || this.timer_TimeOut === null) {
            this.timer_TimeOut = this.time.addEvent({
                delay: 1000 / 60,
                callback: this.renderTimeOut,
                args: [],
                callbackScope: this,
                loop: true
            });
        }
        this.timer_TimeOut.paused = (paused === undefined || paused === null) ? true : paused;
    }

    getResult() {
        let var0 = {
            "answer": [
                "A. Ếch",
                "B. Cóc",
                "C. Thằn lằn",
                "D. Nhái"
            ],
            "idx_rs": 1,
            "score": [
                {
                    "name": "ducpt",
                    "score": 1200
                },
                {
                    "name": "hongnv",
                    "score": 1110
                },
                {
                    "name": "truongnv",
                    "score": 890
                },
                {
                    "name": "test",
                    "score": 20
                }
            ]
        };

        let var1 = {
            "answer": [
                "A. Vườn quốc gia Kon Ka Kinh",
                "B. Vườn quốc gia Tam Đảo",
                "C. Vườn quốc gia Chư Mom Ray",
                "D. Vườn quốc gia Bái Tử Long",
            ],
            "idx_rs": 1,
            "score": [
                {
                    "name": "truongnv",
                    "score": 2010
                },
                {
                    "name": "ducpt",
                    "score": 1800
                },
                {
                    "name": "hongnv",
                    "score": 1110
                },
                {
                    "name": "test",
                    "score": 20
                }
            ]
        };
        if (this.testIdx === 1) {
            this.updateScoreAndResult(var0);
            this.testIdx++;
        } else {
            this.updateScoreAndResult(var1);
        }
    }

    testIdx = 1;

    newQuestion(data) {
        this.question.load(data);
        this.answerFact.load(data);

        let testDate = new Date().getTime() + 5000;
        this.deadAnswerDate = testDate;
        this.resetTimeOut(false);
    }

    updateScoreAndResult(data) {
        this.resetTimeOut(true);
        this.scoreFact.load(data["score"]);
        this.answerFact.load(data);
    }
}