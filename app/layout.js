import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

export const metadata = {
  title: "StudyMaster — Tư Tưởng Hồ Chí Minh",
  description: "StudyMaster — Ứng dụng học tập môn Tư tưởng Hồ Chí Minh. Tổng hợp kiến thức, ghi chép và ôn tập hiệu quả.",
  keywords: "Tư tưởng Hồ Chí Minh, học tập, ghi chép, StudyMaster",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "StudyMaster",
  },
  icons: {
    apple: "/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
