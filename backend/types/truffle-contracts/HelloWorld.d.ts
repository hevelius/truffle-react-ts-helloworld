/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface HelloWorldContract
  extends Truffle.Contract<HelloWorldInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<HelloWorldInstance>;
}

type AllEvents = never;

export interface HelloWorldInstance extends Truffle.ContractInstance {
  getHelloWorld(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setHelloWorld: {
    (helloText: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      helloText: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      helloText: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      helloText: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    getHelloWorld(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setHelloWorld: {
      (helloText: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        helloText: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        helloText: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        helloText: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
