import { forwardRef } from 'react';
import Navbar, { NAV_PADDINGX_CLASSNAME } from './Navbar';
import Head from 'next/head';
import classNames from 'classnames';

export interface LayoutProps {
  children: any;
  title?: string;
  ref: any;
  mainClassName?: string;
  contained?: boolean;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, mainClassName, contained = true, title = 'Free Things Map' }, ref) => {
  return (
    <div ref={ref} className={classNames(
      "min-h-[100vh] mx-auto",
      {
        "max-w-[1400px]": contained,
      }
    )}>
      <Head>
        <title>{title || 'Free Things Map'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={mainClassName ? mainClassName : NAV_PADDINGX_CLASSNAME}>
        {children}
      </main>
    </div>
  )
});

Layout.displayName = 'Layout';

export default Layout;
