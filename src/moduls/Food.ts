class Food {
//定义一个厨性表小食物所付应的元素
    element: HTMLElement;

    constructor() {
//获取页而中food元素并将赋值给element
        this.element = document.getElementById('food')!;
    }
//    定义获取食物x轴方法
    get X() {
        return this.element.offsetLeft;
    }
    //定义一个获取食州轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        let top= Math.round(Math.random()*29)*10
        let left =Math.round(Math.random()*29)*10

        this.element.style.left =left+ 'px';
        this.element.style.top =top +'px';
    }
}
export default Food;