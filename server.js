const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Getting root')
});

app.get('/profile', (req, res)=>{
    res.send('Getting profile')
});

app.post('/profile', (req, res)=>{
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