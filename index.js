// play this: https://www.youtube.com/watch?v=d-diB65scQU
// code away!

// ----AS OF FRIDAY 22 ,2019, 1:05 PM THE API IS DEPLOYED ONTO HEROKUUUU
//https://jm-backendsprint1.herokuapp.com/api/projects
//https://jm-backendsprint1.herokuapp.com/api/actions


require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
    console.log(`\n*** ${greeting} on http://localhost:${port} ***\n`)
})

