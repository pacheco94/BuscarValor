// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
   
   //Sorting library

   library Ordering {
    function ordering(uint[] memory vect) external pure returns(uint[] memory) {
        
        for(uint i = 0; i < vect.length; ++i){
             uint indx = i;
            for(uint j = i+1; j < vect.length; ++j){
                if(vect[j] < vect[indx]){
                    indx = j;
                }
            }
            //swaping
         (vect[i], vect[indx]) = (vect[indx], vect[i]);

        }
        
        return vect;
    }

}
