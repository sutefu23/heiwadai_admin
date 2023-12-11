// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Auth.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message server.user.UserAuthRequest
 */
export class UserAuthRequest extends Message<UserAuthRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<UserAuthRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UserAuthRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserAuthRequest {
    return new UserAuthRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserAuthRequest {
    return new UserAuthRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserAuthRequest {
    return new UserAuthRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserAuthRequest | PlainMessage<UserAuthRequest> | undefined, b: UserAuthRequest | PlainMessage<UserAuthRequest> | undefined): boolean {
    return proto3.util.equals(UserAuthRequest, a, b);
  }
}

/**
 * @generated from message server.user.RefreshTokenRequest
 */
export class RefreshTokenRequest extends Message<RefreshTokenRequest> {
  /**
   * @generated from field: string refreshToken = 1;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<RefreshTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.RefreshTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "refreshToken", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined, b: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined): boolean {
    return proto3.util.equals(RefreshTokenRequest, a, b);
  }
}

/**
 * @generated from message server.user.UserAuthResponse
 */
export class UserAuthResponse extends Message<UserAuthResponse> {
  /**
   * @generated from field: string accessToken = 1;
   */
  accessToken = "";

  /**
   * @generated from field: int64 expiresIn = 2;
   */
  expiresIn = protoInt64.zero;

  /**
   * @generated from field: string refreshToken = 3;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<UserAuthResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UserAuthResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accessToken", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiresIn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "refreshToken", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserAuthResponse {
    return new UserAuthResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserAuthResponse {
    return new UserAuthResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserAuthResponse {
    return new UserAuthResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserAuthResponse | PlainMessage<UserAuthResponse> | undefined, b: UserAuthResponse | PlainMessage<UserAuthResponse> | undefined): boolean {
    return proto3.util.equals(UserAuthResponse, a, b);
  }
}

/**
 * @generated from message server.user.ResetPasswordRequest
 */
export class ResetPasswordRequest extends Message<ResetPasswordRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  constructor(data?: PartialMessage<ResetPasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.ResetPasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined, b: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined): boolean {
    return proto3.util.equals(ResetPasswordRequest, a, b);
  }
}

/**
 * @generated from message server.user.UpdatePasswordRequest
 */
export class UpdatePasswordRequest extends Message<UpdatePasswordRequest> {
  /**
   * @generated from field: string password = 1;
   */
  password = "";

  constructor(data?: PartialMessage<UpdatePasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UpdatePasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePasswordRequest {
    return new UpdatePasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePasswordRequest {
    return new UpdatePasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePasswordRequest {
    return new UpdatePasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdatePasswordRequest | PlainMessage<UpdatePasswordRequest> | undefined, b: UpdatePasswordRequest | PlainMessage<UpdatePasswordRequest> | undefined): boolean {
    return proto3.util.equals(UpdatePasswordRequest, a, b);
  }
}

/**
 * @generated from message server.user.UpdateEmailRequest
 */
export class UpdateEmailRequest extends Message<UpdateEmailRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  constructor(data?: PartialMessage<UpdateEmailRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UpdateEmailRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEmailRequest {
    return new UpdateEmailRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEmailRequest {
    return new UpdateEmailRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEmailRequest {
    return new UpdateEmailRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateEmailRequest | PlainMessage<UpdateEmailRequest> | undefined, b: UpdateEmailRequest | PlainMessage<UpdateEmailRequest> | undefined): boolean {
    return proto3.util.equals(UpdateEmailRequest, a, b);
  }
}

