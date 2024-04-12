const express=require('express');
const mysql=require('mysql2');

const mysql_config=require('./mysql_config');

const app=express();
app.listen(3000,()=>{
    console.log("TA LOGADO PORRRRRRRRRRAAAAAAAAAA")
})

//criação da conexão
const connection=mysql.createConnection(mysql_config);

//definindo uma rota
app.get('/',(req,res)=>{
    //criando um objeto result para todos os endpoint da api
    let result ={
        status: "AE porra",
        message: null,
        data: null
    }
    //fazendo a conexão
    connection.query("SELECT * FROM tasks",(err,results)=>{
        //cuidar do erro
        if(err){
            result.status='erro';
            result.message='erro na obtenção das tarefas';
            result.data=[];
            //res.send(result);
            res.json(result)
        }else{
            result.status='sucesso';
            result.message='Tarefa obtidas com sucesso';
            result.data=results;
            //res.send(result);
            res.json(result);
        }
    })
})