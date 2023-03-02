import Image from 'next/image'
import { OnStreetIcon } from '@/components/Icon'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const FreeItemTile = ({ width, idx, listing = {} }: any) => (
    <Link href={`/listing/${listing.id}`} className="snap-always snap-start min-w-[304px] lg:w-[30vw] my-1 box-border" style={{ maxWidth: width, }}>
      <div className="rounded-none m-0 bg-gray-300 w-[300px] h-[300px] lg:w-full relative border-2 border-b-0 border-black">
        <Image alt="Item" src="https://cataas.com/cat" layout="fill" objectFit="cover" />
        <div className="text-sm uppercase tracking-wider text-white bg-black/90 font-medium inline-block px-2 py-1 rounded-sm m-2 absolute bottom-0 right-0 italic">free</div>
        <span className="absolute inline-block py-1 px-1 text-xs bg-black text-white italic border-r border-b border-white/20">
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
    </Link>
  );

export default FreeItemTile;
