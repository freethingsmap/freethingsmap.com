import { forwardRef } from 'react';
import Navbar from './Navbar';

export interface LayoutProps {
  children: any;
  ref: any;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="min-h-[100vh] max-w-[1400px] mx-auto">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
});

Layout.displayName = 'Layout';

export default Layout;
