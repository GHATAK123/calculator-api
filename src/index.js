const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
app.use(express.urlencoded({extended: false}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


// your code goes here
app.get('/', (req, res) => res.send('Hello Calculator Api!!'));

app.post('/add', (req,res) => {

    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    if(!isNaN(num1) && !isNaN(num2)){
        num1 = parseFloat(num1);
         num2 = parseFloat(num2);
        let sum = (num1+num2);

        res.send({
            message: "the sum of given two numbers",
            sum: sum
        });
        
    }
    else{
        res.send({
            // message:"Successfull",
            message:"Invalid data types"
        });
        return;
        
    }
  })

app.post('/sub', (req, res) =>{

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send({
            // message:"Successfull",
            message:"Invalid data types"
        })
    }
    else{
        const substraction = (num1-num2);

        res.send({
            message: "Successfull",
            result: substraction
        })
    }

})

app.post('/multiply', (req,res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send({
            // message:"Successfull",
            message:"Invalid data types"
        })
    }
    else{
        const mult = (num1*num2);

        res.send({
            message: "Successfull",
            result: mult
        })
    }
})


app.post('/divide', (req,res) => {

    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send({
            // message:"Successfull",
            message:"Invalid data types"
        })
    }
    else if(num2 === 0){
        res.send({
            // message:"Successfull",
            message:"Cannot divide by zero"
        })
    }
    else{
        const devide = (num1/num2);

        res.send({
            message: "Successfull",
            result: devide
        })
    }
})
// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
