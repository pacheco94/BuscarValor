  modules.exports = async function main(callback){
    try{

        const account = await web3.eth.getAccounts();
        console.log(account);

        //instanciar el contrato
        const SearchAdd = artifacts.require("SearchAdd");
        const instance = await SearchAdd.deployed();

        let valor = [];

        //usando las funciones
         valor = await instance.setValue([8,7,1,5,6,9,2,4,3],15);
        //mostrando el valor
        console.log(`La suma es: ${valor[0].toString()}`);

        //mostrando el array
        console.log("El vector: ",valor[1]);
    

      callback(0);
    }catch(error){
        console.log(error);
        callback(1);
    }
 }