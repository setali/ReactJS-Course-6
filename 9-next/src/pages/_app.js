import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'
// import random from 'lodash/random'
import 'styles/global.css'

function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default function MyApp ({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  function loadingOn () {
    setLoading(true)
  }

  function loadingOff () {
    setLoading(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', loadingOn)
    router.events.on('routeChangeComplete', loadingOff)
    return () => {
      router.events.off('routeChangeStart', loadingOn)
      router.events.off('routeChangeComplete', loadingOff)
    }
  }, [])

  return (
    <div>
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      Random: {random(1, 100)}
      {loading && 'Loading...'}
      <Component {...pageProps} />
    </div>
  )
}
