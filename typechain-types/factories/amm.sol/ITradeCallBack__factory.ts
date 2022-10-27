/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITradeCallBack,
  ITradeCallBackInterface,
} from "../../amm.sol/ITradeCallBack";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "tradeCallBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITradeCallBack__factory {
  static readonly abi = _abi;
  static createInterface(): ITradeCallBackInterface {
    return new utils.Interface(_abi) as ITradeCallBackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITradeCallBack {
    return new Contract(address, _abi, signerOrProvider) as ITradeCallBack;
  }
}