require('dotenv').config()
const app = require('./src/app')
//const generateContent = require('./generateContent');

app.listen(3000, () => { console.log("server is running on port http://localhost:3000");
});