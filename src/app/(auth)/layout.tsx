export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col h-screen w-full lg:items-center lg:justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}
