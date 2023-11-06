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
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}'/>
            <text x="135" y="110" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

class Circle extends Shape {
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx='10' cy='10' r='80' fill='${this.shapeColor}'/>
            <text x="135" y="110" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

class Square extends Shape {
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill='${this.shapeColor}'/>
            <text x="135" y="110" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

module.exports = {
    Square,
    Triangle,
    Circle
}