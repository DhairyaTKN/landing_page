// import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div className="container relative z-10">
        <Navbar />
      </div> */}
      {children}
      <div className="container">
      <Footer />
      </div>
    </>
  );
}
