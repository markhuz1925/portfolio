import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Turista">
    <Container>
      <Title>
        Turista <Badge>2021-</Badge>
      </Title>
      <P>A social-travel mobile app. iOS and Android.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://turista.ph/">
            https://turista.ph/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Graphql, Rails, Mongodb</span>
        </ListItem>
      </List>

      <SimpleGrid minChildWidth="200px" spacing="40px">
        <WorkImage src="/images/works/turista-splashscreen.png" alt="Turista" />
        <WorkImage src="/images/works/turista-loginscreen.png" alt="Turista" />
        <WorkImage src="/images/works/turista-signupscreen.png" alt="Turista" />
        <WorkImage src="/images/works/turista-mainscreen.png" alt="Turista" />
        <WorkImage src="/images/works/turista-chatscreen.png" alt="Turista" />
        <WorkImage
          src="/images/works/turista-chatroomscreen.png"
          alt="Turista"
        />
        <WorkImage src="/images/works/turista-eventscreen.png" alt="Turista" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
