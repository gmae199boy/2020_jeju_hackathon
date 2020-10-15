import Caver from 'caver-js';

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/';

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

const ABI = `[
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lessors",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rooms",
		"outputs": [
			{
				"name": "registLessor",
				"type": "address"
			},
			{
				"name": "addr",
				"type": "string"
			},
			{
				"name": "deposit",
				"type": "uint32"
			},
			{
				"name": "monthlyPayment",
				"type": "uint32"
			},
			{
				"name": "state",
				"type": "uint8"
			},
			{
				"name": "roomType",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lessees",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userType",
				"type": "uint8"
			},
			{
				"name": "_userName",
				"type": "string"
			}
		],
		"name": "Signup",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_deposit",
				"type": "uint32"
			},
			{
				"name": "_monthly",
				"type": "uint32"
			},
			{
				"name": "_state",
				"type": "uint8"
			},
			{
				"name": "_roomType",
				"type": "uint8"
			}
		],
		"name": "RegistRoom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_roomId",
				"type": "uint256"
			}
		],
		"name": "GetRoom",
		"outputs": [
			{
				"components": [
					{
						"name": "registLessor",
						"type": "address"
					},
					{
						"name": "addr",
						"type": "string"
					},
					{
						"name": "deposit",
						"type": "uint32"
					},
					{
						"name": "monthlyPayment",
						"type": "uint32"
					},
					{
						"name": "state",
						"type": "uint8"
					},
					{
						"name": "roomType",
						"type": "uint8"
					},
					{
						"name": "reported",
						"type": "address[]"
					},
					{
						"name": "reviewIndex",
						"type": "uint256[]"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reviews",
		"outputs": [
			{
				"name": "auth",
				"type": "address"
			},
			{
				"name": "roomIndex",
				"type": "uint64"
			},
			{
				"name": "stars",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_initNum",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]`;

const ABI_JSON = JSON.parse(ABI);
const ADDRESS = "0x9452c097da583a45fa719c06d181733Af7aadCB7";
export {
    caver,
    ABI_JSON,
    ADDRESS,
};