import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex justify-between w-full min-h-screen font-inter">
        {children}
         <div className="auth-asset">
             <div>
                <Image 
                  src="icons/auth-image.svg"
                  alt = "Auth -image"
                  height={500}
                  width={500}
                />
             </div>
         </div>
      </main>
    );
  }
  