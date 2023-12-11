// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Banner.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message server.user.Banner
 */
export class Banner extends Message<Banner> {
  /**
   * @generated from field: string ImageURL = 1;
   */
  ImageURL = "";

  /**
   * @generated from field: string URL = 2;
   */
  URL = "";

  constructor(data?: PartialMessage<Banner>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.Banner";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ImageURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "URL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Banner {
    return new Banner().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Banner {
    return new Banner().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Banner {
    return new Banner().fromJsonString(jsonString, options);
  }

  static equals(a: Banner | PlainMessage<Banner> | undefined, b: Banner | PlainMessage<Banner> | undefined): boolean {
    return proto3.util.equals(Banner, a, b);
  }
}

/**
 * @generated from message server.user.BannerResponse
 */
export class BannerResponse extends Message<BannerResponse> {
  /**
   * @generated from field: repeated server.user.Banner banners = 1;
   */
  banners: Banner[] = [];

  constructor(data?: PartialMessage<BannerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.BannerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "banners", kind: "message", T: Banner, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BannerResponse {
    return new BannerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BannerResponse {
    return new BannerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BannerResponse {
    return new BannerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BannerResponse | PlainMessage<BannerResponse> | undefined, b: BannerResponse | PlainMessage<BannerResponse> | undefined): boolean {
    return proto3.util.equals(BannerResponse, a, b);
  }
}
