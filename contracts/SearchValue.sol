// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library SearchValue {
  
   error notfound(uint valor);
   function Add(uint[] memory array, uint _valor ) external pure returns(uint) {
         uint result;
         uint inf;
         uint sup = array.length - 1;
         while(inf < sup){
               result = array[inf] + array[sup];
               if(result == _valor){
                   return result;
               }else if(result < _valor){
                    inf++;
               }else{
                   sup--;
               }
         }
         revert notfound({
             valor : _valor
         });
     }
  
}
