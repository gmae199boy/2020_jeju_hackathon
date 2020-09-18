pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

contract Xestate {

    // 계약서
    struct Contract {

    };
    
    function _tokenTransfer(address _from, address _to, uint _value) private returns (bool) {
        require(balanceOf[_from] >= _value, "your balance is too low");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
    }
}