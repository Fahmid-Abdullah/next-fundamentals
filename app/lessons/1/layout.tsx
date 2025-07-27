import Navbar from "@/app/components/navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-10">
            {children}
        </div>
      </body>
    </html>
  );
}
