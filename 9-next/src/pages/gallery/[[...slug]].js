import React from 'react'
import Main from '../../layout/Main'

function Gallery ({ params }) {
  console.log(params)
  return (
    <Main>
      <div>Optional Catch all routes => {params.slug?.join('/')}</div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  return {
    props: {
      params
    }
  }
}

export default Gallery
