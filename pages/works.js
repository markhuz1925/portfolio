import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTurista from '../public/images/works/turista.png'
import thumbAirbnbClone from '../public/images/works/airbnb-clone.png'
import thumbMetaverseChallenge from '../public/images/works/metaverse-challenge.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="turista" title="Turista" thumbnail={thumbTurista}>
            A social-travel app.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Clones and Challenges
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="airbnbClone"
            thumbnail={thumbAirbnbClone}
            title="Airbnb Challenge"
          >
            A 5-day Challenge of Airbnb Clone website.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="metaverse
            "
            thumbnail={thumbMetaverseChallenge}
            title="Metaverse Challenge"
          >
            A 5-day challenge by PapaReact.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
