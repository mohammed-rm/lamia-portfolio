import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";
import PageNavbar from "@/components/layout/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lamia Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-100 bg-cover bg-no-repeat flex flex-col overflow-x-hidden overflow-y-scroll 
        lg:scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-500`}
      >
        <Providers>
          <ActiveSectionContextProvider>
            <Toaster richColors position="top-right" />
            <div className="font-playpen">
              <PageNavbar />
              {children}
            </div>
            <Footer />
          </ActiveSectionContextProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
