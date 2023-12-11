// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/UserData.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UserDataResponse, UserUpdateDataRequest } from "./UserData_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service server.user.UserDataController
 */
export const UserDataController = {
  typeName: "server.user.UserDataController",
  methods: {
    /**
     * ユーザー情報の更新
     *
     * @generated from rpc server.user.UserDataController.Update
     */
    update: {
      name: "Update",
      I: UserUpdateDataRequest,
      O: UserDataResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

