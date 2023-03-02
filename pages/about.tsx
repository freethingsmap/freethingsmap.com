import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About | Free Things Map">
      <h1>
        This is a map of free things.
      </h1>
      <p>
        I made this map because I wanted to find free things in my neighborhood. I couldn't find a map that had all the free things in one place, so I made one.
      </p>
      <p>
        This is an independent project. I'm not affiliated with any organization. I'm just a person who wanted to find free things.
      </p>
      <p>
        If you want to add a free thing to the map, please fill out the form on the <a href="/list/street-pickup">List Street Pickup</a> page or on the <a href="/list/pickup-with-owner">List Pickup with Owner</a> page.
      </p>
      <p>
        It's a work in progress. If you have any suggestions, please email me at <a href="mailto:foramyhua@gmail.com">foramyhua@gmail.com</a>.
      </p>
    </Layout>
  );
}