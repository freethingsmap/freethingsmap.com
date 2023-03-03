import Image from 'next/image'
import { OnStreetIcon } from '@/components/Icon'
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';

const FreeItemTile = ({ width, idx, listing = {} }: any) => (
    <Link href={`/listing/${listing.id}`} className="snap-always snap-start min-w-[304px] lg:w-[30vw] my-1 box-border" style={{ maxWidth: width, }}>
      <div className="group rounded-none m-0 bg-gray-300 w-[300px] h-[300px] lg:w-full relative border-2 border-b-0 border-black">
      <Image alt="Item" src={`https://picsum.photos/id/${idx * 10}/600`} layout="fill" objectFit="cover" />
      <div className="text-sm uppercase tracking-wider text-white bg-black/90 font-medium inline-block px-2 py-1 rounded-sm m-2 absolute bottom-0 right-0 italic">free</div>
      <span className="absolute inline-block py-1 px-1 text-xs bg-black text-white italic">
        Yesterday 3:00pm
      </span>
      <div className="m-2 absolute bottom-0 left-0">
        <button type="button" aria-label="Save to your Favorites" className="flex items-center text-white bg-black/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-black rounded-full p-2 text-xs">
          <HeartIcon className="h-4" />
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
    </Link>
  );

export default FreeItemTile;
