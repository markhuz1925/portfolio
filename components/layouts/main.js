import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Marko's homepage" />
        <meta name="author" content="Marko Luther Antiola" />
        <meta name="author" content="markhuz1925" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          property="og:site_name"
          content="Marko Luther Antiola's Homepage"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://instagram.fmnl13-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/37131937_2187417001286756_107964465525293056_n.jpg?_nc_ht=instagram.fmnl13-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yPjGshj4LOQAX-tA7zF&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-flY7enEbj-8RhBZXFgqBeQP86b9GfR366VAL7Upa82A&oe=61C35FBC&_nc_sid=4f375e"
        />
        <title>Marko Luther Antiola - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
