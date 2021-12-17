import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Metaverse Challenge">
    <Container>
      <Title>
        Metaverse Challenge <Badge>2021</Badge>
      </Title>
      <P>A 5-day challenge by PapaReact.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJS, NextJS, moralis.io, tailwindcss, Web 3.0, Blockchain
          </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="metaverse-challenge-phi.vercel.app">
            Metaverse Challenge <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid minChildWidth="200px" spacing="40px">
        <WorkImage src="/images/works/metaverse-login.png" alt="METAVERSE" />
        <WorkImage
          src="/images/works/metaverse-login-metamask.png"
          alt="METAVERSE"
        />
        <WorkImage
          src="/images/works/metaverse-metamask-auth.png"
          alt="METAVERSE"
        />
        <WorkImage src="/images/works/metaverse-main.png" alt="METAVERSE" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
