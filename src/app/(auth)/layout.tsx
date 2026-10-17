export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="overflow-hidden">
                <div className="flex flex-col items-start justify-between h-screen w-full ">
                    <img src='/assests/logo/ondas_cima.svg' className="w-32 object-cover" />
                    {children}
                    <img src='/assests/logo/ondas.svg' className="w-full object-cover md:object-top" />
                </div>
            </body>
        </html>
    );
}
