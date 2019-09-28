pragma solidity >=0.4.21 <0.6.0;
import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

contract renamedVerifier is Verifier{

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is propertyERC721Token {


struct Solution{
    uint256 tokenId;
    address owner;
}



// TODO define a solutions struct that can hold an index & an address

mapping (bytes32 => Solution) internal solutions;

// TODO define an array of the above struct


// TODO define a mapping to store unique solutions submitted

event solutionAdded(uint256 tokenId, address owner);

// TODO Create an event to emit when a solution is added

function addSolution (uint256 _tokenId, address _owner, bytes32 _index)  internal {
        
        Solution storage solut = solutions[_index];

        solut.tokenId = _tokenId;
        solut.owner = _owner;
    
        emit solutionAdded(_tokenId, _owner);
}

// TODO Create a function to add the solutions to the array and emit the event



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

  function mint(address to, uint256 tokenId, uint[] memory a, uint[] memory c, uint input) public{

mint(to, tokenId);
  }
}

























