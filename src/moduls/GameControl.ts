import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
import * as webpack from "webpack";
import numberToIdentifer = webpack.Template.numberToIdentifer;
class GameControl{
//定义三个属性
//蛇
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    //创建一个属性用来记录游戏是否结束
    isLive=true;
    //创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction:string='';
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    };
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run();
    }
    keydownHandler(event:KeyboardEvent){
        this.direction =event.key;
    }


run(){
    let X= this.snake.X;
    let Y= this.snake.Y;

    switch (this.direction){
        case "ArrowUp":
        case "Up":
//向上移动top减少
            Y-=10;
            break;
        case "ArrowDown":
        case "Down":
//向下移动top增伽
            Y+=10;
            break;
        case "ArrowLeft":
        case "Left":
//向左移动1eft减少
            X-=10;
            break;
        case "ArrowRight":
        case "Right":
//向右移动1eft增加
            X+=10;
            break;
    }
    //检查蛇是否吃到了食物
    this.checkEat(X,Y);
    try{
        this.snake.X=X;
        this.snake.Y=Y;
    }catch (e:any) {
        alert(e.message);
        //将isLive设置为false
        this.isLive = false;
    }


    this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
   

}
//定义一个方法，用来检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物的位置要进行重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇要增加一节
            this.snake.addBody();
        }

    }
}
export default GameControl;