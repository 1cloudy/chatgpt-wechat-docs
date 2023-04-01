import SearchDialog from "@/components/client/search";
import { allDocs, Doc } from "@/app/content";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Inter } from "@next/font/google";
import Link from "next/link";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { Logo } from "../components/server/logo";
import "./globals.css";
import { SidebarButton } from "@/components/client/buttons";
import { DrawerId } from "@/lib/id";
import Analytics from "@/components/client/analytics";
import ToastHolder from "@/components/client/toaster";

const title = "ChatGPT For WeChat";
const description =
  "使用ChatGPT For WeChat插件，可以轻松将 ChatGPT 轻松地整合到您的微信中。";
const url = "https://docs.aow.me";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: "ChatGPT For WeChat",
    images: [
      {
        url: "https://docs.aow.me/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png ",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@ottimogo",
  },
};

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
});

async function getData() {
  var sidebar: Map<string, Doc[]> = new Map();
  allDocs.forEach((doc) => {
    var category = sidebar.get(doc.category);
    if (category == undefined) {
      category = [];
      sidebar.set(doc.category, category);
    }
    category.push(doc);
  });
  return sidebar;
}

// Root layout for the regular website
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  // Get the current page's URL

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="drawer drawer-mobile">
          <input id={DrawerId} type="checkbox" className="drawer-toggle" />
          <div className="drawer-content min-h-screen overflow-hidden">
            <MobileHeader />
            <main className="min-h-screen p-8">{children}</main>
            <Footer />
          </div>
          <div className="drawer-side border-r">
            <label htmlFor={DrawerId} className="drawer-overlay w-full"></label>
            <div className="p-4 space-y-8  w-4/5 sm:w-full bg-base-100 text-base-content">
              <div className="flex items-center justify-center px-6">
                <Link href="http://aow.me" className="flex items-center">
                  <Logo className="h-10" />
                  <span className="ml-2 text-lg font-medium">
                    ChatGPT For WeChat
                  </span>
                </Link>{" "}
              </div>

              <div className="flex items-center justify-start">
                <SearchDialog />
              </div>

              <ul className="menu menu-sm">
                {Array.from(data.keys()).map((category) => (
                  <>
                    <li className="menu-title" key={category}>
                      <span>{category.toUpperCase()}</span>
                    </li>
                    <>
                      {data
                        .get(category)
                        ?.sort((a, b) => a.priority - b.priority)
                        .map((doc, i) => (
                          <SidebarButton key={i} doc={doc} />
                        ))}
                    </>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Analytics />
        <ToastHolder />
      </body>
    </html>
  );
}

function MobileHeader() {
  return (
    <header className="navbar lg:hidden ">
      <section className="navbar-start">
        <label htmlFor={DrawerId} className="btn btn-link btn-action">
          <Bars3Icon className="h-6 w-6" />
        </label>
      </section>
    </header>
  );
}

function Footer() {
  const navigation = {
    // Keep multiples of 4
    // TODO add one more
    main: [
      { name: "首页", href: "https://aow.me" },
      { name: "使用指南", href: "/" },
      { name: "支持", href: "mailto:support@aow.me" },
      { name: "隐私", href: "https://aow.me/privacy" },
    ],
  };
  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-base-100">
      <div className="grid grid-cols-4 gap-4">
        {navigation.main.map((item) => (
          <Link key={item.name} href={item.href} className="link link-hover">
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <SocialIcon url="https://twitter.com/ottimogo" />
          <SocialIcon
            url="https://chat.whatsapp.com/EfstaVv9xWt5DbMLTJushi"
            network="whatsapp"
          />
        </div>
      </div>
      <div>
        <p>
          {" "}
          Copyright &copy; {new Date().getFullYear()} AOW.me, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
