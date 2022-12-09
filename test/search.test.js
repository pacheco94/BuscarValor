const { expect } = require('chai');

const SearchAdd = artifacts.require('SearchAdd');

contract('Probando el contrato', function ([owner]){
    let value = 17;
    let vector = [1,2,3,4,5,7,8,9];

 beforeEach(async () => {
     
     this.instance = await SearchAdd.new({from: owner})
 });
     
 //probando la funcion setValue and getNumber
 it('Sum should equal 17', async () => {
    await this.instance.setValue([2,3,5,7,8,1,9,4], 17);
    expect(await this.instance.getNumber(),value,'Value it not to expeted!');
 });

 //probando la funcion getVector
 it('Vector should be ordered ', async () => {
     let _vector = await this.instance.getVector();
     expect(vector, _vector,'Vector its not to expected!');
 });


});