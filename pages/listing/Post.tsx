import moment from 'moment';
import Image from 'next/image';
import Layout from '../../components/Layout';
import classNames from 'classnames';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Head from 'next/head';
import { ChatBubbleBottomCenterIcon, CheckBadgeIcon, CheckCircleIcon, MapPinIcon, SparklesIcon, StarIcon, XMarkIcon, ChevronRightIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { CheckIcon, ExclamationTriangleIcon, IdentificationIcon, InformationCircleIcon, FlagIcon, ClockIcon } from '@heroicons/react/24/outline';
import { OnStreetIcon } from '@/components/Icon';
import fakeListings from '@/fakes/listings';
import { useState } from 'react';
import styles from '@/styles/ListingDetail.module.css';

const getPickupStatusLabel = (status: any) => (
  status === 'available' ? 'Still Available' : null
);

const IMAGE_ASPECT_RATIO = 4 / 3; // height, given width
const AVATAR_SIZE = 50;
const POST_WIDTH = 450;
const MAX_DISPLAYED_QS = 3;

const QuestionItem = ({ question: { prompt, reply } }: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="stickty top-0 mb-4 border-l-[6px] pl-2 border-l-clouds-100 flex items-start group cursor-pointer">
      <div className="flex-1">
        <div className={classNames(
          "font-medium",
          {
            "line-clamp-2": !expanded,
          }
        )}>
          {prompt}
        </div>
        <div
          aria-label={`Q&A: ${prompt}`}
          className="flex pb-1 items-start text-left"
        >
          <div className={classNames(
            "flex-1 mt-1 mr-1 text-left text-sm text-stone-600",
            {
              "line-clamp-1": !expanded,
              "whitespace-wrap overflow-initial": expanded,
            }
          )}>
            {reply}
          </div>
        </div>
      </div>
      <div className="text-right">
        <ChevronRightIcon className={classNames(
          "mt-1 group-hover:text-black h-4 text-stone-400 mr-2",
          {
            "-rotate-90": expanded,
          }
        )} />
      </div>
    </div>
  );
};

const Post = ({
  receivedAddressCount = 0,
  pickupStatus,
  verifiedAt,
  title,
  user,
  describedAt,
  description,
  questions,
}: any) => {
  const [maxDisplayedQs, setMaxDisplayedQs] = useState<number>(MAX_DISPLAYED_QS);
  return (
  <div className={classNames(
    styles.post,
    "sticky top-[96px]",
    "text-left bg-white mb-24 py-2 md:py-0 md:ml-2 md:mr-0 md:my-0 max-w-lg",
  )}>
    {/* status */}
    <div className={classNames(
      "mb-2 mt-2 text-base text-stone-500",
    )}>
      <span className={classNames("mr-3 inline-block p-2 rounded-full bg-green-100", {
        "font-bold text-green-600": pickupStatus === 'available',
      })}>
        {
          pickupStatus === 'available' ?
          <CheckCircleIcon className="h-5 inline-block mr-1 align-middle -mt-0.5" />
          : null
        }
        {getPickupStatusLabel(pickupStatus)}
      </span>
      <div className="inline text-left text-base text-stone-500">
        <ClockIcon className="align-text-middle -mt-0.5 inline-block h-5" /> {moment(verifiedAt).fromNow()}
      </div>
    </div>
    <h1 className="mt-3 mb-2 font-mono text-2xl font-medium">
      {title}
    </h1>
    <div className="text-stone-500">
      13.5 mi away
    </div>
    <hr className="my-5" />
    {/* user. TODO: handle empty image */}
    <div className="flex items-center mt-4 mb-6">
      <Image
        alt="User"
        src={user.avatar}
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        className="rounded-full mr-3"
      />
      <div className="flex-1 ml-0">
        <h3 className="font-fancy font-medium text-lg flex items-center">
          <strong>{user.name}</strong> {
            user.verified ?
              <span className="ml-2 text-blue-600 text-sm font-normal"><CheckBadgeIcon className="h-5 inline-block align-text-top -mt-0.5 text-blue-500 mr-1.5" />ID Verified</span>
              :
              <span className="ml-2 text-stone-400 text-sm font-normal"><ExclamationTriangleIcon className="h-5 inline-block text-yellow-600 align-text-top -mt-0.5 mr-1.5" />ID Not Verified <InformationCircleIcon className="h-5 inline-block align-text-top -mt-[3px] text-stone-400 ml-0.5" /></span>
          }
        </h3>
        <div className="text-stone-500 text-sm my-1">
          <strong className="font-medium text-green-600"><StarIcon className="h-4 inline-block align-text-top" /> 100% Positive</strong> ({user.exchangesCount})
        </div>
      </div>
    </div>
    <div className="text-stone-500">
        <strong>Ish N</strong> wrote {moment(describedAt).fromNow()}:
      </div>
    <div className={classNames(
      "text-base italic mt-4 bg-clouds-100 p-4 rounded-lg",
      styles.bubbleBelow,
    )}>
      "{description}"
    </div>
    {/* Q&A */}
    <div className="my-6">
      <h2 className="font-bold mb-2 text-lg">Q&A</h2>
      {
        questions.slice(0, maxDisplayedQs).map((question: any, i: number) => (
          <QuestionItem question={question} key={i} />
        ))
      }
      {
        questions.length > MAX_DISPLAYED_QS && maxDisplayedQs !== questions.length && (
          <button
            onClick={() => setMaxDisplayedQs(questions.length)}
            className="mt-1 text-blue-600" role="button" type="button" aria-label="View all questions and answers">
            View all {questions.length} Questions & Answers
          </button>
        )
      }
    </div>
    {/* Location */}
    <div className="my-6">
      <div className="mb-6">
        [Map circle area]
      </div>
      <button type="button" aria-label="Get directions and see address" className="p-3 rounded-lg bg-blue-600 text-white font-bold">
        Get Address & Directions
      </button>
      <div className="text-sm my-3 text-stone-600">
        <strong>{receivedAddressCount}</strong> {receivedAddressCount === 1 ? 'person' : 'people'} got address & directions to this listing already.
      </div>
      <div className="mt-6">
        <button type="button" className="mb-3 text-sm text-red-500 block">
          <FlagIcon className="h-4 inline-block mr-1" /> Report inaccurate location
        </button>
        <button type="button" className="mb-3 text-sm text-red-500 block">
          <FlagIcon className="h-4 inline-block mr-1" /> Report offensive post
        </button>
      </div>
    </div>
  </div>
  );
};

export default Post;
