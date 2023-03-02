import Head from 'next/head'
import Layout from '@/components/Layout'
import classNames from 'classnames'
import { NAV_PADDINGX_CLASSNAME } from '@/components/Navbar'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'
import LocationSearch from '@/components/LocationSearch'
import FreeItemTile from '../components/FreeItemTile';

const Highlight = ({ children }: any) => (<span className="text-2xl font-medium font-mono uppercase tracking-wide px-2 italic py-1 bg-black text-white">{children}</span>)

const SM_BREAKPOINT = 640;
const LG_BREAKPOINT = 1024;

const ActiveCommunity = ({ name }: { name: string }) => (
  <span className="inline-block mr-1.5 mb-1.5 px-2 py-1 text-sm rounded-sm shadow-sm border border-gray-500">
    🏙️ {name}
  </span>
);

const NUM_ITEMS = 20;
const MIN_ITEM_WIDTH = 300;

export default function Home() {
  const slideableListRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const [hasMoreScrollableFreeItems, setHasMoreScrollableFreeItems] = useState(false);
  const [hasPrevScrollableFreeItems, setHasPrevScrollableFreeItems] = useState(false);
  const onSlideX = (dir: 'left' | 'right') => () => {
    if (slideableListRef && slideableListRef.current &&
      layoutRef && layoutRef.current) {
      const numItemsOffset = layoutRef.current.clientWidth <= SM_BREAKPOINT ? 1 : layoutRef.current.clientWidth >= LG_BREAKPOINT ? 3 : 2;
      const offset = layoutRef.current.clientWidth >= LG_BREAKPOINT ? numItemsOffset * MIN_ITEM_WIDTH : Math.ceil(0.3 * window.innerWidth * numItemsOffset);
      const oldScrollLeft = slideableListRef.current.scrollLeft;
      slideableListRef.current.scrollTo({
        left: oldScrollLeft + (dir === 'left' ? -1 : 1) * offset,
        behavior: 'smooth'
      });
      setHasPrevScrollableFreeItems(true);
      const hasNoMoreCondition = dir === 'left' ? 
      oldScrollLeft - offset <= MIN_ITEM_WIDTH :
      oldScrollLeft + offset >= slideableListRef.current.scrollWidth - slideableListRef.current.clientWidth;
      if (dir === 'left') {
        // was scrolled to left
        setHasMoreScrollableFreeItems(true);
        if (hasNoMoreCondition) {
          setHasPrevScrollableFreeItems(false);
        }
      } else {
        // was scrolled to right
        setHasPrevScrollableFreeItems(true);
        if (hasNoMoreCondition) {
          setHasMoreScrollableFreeItems(false);
        }
      }
    }
  };
  const onSlideLeft = onSlideX('left');
  const onSlideRight = onSlideX('right');
  useEffect(() => {
    if (slideableListRef && slideableListRef.current) {
      if (slideableListRef.current.scrollWidth > slideableListRef.current.clientWidth) {
        // is scrollable
        console.log('set true');
        setHasMoreScrollableFreeItems(true);
      }
    }
  }, [slideableListRef]);
  return (
    <Layout ref={layoutRef}>
      <h2 className="text-xl font-mono font-light mt-3 mb-3">
        <div className="text-2xl mb-2 font-medium">
          Your map for free things.
        </div>
        <strong>Take</strong> it. <strong>Report</strong> it. <strong>Give</strong> it away.
      </h2>
      <div className="my-3">
        <span className="mr-3 mb-1.5 sm:inline-block block">Active in</span>
        {
          ['San Francisco', 'New York City'].map((name) => <ActiveCommunity key={name} name={name} />)
        }
        <span className="sm:inline-block block text-sm my-2 sm:mx-3 underline">add your area</span>
      </div>
      <section className="my-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:mb-3">
            <div className="text-base sm:mt-0">
              <Highlight>Take</Highlight>
              <span className="ml-4 text-xl font-mono font-medium mr-4">
                Recently Posted <span className="font-medium">Free Stuff</span>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <LocationSearch />
          </div>
          <div className="relative" dir="ltr">
            <div
              onClick={onSlideLeft}
              className={classNames(
                "bg-gradient-to-r from-black/20 to-transparent via-black/10",
                "z-10 group cursor-pointer font-mono absolute mb-[18px] left-0 top-0 bottom-0 my-1 flex items-center font-medium",
                {
                  "hidden": !hasPrevScrollableFreeItems,
                }
              )}>
              <div className="flex items-center">
                <ChevronLeftIcon className="inline-block h-8 p-2 ml-2 shadow-lg rounded-full bg-white mx-1 text-black" />
              </div>
            </div>
            <div ref={slideableListRef} className="flex w-full overflow-x-auto snap-x">
              {
                new Array(NUM_ITEMS).fill(undefined).map((_, i) =>
                  <FreeItemTile width={
                    layoutRef.current && Math.ceil(layoutRef.current.clientWidth / 3)
                  } idx={i} key={i} />
                )
              }
            </div>
            <div
              onClick={onSlideRight}
              className={classNames(
                "bg-gradient-to-l from-black/20 to-transparent via-black/10",
                "z-10 group cursor-pointer font-mono absolute mb-[18px] right-0 top-0 bottom-0 my-1 flex items-center font-medium",
                {
                  "hidden": !hasMoreScrollableFreeItems,
                }
              )}>
              <div className="flex items-center">
              <ChevronRightIcon className="inline-block h-8 p-2 mr-2 shadow-lg rounded-full bg-white mx-1 text-black" />
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}
