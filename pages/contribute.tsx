import Layout from "@/components/Layout";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="my-6 text-stone-700 font-mono font-light">{children}</p>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 bg-yellow-50 text-stone-900 underline">{children}</span>
);

export default function ContributePage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  return (
    <Layout title="About | Free Things Map">
      <Head>
        <script async src="https://donorbox.org/widget.js" data-paypalExpress="false" />
      </Head>
      <div className="text-lg max-w-lg mx-auto my-10">
        <div className="uppercase font-mono text-sm mb-3 tracking-wider">Contribute</div>
        <Tab.Group>
          <Tab.List as="div" className="flex justify-start pt-3 pb-6">
            <Tab className="flex-1 uppercase pl-1 pb-1 border-b-2 font-mono text-sm mb-3 tracking-wider text-left mr-3 border-b-stone-200 text-stone-400 ui-selected:text-black ui-selected:border-b-black">
              Map
            </Tab>
            <Tab className="flex-1 uppercase pl-1 pb-1 border-b-2 font-mono text-sm mb-3 tracking-wider text-left mr-3 border-b-stone-200 text-stone-400 ui-selected:text-black ui-selected:border-b-black">
              Develop
            </Tab>
            <Tab className="flex-1 uppercase pl-1 pb-1 border-b-2 font-mono text-sm mb-3 tracking-wider text-left mr-3 border-b-stone-200 text-stone-400 ui-selected:text-black ui-selected:border-b-black">
              Donate
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {/* Mapping */}
            <Tab.Panel>
              <h1 className="font-mono font-medium text-2xl mb-2">
                Help us map free things in your neighborhood!
              </h1>
              <P>
                We could use your help.
              </P>
            </Tab.Panel>
            {/* Development */}
            <Tab.Panel>
              <h1 className="font-mono font-medium text-2xl mb-2">
                Help us with design, app development, marketing, and more!
              </h1>
              <P>
                This project was primarily developed by a single person (<a href="//amyhua.github.io" target="_blank" className="underline">hi there</a>), and we could use some help with design, development, and more. We are open to learners and builders of all experience levels. If you are trying to flex your skills or learn something new, we'd love to have you.
              </P>
              <P>
                You can take a look at our feature roadmap and open source code repository on Github.
              </P>
              <P>
                If you're interested in helping out, please email me at <a className="underline" href="mailto:foramyhua@gmail.com">foramyhua@gmail.com</a>.
              </P>
            </Tab.Panel>
            {/* Donate */}
            <Tab.Panel>
              <h1 className="font-mono font-medium text-2xl mb-2">
                Help us offset our costs and reward our contributors!
              </h1>
              <P>
                We have ongoing app server costs, and we'd like to pay people to help us map free things for an even better map.
              </P>
              <P>
                We are still in the process of registering as a nonprofit, so we can't offer deductible receipts right now, but in the meantime, you can donate to our DonorBox below! Please wait a few moments for it to load.
              </P>
              <iframe
                src="https://donorbox.org/embed/free-things-map-server-and-mapper-costs?default_interval=o&amount=5"
                name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless={true} frameborder="0" scrolling="no" height="900px" width="100%"
                className="text-base"
                style={{
                  maxWidth: 500,
                  minWidth: 250,
                  maxHeight: 'none !important',
                }}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}
