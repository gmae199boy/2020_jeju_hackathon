import Caver from 'caver-js';

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/';

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

const ABI = `[
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
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "GetContract",
		"outputs": [
			{
				"components": [
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
				"type": "address"
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
	}
]`;

const ABI_JSON = JSON.parse(ABI);
const ADDRESS = "0xa17530000339882898838003CA6FC5505fb01679";
export {
    caver,
    ABI_JSON,
    ADDRESS,
};