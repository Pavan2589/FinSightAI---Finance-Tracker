import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "FinsightAI",
  description: "Your Finance buddy",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          {/* header */}
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          {/* footer */}
          <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4 text-center text-white">
              <p>Made by Pavan kumar M</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
 