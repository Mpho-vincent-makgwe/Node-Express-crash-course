const express = require('express');

const app = express();

app.use((req,res,next) =>{
    console.log("<h1>HELLLOOO</h1>");
    next();
})
app.get('/', (req, res)=>{
    const user = {
        name: "Siphosenkosi Vincent",
        surname: "Senkosi",
        age: 24,
        hobby: 'Traveling, Drawing and swimming',
        Specialisation: "Software Developer"
    }
    res.send(user)
});

app.listen(3001);