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
  <Layout title="Airbnb Challenge">
    <Container>
      <Title>
        Airbnb Challenge <Badge>2021</Badge>
      </Title>
      <P>A 5-day challenge by PapaReact.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, NextJS, tailwindcss</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="airbnb-clone-eight-self.vercel.app">
            Airbnb Clone Challenge <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid minChildWidth="200px" spacing="40px">
        <WorkImage src="/images/works/airbnb-clone.png" alt="airbnb" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
