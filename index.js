const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("working!");
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is run on port ${PORT}`);
});