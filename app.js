//servidor web
const express = require('express');
const app = express();
const port = 3000;


//get fibonacci
app.get("/fibonacci", (req,res) => {
     
function fibonacci(){
	var x = 0;
	var valor = document.getElementById('num').value;
	var fi = [];
	valor = parseInt(valor);
	for (x; x<valor; x++){
		if(x==0){
			fi.push(0);
		}
		else if(x==1){
			fi.push(1);
		}
		else{
			fi.push(fi[x-1]+fi[x-2]);
		}
	}
	document.getElementById("resultado").innerHTML ="<h3>"+fi+"</h3>";
}
	num = parseint(req.query.num);      
      	if(num % 2 ===0){
                          fibonacci(20);
            }else
                    {
                          fibonacci(10);
                    }
     
 //funcion para devolver con un json
   res.json(fibonacci);
 });
//puerto
app.listen(port,()=>
    console.log(`Puerto ${port}!`));
