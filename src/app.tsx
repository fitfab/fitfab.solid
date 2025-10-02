import { MetaProvider, Title } from "@solidjs/meta"
import { Router, RouteSectionProps } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./app.css"

function Layout(props: RouteSectionProps) {
  return (
    <>
      <header class="bg-white shadow p-4 mb-8">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold">
            <a href="/" class="text-blue-600 hover:underline mr-4">
              Fitfab
            </a>
          </h1>
          <nav>
            <a href="/about" class="text-blue-600 hover:underline mr-4">
              About
            </a>
            <a href="/blog" class="text-blue-600 hover:underline">
              Blog
            </a>
          </nav>
        </div>
      </header>
      <main class="container mx-auto min-h-screen">
        <Suspense>{props.children}</Suspense>
      </main>
      <footer class="mt-12 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </footer>
    </>
  )
}
export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>fitfab by Miguel Julio</Title>
          <Layout {...props}></Layout>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
