import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MapPinIcon, Bars3Icon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { LogoHeader, LogoRoundSvg } from './Logo';
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { OnStreetIcon, OwnerPickupIcon } from './Icon';
import classNames from 'classnames';

export const NAV_PADDINGX_CLASSNAME = 'px-4';

const navigation = [
  { key: 'login_moderator', name: 'Login', href: '#', mainButton: false },
  { key: 'signup_moderator', name: 'Moderate Your Community', href: '#', mainButton: false },
]
// const navigation = [] as any[]

const AddFreeDropButton = ({ onClick }: any) => (
  <button onClick={onClick} type="button" role="button" aria-label="Drop a free item"
    className="px-5 py-2 rounded-full bg-black text-white font-mono uppercase tracking-wider"
  >
    <Bars3BottomLeftIcon className="h-4 inline-block align-middle -mt-1 mr-1" /> List Free Item(s)
  </button>
);

const PickupOption = ({ children, active, href }: any) => (
  <Link href={href} aria-label="List free item(s) for street pickup">
    <div className={classNames(
      "sm:block transition-all flex items-center cursor-pointer p-3 sm:mr-6 mb-5 sm:mb-6 rounded-lg border-2 border-stone-300 hover:border-stone-700 sm:max-w-[220px]",
      {
        "scale-0": !active,
        "scale-100": active,
      }
    )}>
      {children}
    </div>
  </Link>
);

export default function Navbar() {
  const [activeUser, setActiveUser] = useState();
  const [isDroppingFreeItems, setIsDroppingFreeItems] = useState(false);
  const onDropFreeItems = () => {
    setIsDroppingFreeItems(!isDroppingFreeItems);
  };

  useEffect(() => {
    const el = document.querySelector(styles.container)
    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle(styles.isPinned, e.intersectionRatio < 1),
      { threshold: [1] }
    )
    if (el) observer.observe(el)
  }, []);

  return (
    <Disclosure as="nav" className={classNames(
      styles.container,
      "",
      'bg-white z-50 sticky left-0 right-0 top-0',
    )}>
      {({ open }: { open: boolean }) => (
        <>
          <div className={classNames(
            "mx-auto z-[1000]",
            NAV_PADDINGX_CLASSNAME,
          )}>
            <div className="relative flex items-center justify-between py-3">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <LogoHeader className={classNames(
                    "hidden lg:inline-block"
                  )} size={60} />
                  <LogoRoundSvg className={classNames(
                    "inline-block lg:hidden"
                  )} size={60} />
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-4 sm:pr-0">
                {/* right-hand buttons */}
                <div className="sm:block hidden">
                  <Link href="/about" className="font-mono text-stone-500 hover:text-black focus:text-black">
                    About
                  </Link>
                </div>
                <div className="ml-8 sm:block hidden">
                  <Link href="/contribute" className="font-mono text-stone-500 hover:text-black focus:text-black">
                    Contribute
                  </Link>
                </div>
                <div className="ml-7 mr-5 sm:block hidden">
                  <AddFreeDropButton onClick={onDropFreeItems} />
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className={
                  classNames(
                    'ml-3 relative',
                    styles.postMenu
                  )
                }>
                  <div>
                    <Link href="/profile" className="inline-block">
                      <button type="button" className="
                        text-gray-900
                        font-body
                        flex text-base
                        focus:outline-none
                        focus:ring-0 group items-center mt-0.5">
                        <span className="sr-only">Go to Profile / Sign Up</span>
                        {
                          activeUser ? (
                            <UserCircleIcon className="h-8 text-black" />
                          ) : (
                            <UserCircleIcon className="h-8 text-gray-400" />
                          )
                        }
                      </button>
                    </Link>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="font-body origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }: { active: boolean }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Free Street Drop
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: { active: boolean }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Free Pickup
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className={classNames(
              "relative py-6 px-6 box-border -ml-4 -mr-4 flex overflow-hidden transition-all flex-col items-center justify-center shadow-2xl",
              {
                "h-0 pt-0 pb-0 mb-0 opacity-0": !isDroppingFreeItems,
                "min-h-[285px] md:h-[285px] opacity-100 pb-7 mb-8": isDroppingFreeItems,
              }
            )}>
              <button type="button" aria-label="Cancel list free items" onClick={onDropFreeItems}>
                <XMarkIcon
                  className="absolute top-0 right-0 h-12 p-3 text-black"
                />
              </button>
              <h2 className={classNames(
                "font-mono text-stone-600 transition-transform mt-5 mb-5 font-medium text-xl sm:mr-8 mr-4 text-center",
                {
                  "scale-0": !isDroppingFreeItems,
                  "scale-100": isDroppingFreeItems
                }
              )}>
                List free item(s) for your community to take.
              </h2>
              <div className="flex-1 flex flex-col sm:flex-row">
                <PickupOption href="/list/street-pickup" active={isDroppingFreeItems}>
                  <h3 className="font-bold text-xl mb-2 font-mono mr-3 min-w-[80px]">
                    Street Pickup
                  </h3>
                  <div>
                    <OnStreetIcon size={60} className="mb-3 py-1.5" />
                    <p className="leading-snug text-sm text-stone-700">
                      The item(s) are on the street outside and people can pick them up.
                    </p>
                  </div>
                </PickupOption>
                <PickupOption href="/list/pickup-with-owner" active={isDroppingFreeItems}>
                  <h3 className="font-bold text-xl mb-2 font-mono mr-3 min-w-[80px]">
                    Pickup with Owner
                  </h3>
                  <div>
                    <OwnerPickupIcon height={60} className="mb-3 py-1.5" />
                    <p className="leading-snug text-sm text-stone-700">
                      The item(s) are with the owner and the owner is willing to meet for pickup.
                    </p>
                  </div>
                </PickupOption>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 text-center border-b">
              {navigation.map((item: any) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.mainButton ? 'bg-gray-600 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.mainButton ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="pt-2 ml-3">
                <AddFreeDropButton onClick={onDropFreeItems} />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
