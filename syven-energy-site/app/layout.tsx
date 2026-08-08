import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://syvenenergy.com"),
  title: "SYVEN ENERGY | Stockage d’énergie et électrification industrielle",
  description: "Solutions de stockage d’énergie, d’électrification minière et d’infrastructure électrique industrielle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
