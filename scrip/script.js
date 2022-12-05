  module.exports = async function main(callback){
    try{

        const account = await web3.eth.getAccounts();
        console.log(account);

        //instanciar el contrato
        const SearchAdd = artifacts.require("SearchAdd");
        const instance = await SearchAdd.deployed();

        let valor;
        let valor1 = [];

        //usando las funciones
         valor = await instance.setValue([8,7,1,5,6,9,2,4,3],15);
        //mostrando el valor
        console.log(`La suma es: ${valor.toString()}`);

        //mostrando el arrays
        console.log("El vector: ",valor1);
    

      callback(0);
    }catch(error){
        console.log(error);
        callback(1);
    }
 }