  module.exports = async function main(callback){
    try{

        const account = await web3.eth.getAccounts();
        console.log(account);

        //instanciar el contrato
        const SearchAdd = artifacts.require("SearchAdd");
        const instance = await SearchAdd.deployed();

        //usando las funciones
         await instance.setValue([8,7,1,5,6,9,2,4,3],15);
        //mostrando el valor
        let valor = await instance.getNumber();
        console.log(`La suma es: ${valor.toString()}`);

        //mostrando el arrays
        let array = await instance.getVector();
        console.log("El vector: ",array.toString());
    

      callback(0);
    }catch(error){
        console.log(error);
        callback(1);
    }
 }