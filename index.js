//required files:
const INQUIRER = require('inquirer');
const FS = require('fs')
const {Triangle, Circle, Square} = require('./lib/shapes.js');
let shape;

//Uses the shape list in the prompt to make the file
function createLogo(answers) {
    //Making variables out of our answers!

    let shapeColor = answers.shapeColor;
    let txt = answers.txt;
    let txtColor = answers.txtColor;

    //Checking to see if the txt length matches the acceptance criteria

    if (txt.length > 3) {
        console.error("Text must be 3 characters or less!");
        return;
     }

     //Returns the correct shape file. The classes have a render() method that renders the correct shape and pastes in the shapeColor, txt, and txtColor variables in as template literals.
     
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
    //renders the final shape and returns to the writeFile function!
    return shape.render()
}

//Asks the questions to gather all information:
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
        //Sending to the createLogo Function to render answers
        const pageContent = createLogo(answers)

        //Writing to a file in the output folder
        FS.writeFile('./output/output.svg', pageContent, (err) =>
        err ? console.log(err) : console.log('Logo Created!'))
    })
}



//initializes questions:
questions()