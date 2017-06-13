const express = require('express');
const app = express();
const http = require('http');
// const path = require('path');
// const blog = require('./blog.json');



app.get('/proxy',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', "*"); 
	// res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Credentials', true); 
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	let url = req.query.url;
	console.info(url)
	http.get(url,(responer) => {
		let str='';
		responer.on('data',(chunk) => {
			str += chunk
		});
		responer.on('end',(err) => {
			if (err) throw err;
			res.json(str);
		})
	})
});
app.listen(4000,()=>{
  console.info('4000 ok')
})
