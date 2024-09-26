
export const Contract_ABI = [
  
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InsufficientBalanace",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInvoiceId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvoicePaidForAlready",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressDetected",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_add",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amt",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "InvoiceCreatedSuccessfully",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_add",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amt",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "PaymentSuccessful",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organization",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phone",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_walletAddress",
        "type": "address"
      }
    ],
    "name": "createCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_buyerAddress",
        "type": "address"
      },
      {
        "internalType": "string[]",
        "name": "_goods",
        "type": "string[]"
      },
      {
        "internalType": "uint256",
        "name": "_totalAmt",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      }
    ],
    "name": "createInvoice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "internalType": "string",
        "name": "customerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "customerEmail",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organization",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "phoneNumber",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "customerId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCreated",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "generateAllInvoices",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "string[]",
            "name": "goods",
            "type": "string[]"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isPaid",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountPaidInEther",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "invoiceId",
            "type": "uint256"
          }
        ],
        "internalType": "struct InvoiceChain.Invoice[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "generateInvoice",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "string[]",
            "name": "goods",
            "type": "string[]"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isPaid",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountPaidInEther",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "invoiceId",
            "type": "uint256"
          }
        ],
        "internalType": "struct InvoiceChain.Invoice",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "invoices",
    "outputs": [
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "date",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isPaid",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountPaidInEther",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "invoiceId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "payInvoice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "payWithEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_invoiceId",
        "type": "uint256"
      }
    ],
    "name": "sendEtherToSeller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
  



