import Footer from "@/components/Screen2Components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="container">
        <Footer />
      </div>
      
    </>
  );
}
