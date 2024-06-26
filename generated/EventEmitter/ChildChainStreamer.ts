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

export class RewardDistributorUpdated extends ethereum.Event {
  get params(): RewardDistributorUpdated__Params {
    return new RewardDistributorUpdated__Params(this);
  }
}

export class RewardDistributorUpdated__Params {
  _event: RewardDistributorUpdated;

  constructor(event: RewardDistributorUpdated) {
    this._event = event;
  }

  get reward_token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get distributor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardDurationUpdated extends ethereum.Event {
  get params(): RewardDurationUpdated__Params {
    return new RewardDurationUpdated__Params(this);
  }
}

export class RewardDurationUpdated__Params {
  _event: RewardDurationUpdated;

  constructor(event: RewardDurationUpdated) {
    this._event = event;
  }

  get reward_token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get duration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ChildChainStreamer__reward_dataResultValue0Struct extends ethereum.Tuple {
  get distributor(): Address {
    return this[0].toAddress();
  }

  get period_finish(): BigInt {
    return this[1].toBigInt();
  }

  get rate(): BigInt {
    return this[2].toBigInt();
  }

  get duration(): BigInt {
    return this[3].toBigInt();
  }

  get received(): BigInt {
    return this[4].toBigInt();
  }

  get paid(): BigInt {
    return this[5].toBigInt();
  }
}

export class ChildChainStreamer extends ethereum.SmartContract {
  static bind(address: Address): ChildChainStreamer {
    return new ChildChainStreamer("ChildChainStreamer", address);
  }

  reward_receiver(): Address {
    let result = super.call(
      "reward_receiver",
      "reward_receiver():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_reward_receiver(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "reward_receiver",
      "reward_receiver():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reward_tokens(arg0: BigInt): Address {
    let result = super.call(
      "reward_tokens",
      "reward_tokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(arg0)]
    );

    return result[0].toAddress();
  }

  try_reward_tokens(arg0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "reward_tokens",
      "reward_tokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(arg0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reward_count(): BigInt {
    let result = super.call("reward_count", "reward_count():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reward_count(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("reward_count", "reward_count():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  reward_data(
    arg0: Address
  ): ChildChainStreamer__reward_dataResultValue0Struct {
    let result = super.call(
      "reward_data",
      "reward_data(address):((address,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(arg0)]
    );

    return changetype<ChildChainStreamer__reward_dataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_reward_data(
    arg0: Address
  ): ethereum.CallResult<ChildChainStreamer__reward_dataResultValue0Struct> {
    let result = super.tryCall(
      "reward_data",
      "reward_data(address):((address,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromAddress(arg0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ChildChainStreamer__reward_dataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  last_update_time(): BigInt {
    let result = super.call(
      "last_update_time",
      "last_update_time():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_last_update_time(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "last_update_time",
      "last_update_time():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get _bal_token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _authorizerAdaptor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class Add_rewardCall extends ethereum.Call {
  get inputs(): Add_rewardCall__Inputs {
    return new Add_rewardCall__Inputs(this);
  }

  get outputs(): Add_rewardCall__Outputs {
    return new Add_rewardCall__Outputs(this);
  }
}

export class Add_rewardCall__Inputs {
  _call: Add_rewardCall;

  constructor(call: Add_rewardCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _distributor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class Add_rewardCall__Outputs {
  _call: Add_rewardCall;

  constructor(call: Add_rewardCall) {
    this._call = call;
  }
}

export class Remove_rewardCall extends ethereum.Call {
  get inputs(): Remove_rewardCall__Inputs {
    return new Remove_rewardCall__Inputs(this);
  }

  get outputs(): Remove_rewardCall__Outputs {
    return new Remove_rewardCall__Outputs(this);
  }
}

export class Remove_rewardCall__Inputs {
  _call: Remove_rewardCall;

  constructor(call: Remove_rewardCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class Remove_rewardCall__Outputs {
  _call: Remove_rewardCall;

  constructor(call: Remove_rewardCall) {
    this._call = call;
  }
}

export class Get_rewardCall extends ethereum.Call {
  get inputs(): Get_rewardCall__Inputs {
    return new Get_rewardCall__Inputs(this);
  }

  get outputs(): Get_rewardCall__Outputs {
    return new Get_rewardCall__Outputs(this);
  }
}

export class Get_rewardCall__Inputs {
  _call: Get_rewardCall;

  constructor(call: Get_rewardCall) {
    this._call = call;
  }
}

export class Get_rewardCall__Outputs {
  _call: Get_rewardCall;

  constructor(call: Get_rewardCall) {
    this._call = call;
  }
}

export class Notify_reward_amountCall extends ethereum.Call {
  get inputs(): Notify_reward_amountCall__Inputs {
    return new Notify_reward_amountCall__Inputs(this);
  }

  get outputs(): Notify_reward_amountCall__Outputs {
    return new Notify_reward_amountCall__Outputs(this);
  }
}

export class Notify_reward_amountCall__Inputs {
  _call: Notify_reward_amountCall;

  constructor(call: Notify_reward_amountCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Notify_reward_amountCall__Outputs {
  _call: Notify_reward_amountCall;

  constructor(call: Notify_reward_amountCall) {
    this._call = call;
  }
}

export class Set_reward_durationCall extends ethereum.Call {
  get inputs(): Set_reward_durationCall__Inputs {
    return new Set_reward_durationCall__Inputs(this);
  }

  get outputs(): Set_reward_durationCall__Outputs {
    return new Set_reward_durationCall__Outputs(this);
  }
}

export class Set_reward_durationCall__Inputs {
  _call: Set_reward_durationCall;

  constructor(call: Set_reward_durationCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Set_reward_durationCall__Outputs {
  _call: Set_reward_durationCall;

  constructor(call: Set_reward_durationCall) {
    this._call = call;
  }
}

export class Set_reward_distributorCall extends ethereum.Call {
  get inputs(): Set_reward_distributorCall__Inputs {
    return new Set_reward_distributorCall__Inputs(this);
  }

  get outputs(): Set_reward_distributorCall__Outputs {
    return new Set_reward_distributorCall__Outputs(this);
  }
}

export class Set_reward_distributorCall__Inputs {
  _call: Set_reward_distributorCall;

  constructor(call: Set_reward_distributorCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _distributor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class Set_reward_distributorCall__Outputs {
  _call: Set_reward_distributorCall;

  constructor(call: Set_reward_distributorCall) {
    this._call = call;
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

  get reward_receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}
