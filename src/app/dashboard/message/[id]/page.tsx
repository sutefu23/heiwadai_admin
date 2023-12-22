import * as React from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(MessageController)
  const messageId = params.id
  let message: MessageResponse | undefined
  try {
    const res = await client.getByID({
      ID: messageId
    })
    message = res
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <Form data={message} data-superjson />
    </div>
  )
}
export default Page
