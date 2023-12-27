import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import * as React from "react"
import { Suspense } from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(StoreController)
  const storeId = params.id
  let data: JsonValue = {}
  try {
    unstable_noStore()
    const res = await client.getByID({
      ID: storeId
    })
    data = res.toJson()
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <Link href="/dashboard/store">一覧へ戻る</Link>
      <Suspense fallback={<Loading />}>
        <Form data={data} />
      </Suspense>
    </div>
  )
}
export default Page
