import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    icons: [
      {
        url: "logo.svg",
        type: "image/xml+svg",
        sizes: "any",
      },
    ],
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
