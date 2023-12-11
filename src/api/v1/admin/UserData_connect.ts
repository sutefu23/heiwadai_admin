// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/UserData.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UserDataResponse, UserDeleteRequest, UserListFilterRequest, UserListResponse, UserUpdateDataRequest } from "./UserData_pb.ts";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service server.admin.UserDataController
 */
export const UserDataController = {
  typeName: "server.admin.UserDataController",
  methods: {
    /**
     * @generated from rpc server.admin.UserDataController.Update
     */
    update: {
      name: "Update",
      I: UserUpdateDataRequest,
      O: UserDataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.UserDataController.Delete
     */
    delete: {
      name: "Delete",
      I: UserDeleteRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.UserDataController.GetList
     */
    getList: {
      name: "GetList",
      I: UserListFilterRequest,
      O: UserListResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
