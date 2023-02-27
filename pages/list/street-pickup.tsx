import Layout from "@/components/Layout";
import ListingForm from "@/components/ListingForm";
import { Listing } from "@/types";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ListStreetPickup() {
  // list item(s) for street pickup
  const [listings, setListings] = useState<Listing[]>([{}]);
  const setListing = (listingIdx: number) => ( { listing }: any ) => {
    console.log(listing);
    setListings((listings: Listing[]) => {
      listings[listingIdx] = listing;
      return listings;
    });
  };
  return (
    <Layout title="List Street Pickup(s) | Free Things Map">
      <div className="my-8 flex mx-5">
        {
          listings.map((listing: Listing, i: number) => (
            <div key={i} className="m-4">
              <ListingForm
                num={i + 1}
                isNumbered={listings.length > 1}
                listing={listing}
                setListing={setListing(i)}
                />
            </div>
          ))
        }
        <div className="mx-8 my-4">
          <button type="button"
            onClick={() => { setListings((listings: Listing[]) => [...listings, {}]); } }
            aria-label="Add a new listing"
            className="text-left cursor-pointer w-[400px] px-4 py-5 rounded-md border hover:border-black transition-colors bg-stone-800 text-white hover:bg-black">
            <PlusCircleIcon className="h-5 inline-block mr-1 align-text-top" />
            Add a new listing
          </button>
        </div>
      </div>
    </Layout>
  );
}
