export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <div className="flex flex-col items-start justify-between h-screen w-full ">
                    <img src='/assests/logo/ondas_cima.svg' className="w-40 object-cover" />
                    {children}
                    <img src='/assests/logo/ondas.svg' className="w-full object-top object-cover h-32 lg:h-36" />
                </div>
            </body>
        </html>
    );
}
