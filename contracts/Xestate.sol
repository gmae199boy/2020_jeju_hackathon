pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

contract Xestate {
    
    // Room Structure
    struct Room {
        address registLessor; 
        string addr;
        uint32 deposit;
        uint32 monthlyPayment;
        uint8 state;
        uint8 roomType;
        address[] reported; // 나중에 수정 필
        uint[] reviewIndex;
    }
    
    // Review Structure
    struct Review {
        address auth;
        uint256 roomIndex;
        uint8 stars;
        // string reason;
    }

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

    mapping (uint256 => Contract[]) public contracts;
    uint256 contractIndex;
    
    // All Room Array
    mapping (uint => Room) public rooms;
    uint roomIndex;
    
    // All Review mapping
    mapping (uint => Review) public reviews;
    uint reviewIndex;
    
    /*
        constants
    */
    
    // 임대인 상수
    uint8 constant LESSOR = 0;
    
    // 임차인 상수
    uint8 constant LESSEE = 1;
    
    // 
    uint8 constant ROOM_STATE_BEFORE_RENT = 1;
    uint8 constant ROOM_STATE_CONTRACTING = 2;
    uint8 constant ROOM_STATE_RENTING = 4;

    //
    uint8 constant MAX_STARS = 5;


    
    /*
        Functions
    */
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

        contracts[contractIndex++].push(ct);

        return true;
    }

    // 매물 등록
    // /**
    // * @param {string} _addr 
    // * @param {uint32} _deposit
    // * @param {uint32} _monthly
    // * @param {uint8}  _state
    // * @param {uint8}  _roomType
    // * @return {bool}  success
    // */
    /// 매물을 등록하기 위한 트랜잭션 입니다.
    function RegistRoom(string memory _addr, uint32 _deposit, uint32 _monthly, 
        uint8 _state, uint8 _roomType
    ) public returns (bool) {
        Room memory _room = Room({
            registLessor: msg.sender,
            addr: _addr,
            deposit: _deposit,
            monthlyPayment: _monthly,
            state: _state,
            roomType: _roomType,
            reported: new address[](0),
            reviewIndex: new uint[](0)
        });
        rooms[roomIndex++] = _room;
        
        return true;
    }
}