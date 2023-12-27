// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Store.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message server.admin.StoreRegisterRequest
 */
export class StoreRegisterRequest extends Message<StoreRegisterRequest> {
  /**
   * @generated from field: string Name = 1;
   */
  Name = "";

  /**
   * @generated from field: optional string BranchName = 2;
   */
  BranchName?: string;

  /**
   * @generated from field: string ZipCode = 3;
   */
  ZipCode = "";

  /**
   * @generated from field: string Address = 4;
   */
  Address = "";

  /**
   * @generated from field: string Tel = 5;
   */
  Tel = "";

  /**
   * @generated from field: string SiteURL = 6;
   */
  SiteURL = "";

  /**
   * @generated from field: string StampImage = 7;
   */
  StampImage = "";

  /**
   * @generated from field: bool Stayable = 8;
   */
  Stayable = false;

  /**
   * @generated from field: bool IsActive = 9;
   */
  IsActive = false;

  /**
   * @generated from field: string QRCode = 10;
   */
  QRCode = "";

  /**
   * @generated from field: string UnLimitedQRCode = 11;
   */
  UnLimitedQRCode = "";

  /**
   * @generated from field: optional server.admin.StayableInfo StayableInfo = 12;
   */
  StayableInfo?: StayableInfo;

  constructor(data?: PartialMessage<StoreRegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.StoreRegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "BranchName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "SiteURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "StampImage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "Stayable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "IsActive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "QRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "UnLimitedQRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "StayableInfo", kind: "message", T: StayableInfo, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreRegisterRequest {
    return new StoreRegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreRegisterRequest {
    return new StoreRegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreRegisterRequest {
    return new StoreRegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StoreRegisterRequest | PlainMessage<StoreRegisterRequest> | undefined, b: StoreRegisterRequest | PlainMessage<StoreRegisterRequest> | undefined): boolean {
    return proto3.util.equals(StoreRegisterRequest, a, b);
  }
}

/**
 * @generated from message server.admin.StoreUpdateRequest
 */
export class StoreUpdateRequest extends Message<StoreUpdateRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string Name = 2;
   */
  Name = "";

  /**
   * @generated from field: optional string BranchName = 3;
   */
  BranchName?: string;

  /**
   * @generated from field: string ZipCode = 4;
   */
  ZipCode = "";

  /**
   * @generated from field: string Address = 5;
   */
  Address = "";

  /**
   * @generated from field: string Tel = 6;
   */
  Tel = "";

  /**
   * @generated from field: string SiteURL = 7;
   */
  SiteURL = "";

  /**
   * @generated from field: string StampImage = 8;
   */
  StampImage = "";

  /**
   * @generated from field: bool Stayable = 9;
   */
  Stayable = false;

  /**
   * @generated from field: bool IsActive = 10;
   */
  IsActive = false;

  /**
   * @generated from field: string QRCode = 11;
   */
  QRCode = "";

  /**
   * @generated from field: string UnLimitedQRCode = 12;
   */
  UnLimitedQRCode = "";

  /**
   * @generated from field: server.admin.StayableInfo StayableInfo = 13;
   */
  StayableInfo?: StayableInfo;

  constructor(data?: PartialMessage<StoreUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.StoreUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "BranchName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "SiteURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "StampImage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "Stayable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "IsActive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "QRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "UnLimitedQRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "StayableInfo", kind: "message", T: StayableInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreUpdateRequest {
    return new StoreUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreUpdateRequest {
    return new StoreUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreUpdateRequest {
    return new StoreUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StoreUpdateRequest | PlainMessage<StoreUpdateRequest> | undefined, b: StoreUpdateRequest | PlainMessage<StoreUpdateRequest> | undefined): boolean {
    return proto3.util.equals(StoreUpdateRequest, a, b);
  }
}

/**
 * @generated from message server.admin.StayableInfo
 */
export class StayableInfo extends Message<StayableInfo> {
  /**
   * @generated from field: string Parking = 1;
   */
  Parking = "";

  /**
   * @generated from field: double Latitude = 2;
   */
  Latitude = 0;

  /**
   * @generated from field: double Longitude = 3;
   */
  Longitude = 0;

  /**
   * @generated from field: string AccessInfo = 4;
   */
  AccessInfo = "";

  /**
   * @generated from field: string RestAPIURL = 5;
   */
  RestAPIURL = "";

  /**
   * @generated from field: string BookingSystemID = 6;
   */
  BookingSystemID = "";

  constructor(data?: PartialMessage<StayableInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.StayableInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Parking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "Longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "AccessInfo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "RestAPIURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "BookingSystemID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StayableInfo {
    return new StayableInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StayableInfo {
    return new StayableInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StayableInfo {
    return new StayableInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StayableInfo | PlainMessage<StayableInfo> | undefined, b: StayableInfo | PlainMessage<StayableInfo> | undefined): boolean {
    return proto3.util.equals(StayableInfo, a, b);
  }
}

/**
 * @generated from message server.admin.SoreIDRequest
 */
export class SoreIDRequest extends Message<SoreIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<SoreIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.SoreIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SoreIDRequest | PlainMessage<SoreIDRequest> | undefined, b: SoreIDRequest | PlainMessage<SoreIDRequest> | undefined): boolean {
    return proto3.util.equals(SoreIDRequest, a, b);
  }
}

/**
 * @generated from message server.admin.QRResponse
 */
export class QRResponse extends Message<QRResponse> {
  /**
   * @generated from field: string QRCode = 1;
   */
  QRCode = "";

  constructor(data?: PartialMessage<QRResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.QRResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "QRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QRResponse {
    return new QRResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QRResponse {
    return new QRResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QRResponse {
    return new QRResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QRResponse | PlainMessage<QRResponse> | undefined, b: QRResponse | PlainMessage<QRResponse> | undefined): boolean {
    return proto3.util.equals(QRResponse, a, b);
  }
}

/**
 * @generated from message server.admin.UnlimitQRResponse
 */
export class UnlimitQRResponse extends Message<UnlimitQRResponse> {
  /**
   * @generated from field: string UnlimitQRCode = 1;
   */
  UnlimitQRCode = "";

  constructor(data?: PartialMessage<UnlimitQRResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UnlimitQRResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "UnlimitQRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnlimitQRResponse {
    return new UnlimitQRResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnlimitQRResponse {
    return new UnlimitQRResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnlimitQRResponse {
    return new UnlimitQRResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnlimitQRResponse | PlainMessage<UnlimitQRResponse> | undefined, b: UnlimitQRResponse | PlainMessage<UnlimitQRResponse> | undefined): boolean {
    return proto3.util.equals(UnlimitQRResponse, a, b);
  }
}

