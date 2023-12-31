import * as React from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import { MailMagazine } from "@/api/v1/admin/MailMagazine_pb"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(MailMagazineController)
  const magazineId = params.id
  let magazine: MailMagazine | undefined
  try {
    const res = await client.getByID({
      ID: magazineId
    })
    magazine = res
  } catch (error) {
    alert("エラーが発生しました。")
    console.error(error)
  }
  return (
    <div className="w-full">
      <Form data={magazine?.toJson()} />
    </div>
  )
}
export default Page
