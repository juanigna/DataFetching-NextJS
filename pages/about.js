import Head from 'next/head'
import React from 'react'
import Container from '../components/Container'

const about = () => {
  return (
    <div>   
        <Head>
            <title>Juan Proyect - About</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous" />
        </Head>
        <h2>Hi i'm about</h2>
    </div>
  )
}

export default about