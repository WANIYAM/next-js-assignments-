
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body className="bg-slate-500">
          {children}
        </body>
    );
  }