import Caver from 'caver-js';

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/';

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

const ABI = `[
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
		"constant": false,
		"inputs": [
			{
				"name": "_oOrner",
				"type": "string"
			},
			{
				"name": "_oAddr",
				"type": "string"
			},
			{
				"name": "_oStructure",
				"type": "string"
			},
			{
				"name": "_oAcreage",
				"type": "string"
			},
			{
				"name": "_rName",
				"type": "string"
			},
			{
				"name": "_eName",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_term",
				"type": "string"
			}
		],
		"name": "WriteContract",
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
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contracts",
		"outputs": [
			{
				"name": "orner",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "string"
			},
			{
				"name": "structure",
				"type": "string"
			},
			{
				"name": "acreage",
				"type": "string"
			},
			{
				"name": "lessorName",
				"type": "string"
			},
			{
				"name": "lesseeName",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "term",
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
		"name": "reviews",
		"outputs": [
			{
				"name": "auth",
				"type": "address"
			},
			{
				"name": "roomIndex",
				"type": "uint256"
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
	}
]`;

const ABI_JSON = JSON.parse(ABI);
const ADDRESS = "0x7b85e94FFc2CEED1bb529414D831F3C8a82b8E2A";
const KIP7_ADDRESS = "0xf0CBC46013ee613ACf67821b06ec04EA241AFe4E";
const KIP17_ADDRESS = "0xf93e8c156A0b96259B7452A05DA6Db03F418A289";
export {
    caver,
    ABI_JSON,
	ADDRESS,
	KIP7_ADDRESS,
	KIP17_ADDRESS,
};