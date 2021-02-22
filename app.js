//servidor web
const express = require('express');
const app = express();
const port = 3000;


//get fibonacci
app.get("/fibonaccin", (req,res) => {
     let num = parsefloat(req.query.num);
     let fibo =  [0,1]
        var x = 0;
        var valor = document.getElementById('num').value;
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
    
    
    
 //funcion para devolver con un json
   res.json(fibonacci);
 })
//puerto
app.listen(port,()=>
    console.log(`Puerto ${port}!`));
