import { NavigationHeader } from 'src/components/NavigationHeader';

export default function RegularExpenditureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationHeader
        leftSlot={<NavigationHeader.BackButton />}
        rightSlot={<button type="button">편집</button>}
      >
        <NavigationHeader.Title>고정지출</NavigationHeader.Title>
      </NavigationHeader>
      {children}
    </>
  );
}
