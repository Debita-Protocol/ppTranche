/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TLens } from "../TLens";

export class TLens__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TLens> {
    return super.deploy(overrides || {}) as Promise<TLens>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TLens {
    return super.attach(address) as TLens;
  }
  connect(signer: Signer): TLens__factory {
    return super.connect(signer) as TLens__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TLens {
    return new Contract(address, _abi, signerOrProvider) as TLens;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getContracts",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "vault",
            type: "address",
          },
          {
            internalType: "address",
            name: "splitter",
            type: "address",
          },
          {
            internalType: "address",
            name: "amm",
            type: "address",
          },
          {
            internalType: "address",
            name: "lendingPool",
            type: "address",
          },
          {
            internalType: "address",
            name: "cSenior",
            type: "address",
          },
          {
            internalType: "address",
            name: "cJunior",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "_want",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "_instruments",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "_ratios",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "_junior_weight",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_promisedReturn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_time_to_maturity",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inceptionPrice",
                type: "uint256",
              },
            ],
            internalType: "struct TrancheFactory.InitParams",
            name: "param",
            type: "tuple",
          },
        ],
        internalType: "struct TrancheFactory.Contracts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getCurrentMarkPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getCurrentValuePrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getElapsedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
    ],
    name: "getNumVaults",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "getPositions",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "bidCrossId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "askCrossId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "askLiq",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "bidLiq",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "feeGrowthInside0LastX128",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeGrowthInside1LastX128",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensOwed0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensOwed1",
            type: "uint256",
          },
        ],
        internalType: "struct Position.Info[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getTrancheInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_want",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "_instruments",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_ratios",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "_junior_weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_promisedReturn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_time_to_maturity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inceptionPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "psu",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pju",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pjs",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "curMarkPrice",
            type: "uint256",
          },
        ],
        internalType: "struct tLens.TrancheInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
    ],
    name: "getTrancheInfoBatch",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_want",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "_instruments",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_ratios",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "_junior_weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_promisedReturn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_time_to_maturity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inceptionPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "psu",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pju",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pjs",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "curMarkPrice",
            type: "uint256",
          },
        ],
        internalType: "struct tLens.TrancheInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getTranches",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "getVaultParams",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_want",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "_instruments",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "_ratios",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "_junior_weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_promisedReturn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_time_to_maturity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inceptionPrice",
            type: "uint256",
          },
        ],
        internalType: "struct TrancheFactory.InitParams",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tFactory_ad",
        type: "address",
      },
    ],
    name: "setTFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tMaster_ad",
        type: "address",
      },
    ],
    name: "setTMaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561188f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639f3e2dbc1161008c578063d5e1a18b11610066578063d5e1a18b14610231578063e1d6e16614610244578063e9ab302714610264578063f2c9ecd81461027757600080fd5b80639f3e2dbc146101d1578063a5b30f36146101f1578063cb212b961461021157600080fd5b8063568ead73116100c8578063568ead73146101485780636879fbdf146101765780636a583e0e146101895780636c479424146101bc57600080fd5b806306c37c57146100ef5780633e5e2c61146101155780635020503114610135575b600080fd5b6101026100fd366004610e8c565b61027e565b6040519081526020015b60405180910390f35b610128610123366004610eb8565b610360565b60405161010c9190610ffb565b610102610143366004610e8c565b610441565b61015b610156366004610e8c565b6104f7565b6040805193845260208401929092529082015260600161010c565b610102610184366004610eb8565b6105e6565b61019c610197366004610e8c565b610650565b604080516001600160a01b0393841681529290911660208301520161010c565b6101cf6101ca366004610eb8565b61073b565b005b6101e46101df36600461105d565b6107a9565b60405161010c919061109f565b6102046101ff366004610e8c565b610a41565b60405161010c919061116c565b61022461021f366004610e8c565b610b66565b60405161010c9190611200565b61015b61023f366004610e8c565b610be2565b610257610252366004610e8c565b610c9f565b60405161010c9190611213565b6101cf610272366004610eb8565b610d14565b6020610102565b60405163439e23fd60e01b81526004810182905260009081906001600160a01b0385169063439e23fd90602401600060405180830381865afa1580156102c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f09190810190611505565b905080602001516001600160a01b03166351453f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610334573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035891906115d8565b949350505050565b6060600061036d836105e6565b905060008167ffffffffffffffff81111561038a5761038a61127f565b6040519080825280602002602001820160405280156103c357816020015b6103b0610d79565b8152602001906001900390816103a85790505b5090506103ce610d79565b6000805b84811015610436576103e48782610a41565b80519093506001600160a01b031615610424578284838151811061040a5761040a6115f1565b6020026020010181905250818061042090611607565b9250505b8061042e81611607565b9150506103d2565b509195945050505050565b60405163439e23fd60e01b81526004810182905260009081906001600160a01b0385169063439e23fd90602401600060405180830381865afa15801561048b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104b39190810190611505565b905080604001516001600160a01b03166311e715d66040518163ffffffff1660e01b8152600401602060405180830381865afa158015610334573d6000803e3d6000fd5b600080600080856001600160a01b031663439e23fd866040518263ffffffff1660e01b815260040161052b91815260200190565b600060405180830381865afa158015610548573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105709190810190611505565b905080602001516001600160a01b031663d85734466040518163ffffffff1660e01b8152600401606060405180830381865afa1580156105b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d89190611630565b935093509350509250925092565b6000816001600160a01b031663af640d0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610626573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064a91906115d8565b92915050565b6000806000846001600160a01b031663439e23fd856040518263ffffffff1660e01b815260040161068391815260200190565b600060405180830381865afa1580156106a0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106c89190810190611505565b905080602001516001600160a01b031663e9c52e586040518163ffffffff1660e01b81526004016040805180830381865afa15801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f919061165e565b92509250509250929050565b6000546001600160a01b031633146107875760405162461bcd60e51b815260040161077e906020808252600490820152630c2eae8d60e31b604082015260600190565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60405163439e23fd60e01b8152600481018390526060906000906001600160a01b0386169063439e23fd90602401600060405180830381865afa1580156107f4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261081c9190810190611505565b604080820151905163e62f558560e01b81526001600160a01b0386811660048301529293506000929091169063e62f558590602401600060405180830381865afa15801561086e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261089691908101906116aa565b90506000815167ffffffffffffffff8111156108b4576108b461127f565b60405190808252806020026020018201604052801561092b57816020015b604080516101208101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082015282526000199092019101816108d25790505b50905060005b8251811015610a365783604001516001600160a01b031663dcc3442987858481518110610960576109606115f1565b60200260200101516000015186858151811061097e5761097e6115f1565b60209081029190910181015101516040516001600160e01b031960e086901b1681526001600160a01b03909316600484015261ffff918216602484015216604482015260640161012060405180830381865afa1580156109e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a069190611786565b828281518110610a1857610a186115f1565b60200260200101819052508080610a2e90611607565b915050610931565b509695505050505050565b610a49610d79565b604051630452783960e11b8152600481018390526000906001600160a01b038516906308a4f07290602401600060405180830381865afa158015610a91573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ab99190810190611824565b90506000806000610aca87876104f7565b9250925092506000610adc8888610441565b905060405180610180016040528086600001516001600160a01b03168152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a0015181526020018660c0015181526020018660e001518152602001858152602001848152602001838152602001828152509550505050505092915050565b610b6e610de3565b604051630452783960e11b8152600481018390526001600160a01b038416906308a4f07290602401600060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bdb9190810190611824565b9392505050565b600080600080856001600160a01b031663439e23fd866040518263ffffffff1660e01b8152600401610c1691815260200190565b600060405180830381865afa158015610c33573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c5b9190810190611505565b905080602001516001600160a01b0316639a4585836040518163ffffffff1660e01b8152600401606060405180830381865afa1580156105b4573d6000803e3d6000fd5b610ca7610e31565b60405163439e23fd60e01b8152600481018390526001600160a01b0384169063439e23fd90602401600060405180830381865afa158015610cec573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bdb9190810190611505565b6000546001600160a01b03163314610d575760405162461bcd60e51b815260040161077e906020808252600490820152630c2eae8d60e31b604082015260600190565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60405180610180016040528060006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c08101610e6f610de3565b905290565b6001600160a01b0381168114610e8957600080fd5b50565b60008060408385031215610e9f57600080fd5b8235610eaa81610e74565b946020939093013593505050565b600060208284031215610eca57600080fd5b8135610bdb81610e74565b600081518084526020808501945080840160005b83811015610f0e5781516001600160a01b031687529582019590820190600101610ee9565b509495945050505050565b600081518084526020808501945080840160005b83811015610f0e57815187529582019590820190600101610f2d565b80516001600160a01b0316825260006101806020830151816020860152610f7282860182610ed5565b91505060408301518482036040860152610f8c8282610f19565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015181860152506101208084015181860152506101408084015181860152506101608084015181860152508091505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561105057603f1988860301845261103e858351610f49565b94509285019290850190600101611022565b5092979650505050505050565b60008060006060848603121561107257600080fd5b833561107d81610e74565b925060208401359150604084013561109481610e74565b809150509250925092565b602080825282518282018190526000919060409081850190868401855b8281101561115f57815180516001600160801b039081168652878201511687860152858101516110f6878701826001600160801b03169052565b506060818101516001600160801b0381168783015250506080818101516001600160801b03811687830152505060a0818101519086015260c0808201519086015260e08082015190860152610100908101519085015261012090930192908501906001016110bc565b5091979650505050505050565b602081526000610bdb6020830184610f49565b600061010060018060a01b03835116845260208301518160208601526111a782860182610ed5565b915050604083015184820360408601526111c18282610f19565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e08501528091505092915050565b602081526000610bdb602083018461117f565b60208152600060018060a01b038084511660208401528060208501511660408401528060408501511660608401528060608501511660808401528060808501511660a08401528060a08501511660c08401525060c083015160e08084015261035861010084018261117f565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156112b9576112b961127f565b60405290565b60405160e0810167ffffffffffffffff811182821017156112b9576112b961127f565b6040805190810167ffffffffffffffff811182821017156112b9576112b961127f565b604051610120810167ffffffffffffffff811182821017156112b9576112b961127f565b604051601f8201601f1916810167ffffffffffffffff811182821017156113525761135261127f565b604052919050565b805161136581610e74565b919050565b600067ffffffffffffffff8211156113845761138461127f565b5060051b60200190565b600082601f83011261139f57600080fd5b815160206113b46113af8361136a565b611329565b82815260059290921b840181019181810190868411156113d357600080fd5b8286015b84811015610a365780516113ea81610e74565b83529183019183016113d7565b600082601f83011261140857600080fd5b815160206114186113af8361136a565b82815260059290921b8401810191818101908684111561143757600080fd5b8286015b84811015610a36578051835291830191830161143b565b6000610100828403121561146557600080fd5b61146d611295565b90506114788261135a565b8152602082015167ffffffffffffffff8082111561149557600080fd5b6114a18583860161138e565b602084015260408401519150808211156114ba57600080fd5b506114c7848285016113f7565b604083015250606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015292915050565b60006020828403121561151757600080fd5b815167ffffffffffffffff8082111561152f57600080fd5b9083019060e0828603121561154357600080fd5b61154b6112bf565b6115548361135a565b81526115626020840161135a565b60208201526115736040840161135a565b60408201526115846060840161135a565b60608201526115956080840161135a565b60808201526115a660a0840161135a565b60a082015260c0830151828111156115bd57600080fd5b6115c987828601611452565b60c08301525095945050505050565b6000602082840312156115ea57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561162957634e487b7160e01b600052601160045260246000fd5b5060010190565b60008060006060848603121561164557600080fd5b8351925060208401519150604084015190509250925092565b6000806040838503121561167157600080fd5b825161167c81610e74565b602084015190925061168d81610e74565b809150509250929050565b805161ffff8116811461136557600080fd5b600060208083850312156116bd57600080fd5b825167ffffffffffffffff8111156116d457600080fd5b8301601f810185136116e557600080fd5b80516116f36113af8261136a565b81815260069190911b8201830190838101908783111561171257600080fd5b928401925b8284101561176457604084890312156117305760008081fd5b6117386112e2565b61174185611698565b815261174e868601611698565b8187015282526040939093019290840190611717565b979650505050505050565b80516001600160801b038116811461136557600080fd5b6000610120828403121561179957600080fd5b6117a1611305565b6117aa8361176f565b81526117b86020840161176f565b60208201526117c96040840161176f565b60408201526117da6060840161176f565b60608201526117eb6080840161176f565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006020828403121561183657600080fd5b815167ffffffffffffffff81111561184d57600080fd5b6103588482850161145256fea2646970667358221220b8c74dbd1615bc7c1a31e6eeb3fc3f74754ff73c45fa5e6f6c581f81588dab9864736f6c634300080a0033";