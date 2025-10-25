import { createSignal } from "solid-js"

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <button
      class="bg-pink-400/40 min-w-22 min-h-8 w-100 relative overflow-hidden px-4 py-2 text-white rounded-full
      before:bg-gradient-to-b before:from-blue-400-200 before:to-pink-400 before:absolute before:inset-[-500px] before:rounded-full
      before:content-[''] before:animate-spin before:z-0 before:transition-all"
      onClick={() => setCount(count() + 1)}
      type="button"
    >
      <span class="absolute z-100 inset-1 rounded-full bg-pink-500 block ">
        Clicks : {count()}
      </span>
    </button>
  )
}
