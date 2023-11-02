//Shape class:
class Shape {
    constructor(shapeColor, txt, txtColor){
        this.shapeColor = shapeColor;
        this.txt = txt;
        this.txtColor = txtColor;
    };


};

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}'/>`;
    };
};

class Circle extends Shape {
    render(){
        return `<circle cx='0' cy='0' r='150' fill='${this.shapeColor}'/>`;
    };
};

class Square extends Shape {
    render(){
        return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill='${this.shapeColor}'/>`;
    };
};

module.exports = {
    Square,
    Triangle,
    Circle
}