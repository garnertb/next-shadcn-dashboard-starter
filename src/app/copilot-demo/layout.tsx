export default function CopilotDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Copilot Metrics Dashboard Demo</title>
        <meta name="description" content="GitHub Copilot Metrics Dashboard Demo" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}