// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

 import "./Ordering.sol";
 import "./SearchValue.sol";

contract SearchAdd {
  
  using Ordering for uint[];
  using SearchValue for uint[];
 
     uint[] vector;
     uint value;
     
     //function set value
     function setValue(uint[] memory vect, uint _search) external returns(uint) {
         uint[] memory myarray = vector;
         //ordenamos el vector
         myarray = vect.ordering();

         //buscamos el valor a sumar;
         value = myarray.Add(_search);
         return value;
     }

     //function get vector
     function getVector() public view returns(uint[] memory) {
         return vector.ordering();
     }
     
     //function para mostrar valor
     function getNumber() public view returns(uint) {
         return value;
     }

}
