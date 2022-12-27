/* 
Angle brackets tells Next.js that this file is a route parameter which is dynamic depending on a list of users i.e. the id will change depending on the json data provided to it. Note that we are in the ninjas subfolder but if a user tries an id that does not match our data, the 404 page will be served. Fallbacks functionality is outside the scope of the tutorial.

We use getStaticPaths which is aso a async method like getStaticProps, that runs on build time but this one returns all the route parameters we may need. Then, Next.js will know to create a user page with a corresponding route using the .name or .id parameter. getStaticPaths tells Next.js how many html pages are needed to be made based on our data (in this case a remote api)

For this getStaticProps method, we automatically accept a context argument. This method gets run 10 times for every element in the paths var / array. Note that getStaticProps is appropriate for static pages that do not frequently change but time-dependent or frequently changing data, you could use getServerSideProps function instead.
*/

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json(); // data is an array of objs containing user data- we want to access the id property

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  /*
//   ultimately, we want to return an array of objs containing id properties, which we can use as individual routes for each user page.
//   the structure of data should look like so: paths: [{},{},{ params: { id: }}]. The map method and paths variable achieves this. toString() is used to convert number id to string version.
   */

  return {
    paths,
    fallback: false,
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h2>{ninja.name}</h2>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
