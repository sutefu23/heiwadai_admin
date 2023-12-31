// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Coupon.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AffectedCountResponse, CouponIDRequest, CreateCustomCouponRequest, UserAttachedCouponsResponse, UserIDRequest } from "./Coupon_pb.ts";

/**
 * @generated from rpc server.admin.AdminCouponController.GetUserCouponList
 */
export const getUserCouponList = {
  localName: "getUserCouponList",
  name: "GetUserCouponList",
  kind: MethodKind.Unary,
  I: UserIDRequest,
  O: UserAttachedCouponsResponse,
  service: {
    typeName: "server.admin.AdminCouponController"
  }
} as const;

/**
 * @generated from rpc server.admin.AdminCouponController.CreateCustomCoupon
 */
export const createCustomCoupon = {
  localName: "createCustomCoupon",
  name: "CreateCustomCoupon",
  kind: MethodKind.Unary,
  I: CreateCustomCouponRequest,
  O: Empty,
  service: {
    typeName: "server.admin.AdminCouponController"
  }
} as const;

/**
 * @generated from rpc server.admin.AdminCouponController.SaveCustomCoupon
 */
export const saveCustomCoupon = {
  localName: "saveCustomCoupon",
  name: "SaveCustomCoupon",
  kind: MethodKind.Unary,
  I: CouponIDRequest,
  O: Empty,
  service: {
    typeName: "server.admin.AdminCouponController"
  }
} as const;

/**
 * @generated from rpc server.admin.AdminCouponController.AttachCustomCouponToAllUser
 */
export const attachCustomCouponToAllUser = {
  localName: "attachCustomCouponToAllUser",
  name: "AttachCustomCouponToAllUser",
  kind: MethodKind.Unary,
  I: CouponIDRequest,
  O: AffectedCountResponse,
  service: {
    typeName: "server.admin.AdminCouponController"
  }
} as const;
