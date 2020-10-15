pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

contract App {

    // 계약서
    struct Contract {
        string orner;
        string addr;
        string structure;
        string acreage;
        string lessorName;
        string lesseeName;
        string date;
        string term;
    }

    mapping (address => Contract[]) public contracts;

    // function GetContract(uint _id) public view returns(Contract memory) {
    //     return contracts[msg.sender][_id];
    // }

    function WriteContract(
        string memory _oOrner,
        string memory _oAddr,
        string memory _oStructure,
        string memory _oAcreage,
        string memory _rName,
        string memory _eName,
        string memory _date,
        string memory _term
    ) public returns (bool) {

        Contract memory ct = Contract(
                _oOrner,_oAddr,_oStructure,_oAcreage,
                _rName,_eName,
                _date,
                _term
        );

        contracts[msg.sender].push(ct);

        return true;
    }
}

// pragma solidity ^0.5.6;
// pragma experimental ABIEncoderV2;

// contract App {

//     // 계약서
//     struct Contract {
//         Office office;
//         ContractParty contractParty;
//         ContractContent contractContent;
//     }

//     struct Office {
//         string orner;
//         string addr;
//         string structure;
//         string acreage;
//     }

//     struct ContractParty {
//         string lessorName;
//         string lesseeName;
//     }

//     struct ContractContent {
//         string date;
//         string term;
//     }

//     mapping (address => Contract[]) public contracts;

//     function GetContract(uint _id) public view returns(Contract memory) {
//         return contracts[msg.sender][_id];
//     }

//     function WriteContract(
//         string memory _oOrner,
//         string memory _oAddr,
//         string memory _oStructure,
//         string memory _oAcreage,
//         string memory _rName,
//         string memory _eName,
//         string memory _date,
//         string memory _term
//     ) public returns (bool) {

//         Contract memory ct = Contract({
//             office: _office(_oOrner,_oAddr,_oStructure,_oAcreage),
//             contractParty: _contractParty(_rName,_eName),
//             contractContent: _contractContent(
//                 _date,
//                 _term
//             )
//         });

//         contracts[msg.sender].push(ct);

//         return true;
//     }
    
//     function _office(        
//         string memory _oOrner,
//         string memory _oAddr,
//         string memory _oStructure,
//         string memory _oAcreage
//     ) private returns(Office memory) {
//         Office memory office = Office({
//             orner: _oOrner,
//             addr: _oAddr,
//             structure: _oStructure,
//             acreage: _oAcreage
//         });

//         return office;
//     }

//     function _contractParty(string memory _rName, string memory _eName) private returns(ContractParty memory) {
//         ContractParty memory contractParty = ContractParty({
//             lessorName: _rName,
//             lesseeName: _eName
//         });

//         return contractParty;
//     }

//     function _contractContent(string memory _date, string memory _term) private returns(ContractContent memory) {
//         ContractContent memory contractContent = ContractContent({
//             date: _date,
//             term: _term
//         });

//         return contractContent;
//     }


    // function _tokenTransfer(address _from, address _to, uint _value) private returns (bool) {
    //     require(balanceOf[_from] >= _value, "your balance is too low");
    //     balanceOf[_from] -= _value;
    //     balanceOf[_to] += _value;
    // }
}




// pragma solidity ^0.5.6;
// pragma experimental ABIEncoderV2;

// contract Xestate {

//     // 계약서
//     struct Contract {
//         Office office;
//         ContractParty contractParty;
//         ContractContent contractContent;
//     }

//     struct Office {
//         string orner;
//         string addr;
//         string structure;
//         string acreage;
//     }

//     struct ContractParty {
//         Lessor lessor;
//         Lessee lessee;
//     }

//     struct ContractContent {
//         string date;
//         string term;
//     }

//     struct Lessee {
//         string name;
//         string SSN;
//         string phoneNumber;
//         string addr;
//     }

//     struct Lessor {
//         string name;
//         string SSN;
//         string phoneNumber;
//         string addr;
//     }

//     mapping (address => Contract) public contracts;

//     function WriteContract(
//         string memory _oOrner,
//         string memory _oAddr,
//         string memory _oStructure,
//         string memory _oAcreage,
//         string memory _rName,
//         string memory _rSSN,
//         string memory _rPhoneNumber,
//         string memory _rAddr,
//         string memory _eName,
//         string memory _eSSN,
//         string memory _ePhoneNumber,
//         string memory _eAddr,
//         string memory _date,
//         string memory _term
//     ) public returns (bool) {

//         Lessor memory lessor = _lessor(_rName,_rSSN,_rPhoneNumber,_rAddr);
//         Lessee memory lessee = _lessee(_eName,_eSSN,_ePhoneNumber,_rAddr);
//         Contract memory ct = Contract({
//             office: _office(_oOrner,_oAddr,_oStructure,_oAcreage),
//             contractParty: _contractParty(lessor,lessee),
//             contractContent: _contractContent(
//                 _date,
//                 _term
//             )
//         });

//         contracts[msg.sender] = ct;

//         return true;
//     }
    
//     function _office(        
//         string memory _oOrner,
//         string memory _oAddr,
//         string memory _oStructure,
//         string memory _oAcreage
//     ) private returns(Office memory) {
//         Office memory office = Office({
//             orner: _oOrner,
//             addr: _oAddr,
//             structure: _oStructure,
//             acreage: _oAcreage
//         });
//     }
    
//     function _lessor(
//         string memory _rName,
//         string memory _rSSN,
//         string memory _rPhoneNumber,
//         string memory _rAddr
//     ) private returns(Lessor memory) {
//         Lessor memory lessor = Lessor({
//             name: _rName,
//             SSN: _rSSN,
//             phoneNumber: _rPhoneNumber,
//             addr: _rAddr
//         });
//     }

//     function _lessee(
//         string memory _eName,
//         string memory _eSSN,
//         string memory _ePhoneNumber,
//         string memory _eAddr
//     ) private returns(Lessee memory) {
//         Lessee memory lessee = Lessee({
//             name: _eName,
//             SSN: _eSSN,
//             phoneNumber: _ePhoneNumber,
//             addr: _eAddr
//         });
//     }

//     function _contractParty(Lessor memory _lessor, Lessee memory _lessee) private returns(ContractParty memory) {
//         ContractParty memory contractParty = ContractParty({
//             lessor: _lessor,
//             lessee: _lessee
//         });
//     }

//     function _contractContent(string memory _date, string memory _term) private returns(ContractContent memory) {
//         ContractContent memory contractContent = ContractContent({
//             date: _date,
//             term: _term
//         });
//     }


//     // function _tokenTransfer(address _from, address _to, uint _value) private returns (bool) {
//     //     require(balanceOf[_from] >= _value, "your balance is too low");
//     //     balanceOf[_from] -= _value;
//     //     balanceOf[_to] += _value;
//     // }
// }