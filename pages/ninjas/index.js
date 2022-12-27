import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'; // so we can redirect the user to a persons personal page

// use free json placeholder site to fetch dummy data. 
// export the Next.js getStaticProps method which is async. This runs before the Ninjas component gets rendered.
// Create a response obj with a fetch request which waits for the data.
// If the promise is fulfilled / the data is returned as an array of objs into the Ninjas component and we can access the data using a props.

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
        ninjas: data
    }
  }
};

const Ninjas = ({ ninjas }) => {
    // console.log(ninjas)
  return (
    <div>
      <h1>Ninja List</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <h2 className={styles.single}>{ninja.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
