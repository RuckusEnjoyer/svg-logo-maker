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
            <polygon points="110, 10 205, 200 15, 200" fill='${this.shapeColor}'/>
            <text x="80" y="110" font-size="2em" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

class Circle extends Shape {
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx='110' cy='105' r='90' fill='${this.shapeColor}'/>
            <text x="80" y="110" font-size="2em" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

class Square extends Shape {
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill='${this.shapeColor}'/>
            <text x="80" y="110" font-size="2em" fill='${this.txtColor}'>${this.txt}</text>
        </svg>`;
    };
};

module.exports = {
    Square,
    Triangle,
    Circle
}