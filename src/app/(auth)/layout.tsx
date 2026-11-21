export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <div className="flex flex-col items-start justify-center h-screen w-full ">
                    {children}
                </div>
            </body>
        </html>
    );
}
