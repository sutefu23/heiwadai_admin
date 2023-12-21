// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Auth.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { RefreshTokenRequest, UpdateEmailRequest, UpdatePasswordRequest, UserAuthTokenResponse } from "./Auth_pb.ts";

/**
 * @generated from service server.user.AuthController
 */
export const AuthController = {
  typeName: "server.user.AuthController",
  methods: {
    /**
     * ログアウト
     *
     * @generated from rpc server.user.AuthController.SignOut
     */
    signOut: {
      name: "SignOut",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * リフレッシュトークンを使ってアクセストークンを更新する（通常は通信ヘッダーを用いて自動でリフレッシュしている）
     *
     * @generated from rpc server.user.AuthController.Refresh
     */
    refresh: {
      name: "Refresh",
      I: RefreshTokenRequest,
      O: UserAuthTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * パスワードアップデート
     *
     * @generated from rpc server.user.AuthController.UpdatePassword
     */
    updatePassword: {
      name: "UpdatePassword",
      I: UpdatePasswordRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * メールアドレス更新（認証メールが飛ぶ）
     *
     * @generated from rpc server.user.AuthController.UpdateEmail
     */
    updateEmail: {
      name: "UpdateEmail",
      I: UpdateEmailRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

