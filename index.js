console.clear();
const path = require("path");
const express = require("express");
const { SSL_OP_NO_QUERY_MTU } = require("constants");
const app = express();
const port = 8080;
sql = []
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get("/",(req,res)=>{ res.render("index", {page : "register"});});
app.get("/jobs",(req,res)=>{res.render("index", {page : "jobs"});});
app.get("/book",(req,res)=>{res.render("index", {page : "book"});});

app.post("/", (req,res)=>{
	console.log(req.body)
	sql.push({
		name : req.body.name,
		date : req.body.date,
		time : req.body.hour,
		phone : req.body.phone
	})
	console.table(sql);
});

app.use('/assets', express.static('assets'));



app.listen(port, ()=>{
	console.log(`Servidor iniciado na porta ${port}`);
});

