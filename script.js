//consumir api com metodo fetch
//then caso funcione e catch caso de erro
var api = fetch('http://192.168.0.113:8000/api/Sistema')  //solicitação para a api com fetch que busca dados e a resposta é uma promisse que tera a resposta da api quando estiver disponivel
.then(resposta => resposta.json())  //transforma a resposta em formato json  
.then(respostaData => {    //armazena em respostaData a resposta em json e verifica erro
    if (respostaData.erro) {
        throw Error('erro de dados')
    } else {
return respostaData.data;
    }    
})
.catch(erro => console.log(erro))  //trata erros
.finally(mensagem => console.log("concluido"));  //mensagem ao final


api.then(data => {
    console.log(data);
    console.log(data[0]);
}).catch(error => {
    console.log(error)
});




//promisse : resolve ou reject
//estados da promisse: completa, rejected ou pending
//objetos do tipo response: then(resolvida), catch(rejeitada) 
//e finally(independente da resposta ele aparece, como resppsta padrao)

