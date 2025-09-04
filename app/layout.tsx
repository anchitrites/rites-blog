import "./globals.css";

import { Source_Code_Pro } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const sourceCodePro = Source_Code_Pro({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Anchit Rites's blog",
  description:
    "Anchit Rites is a software engineer and developer passionate about creating innovative web applications and sharing knowledge through writing.",
  openGraph: {
    title: "Anchit Rites's blog",
    description:
      "Anchit Rites is a software engineer and developer passionate about creating innovative web applications and sharing knowledge through writing.",
    url: "https://rites-blog-5u1mc9lgx-anchitrites-projects.vercel.app",
    siteName: "Anchit Rites's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@anchitrites",
    creator: "@anchitrites",
  },
  metadataBase: new URL("https://rites-blog-5u1mc9lgx-anchitrites-projects.vercel.app"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceCodePro.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
