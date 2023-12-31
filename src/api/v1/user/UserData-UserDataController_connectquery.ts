// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/UserData.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { UserDataResponse, UserUpdateDataRequest } from "./UserData_pb.ts";

/**
 * ユーザー情報の更新
 *
 * @generated from rpc server.user.UserDataController.Update
 */
export const update = {
  localName: "update",
  name: "Update",
  kind: MethodKind.Unary,
  I: UserUpdateDataRequest,
  O: UserDataResponse,
  service: {
    typeName: "server.user.UserDataController"
  }
} as const;
