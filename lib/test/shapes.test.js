const {Shape, Triangle, Circle, Square} = require('../shapes.js');

//testing suite for shapes.js
describe('shapes', () => {
    //Testing Triangle Here
    describe('Triangle', () => {
        it('should render a shape with the correct color, text color, and text', () => {
            //The values we will test
            const triangle = new Triangle('Blue', 'hel', 'White',);

            //What i expect to come out
            const renderEx = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="110, 10 205, 200 15, 200" fill='Blue'/>
            <text x="80" y="110" font-size="2em" fill='White'>hel</text>
        </svg>`
            expect(triangle.render()).toEqual(renderEx)
        });
    });

    //Testing circle here
    describe('Circle', () => {
        it('should render a shape with the correct color, text color, and text', () => {
            //The values we'll use to test
            const circle = new Circle('Blue', 'hel', 'White',);

            //what we expect to come out
            const renderEx = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx='110' cy='105' r='90' fill='Blue'/>
            <text x="80" y="110" font-size="2em" fill='White'>hel</text>
        </svg>`
            expect(circle.render()).toEqual(renderEx)
        });
    });

    //Testing Square Here
    describe('Square', () => {
        it('should render a shape with the correct color, text color, and text', () => {
            //The values we wanna test
            const square = new Square('Blue', 'hel', 'White',);
            
            //What we expect to come out
            const renderEx = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill='Blue'/>
            <text x="80" y="110" font-size="2em" fill='White'>hel</text>
        </svg>`
            expect(square.render()).toEqual(renderEx)
        });
    });
});

