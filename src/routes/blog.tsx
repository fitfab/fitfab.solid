import { JSX } from "solid-js"

export default function BlogLayout(props: { children: JSX.Element }) {
  return <div class=" text-gray-900">{props.children}</div>
}
