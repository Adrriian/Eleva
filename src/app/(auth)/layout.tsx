export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <div className="flex flex-col items-start justify-between h-screen w-full ">

                    {children}
                </div>
            </body>
        </html>
    );
}
