//required files:
const INQUIRER = require('inquirer');
const FS = require('fs')
const {Triangle, Circle, Square} = require('./lib/shapes.js');
let shape;

function createLogo(answers) {
    switch (answers.shape){
        case "Triangle": 
            shape = new Triangle(shapeColor, txt, txtColor);
            break;
        case "Circle":
            shape = new Circle(shapeColor, txt, txtColor);
            break;
        case "Square":
            shape = new Square(shapeColor, txt, txtColor);
            break;
        default:
            shape = ''
            break;

    }
}

//prompt for svg questions:
function questions() {
    INQUIRER.prompt([
        {
            type: 'input',
            message: 'What initials should be included in the logo? Must be three characters long.',
            name: 'txt'
        },
        {
            type: 'input',
            message: 'What color should the text be?',
            name: 'txtColor'
        },
        {
            type: 'list',
            message: 'What shape should this logo be?',
            choices:['Triangle', 'Circle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color should the shape be?',
            name: 'shapeColor'
        }
    ]).then((answers) => {
        const pageContent = createLogo(answers)

        FS.writeFile('./examples/example.svg', pageContent, (err) =>
        err ? console.log(err) : console.log('Logo Created!'))
    })
}



//initializes questions:
questions()