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

export class Checkpoint extends ethereum.Event {
  get params(): Checkpoint__Params {
    return new Checkpoint__Params(this);
  }
}

export class Checkpoint__Params {
  _event: Checkpoint;

  constructor(event: Checkpoint) {
    this._event = event;
  }

  get periodTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get periodEmissions(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ArbitrumRootGauge extends ethereum.SmartContract {
  static bind(address: Address): ArbitrumRootGauge {
    return new ArbitrumRootGauge("ArbitrumRootGauge", address);
  }

  getRecipient(): Address {
    let result = super.call("getRecipient", "getRecipient():(address)", []);

    return result[0].toAddress();
  }

  try_getRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall("getRecipient", "getRecipient():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTotalBridgeCost(): BigInt {
    let result = super.call(
      "getTotalBridgeCost",
      "getTotalBridgeCost():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalBridgeCost(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalBridgeCost",
      "getTotalBridgeCost():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  integrate_fraction(user: Address): BigInt {
    let result = super.call(
      "integrate_fraction",
      "integrate_fraction(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_integrate_fraction(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "integrate_fraction",
      "integrate_fraction(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  is_killed(): boolean {
    let result = super.call("is_killed", "is_killed():(bool)", []);

    return result[0].toBoolean();
  }

  try_is_killed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("is_killed", "is_killed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  user_checkpoint(param0: Address): boolean {
    let result = super.call(
      "user_checkpoint",
      "user_checkpoint(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_user_checkpoint(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "user_checkpoint",
      "user_checkpoint(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
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

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gatewayRouter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CheckpointCall extends ethereum.Call {
  get inputs(): CheckpointCall__Inputs {
    return new CheckpointCall__Inputs(this);
  }

  get outputs(): CheckpointCall__Outputs {
    return new CheckpointCall__Outputs(this);
  }
}

export class CheckpointCall__Inputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }
}

export class CheckpointCall__Outputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class KillGaugeCall extends ethereum.Call {
  get inputs(): KillGaugeCall__Inputs {
    return new KillGaugeCall__Inputs(this);
  }

  get outputs(): KillGaugeCall__Outputs {
    return new KillGaugeCall__Outputs(this);
  }
}

export class KillGaugeCall__Inputs {
  _call: KillGaugeCall;

  constructor(call: KillGaugeCall) {
    this._call = call;
  }
}

export class KillGaugeCall__Outputs {
  _call: KillGaugeCall;

  constructor(call: KillGaugeCall) {
    this._call = call;
  }
}

export class UnkillGaugeCall extends ethereum.Call {
  get inputs(): UnkillGaugeCall__Inputs {
    return new UnkillGaugeCall__Inputs(this);
  }

  get outputs(): UnkillGaugeCall__Outputs {
    return new UnkillGaugeCall__Outputs(this);
  }
}

export class UnkillGaugeCall__Inputs {
  _call: UnkillGaugeCall;

  constructor(call: UnkillGaugeCall) {
    this._call = call;
  }
}

export class UnkillGaugeCall__Outputs {
  _call: UnkillGaugeCall;

  constructor(call: UnkillGaugeCall) {
    this._call = call;
  }
}
