import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import classNames from 'classnames'
import { NAV_PADDINGX_CLASSNAME } from '@/components/Navbar'
import { OnStreetIcon } from '@/components/Icon'
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { FlagIcon, HandThumbDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import LocationSearch from '@/components/LocationSearch'

const Highlight = ({ children }: any) => (<span className="text-2xl font-medium font-mono uppercase tracking-wide px-2 italic py-1 bg-black text-white">{children}</span>)

const FreeItem = ({ width, idx }: any) => (
  <div className="snap-always snap-start min-w-[304px] lg:w-[30vw] my-1 box-border" style={{ maxWidth: width, }}>
    <div className="rounded-none m-0 bg-gray-300 w-[300px] h-[300px] lg:w-full relative border-2 border-b-0 border-black">
      <Image alt="Item" src="https://cataas.com/cat" layout="fill" objectFit="cover" />
      <div className="text-sm uppercase tracking-wider text-white bg-black/90 font-medium inline-block px-2 py-1 rounded-sm m-2 absolute bottom-0 right-0 italic">free</div>
      <span className="absolute inline-block py-1 px-1 text-xs bg-black text-white italic">
        Yesterday 3:00pm
      </span>
      <div className="m-2 absolute bottom-0 left-0">
        <button type="button" aria-label="Save to your map" className="flex items-center text-black border-2 border-black bg-white rounded-full uppercase py-1.5 pl-2 pr-2.5 text-xs font-mono font-bold shadow-md">
          <MapPinIcon className="h-4 mr-1 align-top -mt-[1px]" />Save
        </button>
      </div>
    </div>
    <div className="flex border-t-4 border-t-black w-[300px] lg:w-full border-2 border-black">
      <OnStreetIcon size={50} className="ml-2 mr-1 my-4 sm:block hidden" />
      <div className="flex-1 font-fancy text-sm p-2 border-l-black">
        <div className="font-bold mb-0.5 text-sm">
          #{idx + 1}: Lost Cheshire Cat
        </div>
        <div className="text-xs font-normal mr-2">
          <em>Street Pickup.</em> Mission St between 23rd St & 24th St, San Francisco, CA 94110. <em>Today only.</em>
        </div>
      </div>
    </div>
    {/* actions */}
    {/* <div className="p-2 text-sm border-2 border-black border-t-0 flex items-center px-2">
      <div className="flex-1 flex justify-center">
        <button type="button" className="mr-1 py-2 px-3 flex items-center rounded-full text-green-600 bg-white text-xs font-medium">
          <FlagIcon className="h-4 inline-block mr-1 align-top -mt-[1px]" /> Still There
        </button>
        <button type="button" className="flex items-center py-2 px-3 rounded-full bg-white text-xs text-red-600 font-medium">
          <XMarkIcon className="h-4 inline-block mr-1 align-top -mt-[1px]" /> It's Gone
        </button>
        <button type="button" className="flex items-center py-2 px-3 rounded-full bg-white text-xs text-stone-500 font-medium">
          <HandThumbDownIcon className="h-4 inline-block mr-1 align-top -mt-[1px]" /> Bad
        </button>
      </div>
    </div> */}
  </div>
);

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
      <Head>
        <title>Free Things Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames(NAV_PADDINGX_CLASSNAME)}>
        <h2 className="text-xl font-mono font-light mt-3 mb-3">
          <div className="text-2xl mb-2 font-medium">
            Your map for free things.
          </div>
          Take it. Report it. Give it away.
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
              <Highlight>Take it</Highlight>
              <span className="ml-4 text-lg font-mono italic font-light mr-4">
                Recently reported <span className="font-medium">Free Stuff</span>
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
                new Array(NUM_ITEMS).fill(undefined).map((_, i) => <FreeItem width={
                  layoutRef.current && Math.ceil(layoutRef.current.clientWidth / 3)
                } idx={i} key={i} />)
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
      </main>
    </Layout>
  )
}
