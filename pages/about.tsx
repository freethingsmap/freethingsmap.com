import Layout from "@/components/Layout";
import Link from "next/link";

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="my-6 text-stone-700 font-mono font-light">{children}</p>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="px-0 bg-yellow-50 text-stone-900 underline">{children}</span>
);

export default function AboutPage() {
  return (
    <Layout title="About | Free Things Map">
      <div className="text-lg max-w-lg mx-auto my-10">
        <div className="uppercase font-mono text-sm mb-3 tracking-wider">About</div>
        <h1 className="font-mono font-medium text-2xl mb-2">
          This is a map of free things.
        </h1>
        <P>
          I made this map because I wanted to find free things in my neighborhood easily and enable others to do the same. I also care about the environment and want us to reduce waste.
        </P>
        <P>
          <Highlight>We aggregate as much information about free stuff as possible, and we try to keep it up to date.</Highlight> Seriously, we have people bicycling around neighborhoods to post any valuable free stuff they see to this map. 🚴 📍 <Link href="/contribute" className="underline">You can help too.</Link>
        </P>
        <P>
          Have something to give away? Is it <em>for free</em>? If so, you can add it to this map. We ask that you only add free things. We make giving away things easier with features like transparent ratings for everyone and the ability to bulk list many items at once.
        </P>
        <P>
          This is an independent project. I'm not affiliated with any organization, listed here or otherwise. I'm just a person who wanted to find free things and happens to make apps, too.
        </P>
        <P>
          It's a work in progress. If you have any suggestions, please email me at <a className="underline" href="mailto:foramyhua@gmail.com">foramyhua@gmail.com</a>.
        </P>
        <P>
          Happy hunting!
        </P>
        <P>
          ~ <a className="underline" href="//amyhua.github.io" target="_blank">Amy Hua</a>
        </P>
      </div>
    </Layout>
  );
}