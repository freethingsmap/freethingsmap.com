import Layout from "@/components/Layout";
import { Listing } from "@/types";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ListingForm({
  listing = {},
  setListing,
  isNumbered,
  num,
}: {
  listing: Listing;
  setListing: any;
  isNumbered: boolean;
  num: number;
}) {
  const [name, setName] = useState(listing.name);
  const [description, setDescription] = useState(listing.description);
  useEffect(() => {
    setListing({ name, description });
  }, [setListing, name, description]);
  return (
    <article
      className="w-[400px] px-4 py-5 rounded-md shadow-2xl border"
      style={{
        boxShadow: '0 11px 34px 0 rgb(0 0 0 / 20%)',
      }}
    >
      {
        isNumbered && (
          <div className="text-stone-500 text-xs mb-2">
            #{num}
          </div>
        )
      }
      <h1 className="flex items-center font-mono font-medium text-lg mb-4">
        <div>
          {name || 'New Listing'}
        </div>
        <div className="flex-1 text-right text-sm text-stone-500">
          Street Pickup <PencilIcon className="ml-0.5 h-3 inline-block align-text-top mt-0.5" />
        </div>
      </h1>
      <input
        type="type"
        name="name"
        placeholder="Title"
        onChange={(e) => { setName(e.target.value); } }
        autoComplete="off"  data-form-type="other"
        className="mb-3 border p-2.5 w-full rounded-lg bg-stone-100 border-stone-200 focus:outline-stone-600"
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={(e) => { setDescription(e.target.value);} }
        autoComplete="off"  data-form-type="other"
        className="p-2.5 border w-full rounded-lg bg-stone-100 border-stone-200 focus:outline-stone-600"
      />
      <div>
        <div className="my-4">

        </div>
      </div>
    </article>
  );
}
