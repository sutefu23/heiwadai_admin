// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Banner.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { BannerResponse } from "./Banner_pb.ts";

/**
 * @generated from service server.user.BannerController
 */
export const BannerController = {
  typeName: "server.user.BannerController",
  methods: {
    /**
     * @generated from rpc server.user.BannerController.GetBanner
     */
    getBanner: {
      name: "GetBanner",
      I: Empty,
      O: BannerResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

