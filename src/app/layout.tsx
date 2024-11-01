import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "这里修改浏览器标签名",
  description: "这里做个描述",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
