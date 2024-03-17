import { vstack } from 'styled-system/patterns';

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={vstack({
        maxWidth: 400,
        mx: 'auto',
        height: '100%',
        alignItems: 'stretch',
      })}
    >
      {children}
    </div>
  );
}
