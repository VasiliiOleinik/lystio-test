import QueryClientWrapper from "@/components/QueryClientWrapper";
import "./globals.css";
import {Plus_Jakarta_Sans} from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <QueryClientWrapper>
          {children}
        </QueryClientWrapper>
      </body>
    </html>
  );
}