const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
port = process.env.PORT || 5000


// console.log(process.env)
main().then(() => console.log('Database is running..!')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

}

app.listen(port, () =>{
    console.log(`port is listening on ${port}`);
})