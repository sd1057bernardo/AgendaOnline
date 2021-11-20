console.clear();
const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get("/",(req,res)=>{
	res.render("index");
});
app.use('/assets', express.static('assets'));



app.listen(port, ()=>{
	console.log(`Servidor iniciado na porta ${port}`);
});

