// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Messages.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { MessageRequest, MessagesResponse } from "./Messages_pb.ts";

/**
 * 　ポップアップメッセージのリストを取得する（最後に取得したIDを元にリクエスト）
 *
 * @generated from rpc server.user.MessageController.GetMessagesAfter
 */
export const getMessagesAfter = {
  localName: "getMessagesAfter",
  name: "GetMessagesAfter",
  kind: MethodKind.Unary,
  I: MessageRequest,
  O: MessagesResponse,
  service: {
    typeName: "server.user.MessageController"
  }
} as const;
