/**
 * JSON Schema 관리
 * 
 * input, output 데이터를 사전 지정해서 
 * 스키마에 맞지 않게 들어온 input 값이 있으면
 * 400 Error return
 * 
 * 스키마에 맞는 데이터 값만 return 하게 된다
 * 
 * 반드시 지정 properties 만 받아야 하며,
 * 지정된 properties만 return 하게 되어서
 * 데이터 컨트롤이 용이해진다.
 */

const registRoomSchema = {
    body: {
        required: [
            'name',
            'roomType',
            'address',
            'monthlyPayment',
        ],
        properties: {
            name: {type: 'string'},
            roomType: {type: 'integer'},
            deposit: {type: 'integer'},
            monthlyPayment: {type: 'integer'},
            address: {type: 'string'},
            state: {type: 'integer'},
            content: {type: 'string'}
        },
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             name: {type: 'string'},
    //         }
    //     }
    // },
};

const getRoomSchema = {
    params: {
        id: {type: 'integer'},
    },
};

const getRoomListSchema = {
    querystring: {
        page: {type: 'ingeter'},
    },
}

export { 
    registRoomSchema,
    getRoomListSchema,
    getRoomSchema,
};