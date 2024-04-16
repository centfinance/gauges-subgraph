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

export class GaugeV2Factory extends ethereum.SmartContract {
  static bind(address: Address): GaugeV2Factory {
    return new GaugeV2Factory("GaugeV2Factory", address);
  }

  create(pool: Address, relativeWeightCap: BigInt): Address {
    let result = super.call("create", "create(address,uint256):(address)", [
      ethereum.Value.fromAddress(pool),
      ethereum.Value.fromUnsignedBigInt(relativeWeightCap)
    ]);

    return result[0].toAddress();
  }

  try_create(
    pool: Address,
    relativeWeightCap: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall("create", "create(address,uint256):(address)", [
      ethereum.Value.fromAddress(pool),
      ethereum.Value.fromUnsignedBigInt(relativeWeightCap)
    ]);
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

  get gauge(): Address {
    return this._call.inputValues[0].value.toAddress();
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

  get pool(): Address {
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
