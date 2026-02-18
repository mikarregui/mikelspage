// Root layout: minimal wrapper. HTML shell is in [locale]/layout.tsx
// Middleware always redirects to a locale-prefixed URL.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
