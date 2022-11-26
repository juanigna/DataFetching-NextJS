
import Head from 'next/head'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'
import fetch from "isomorphic-fetch"
import Users from '../components/Users'

export default function Home(props) {
  return (
    <div>
        <Head>
              <title>Juan Proyect - Index</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous" />
        </Head>
        <div>
          <h1 className='text-center mb-4'>Users</h1>
          <Users users={props.users}/>
        </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {users: resJSON.data}
}
