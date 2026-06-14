import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap"
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam",
  display: "swap"
});

export const metadata = {
  title: "StudyMaster",
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
  themeColor: "#d97706",
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
      className={`${playfair.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#faf8f4] text-[#2c2a26] font-sans">
        {children}
      </body>
    </html>
  );
}
