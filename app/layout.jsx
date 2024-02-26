import MainHeaderBackground from '@/component/main-header/MainHeaderBackground';
import './globals.css';
import MainHeader from '@/component/main-header/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainHeaderBackground />
        <MainHeader />
        <div className="header-background">{children}</div>
      </body>
    </html>
  );
}
