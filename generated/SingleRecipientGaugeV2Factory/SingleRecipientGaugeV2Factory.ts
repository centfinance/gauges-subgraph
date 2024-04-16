// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ArbitrumFeesModified extends ethereum.Event {
  get params(): ArbitrumFeesModified__Params {
    return new ArbitrumFeesModified__Params(this);
  }
}

export class ArbitrumFeesModified__Params {
  _event: ArbitrumFeesModified;

  constructor(event: ArbitrumFeesModified) {
    this._event = event;
  }

  get gasLimit(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get gasPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GaugeCreated extends ethereum.Event {
  get params(): GaugeCreated__Params {
    return new GaugeCreated__Params(this);
  }
}

export class GaugeCreated__Params {
  _event: GaugeCreated;

  constructor(event: GaugeCreated) {
    this._event = event;
  }

  get gauge(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SingleRecipientGaugeV2Factory__getArbitrumFeesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getGasLimit(): BigInt {
    return this.value0;
  }

  getGasPrice(): BigInt {
    return this.value1;
  }

  getMaxSubmissionCost(): BigInt {
    return this.value2;
  }
}

export class SingleRecipientGaugeV2Factory extends ethereum.SmartContract {
  static bind(address: Address): SingleRecipientGaugeV2Factory {
    return new SingleRecipientGaugeV2Factory(
      "SingleRecipientGaugeV2Factory",
      address
    );
  }

  create(recipient: Address, relativeWeightCap: BigInt): Address {
    let result = super.call("create", "create(address,uint256):(address)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(relativeWeightCap)
    ]);

    return result[0].toAddress();
  }

  try_create(
    recipient: Address,
    relativeWeightCap: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall("create", "create(address,uint256):(address)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(relativeWeightCap)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getActionId(selector: Bytes): Bytes {
    let result = super.call("getActionId", "getActionId(bytes4):(bytes32)", [
      ethereum.Value.fromFixedBytes(selector)
    ]);

    return result[0].toBytes();
  }

  try_getActionId(selector: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getActionId", "getActionId(bytes4):(bytes32)", [
      ethereum.Value.fromFixedBytes(selector)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getArbitrumFees(): SingleRecipientGaugeV2Factory__getArbitrumFeesResult {
    let result = super.call(
      "getArbitrumFees",
      "getArbitrumFees():(uint256,uint256,uint256)",
      []
    );

    return new SingleRecipientGaugeV2Factory__getArbitrumFeesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getArbitrumFees(): ethereum.CallResult<
    SingleRecipientGaugeV2Factory__getArbitrumFeesResult
  > {
    let result = super.tryCall(
      "getArbitrumFees",
      "getArbitrumFees():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SingleRecipientGaugeV2Factory__getArbitrumFeesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getAuthorizer(): Address {
    let result = super.call("getAuthorizer", "getAuthorizer():(address)", []);

    return result[0].toAddress();
  }

  try_getAuthorizer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAuthorizer",
      "getAuthorizer():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getGaugeImplementation(): Address {
    let result = super.call(
      "getGaugeImplementation",
      "getGaugeImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getGaugeImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getGaugeImplementation",
      "getGaugeImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getVault(): Address {
    let result = super.call("getVault", "getVault():(address)", []);

    return result[0].toAddress();
  }

  try_getVault(): ethereum.CallResult<Address> {
    let result = super.tryCall("getVault", "getVault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isGaugeFromFactory(gauge: Address): boolean {
    let result = super.call(
      "isGaugeFromFactory",
      "isGaugeFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(gauge)]
    );

    return result[0].toBoolean();
  }

  try_isGaugeFromFactory(gauge: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isGaugeFromFactory",
      "isGaugeFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(gauge)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get vault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get minter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get gatewayRouter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get gasPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get relativeWeightCap(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetArbitrumFeesCall extends ethereum.Call {
  get inputs(): SetArbitrumFeesCall__Inputs {
    return new SetArbitrumFeesCall__Inputs(this);
  }

  get outputs(): SetArbitrumFeesCall__Outputs {
    return new SetArbitrumFeesCall__Outputs(this);
  }
}

export class SetArbitrumFeesCall__Inputs {
  _call: SetArbitrumFeesCall;

  constructor(call: SetArbitrumFeesCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get gasPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetArbitrumFeesCall__Outputs {
  _call: SetArbitrumFeesCall;

  constructor(call: SetArbitrumFeesCall) {
    this._call = call;
  }
}
