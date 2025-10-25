import { Title } from "@solidjs/meta"
import Counter from "~/components/Counter"

export default function Home() {
  return (
    <main>
      <Title>Fitfab by Miguel Julio</Title>
      <h1 class="text-4xl font-bold text-pink-600">Welcome to Fitfab</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>
      </p>
    </main>
  )
}
