class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel:number;

    constructor(maxLevel:number=10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel=maxLevel;
    }
    //设置一个加分的方法
    addScore(){
        //使分数自增
        this.score++;
        this.scoreEle.innerHTML = this.score +'';
        //判划断分数是多少
        if(this.score % 10===0){
            this.levelUp();
        }
    }
    //提升等级的方法
    levelUp() {
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }

    }
}
export default ScorePanel;