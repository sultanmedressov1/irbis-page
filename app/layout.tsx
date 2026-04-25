import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ирбис ЕНТ — Подготовка к ЕНТ 2025",
  description: "Умная подготовка к Единому Национальному Тестированию. Казахстан 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
