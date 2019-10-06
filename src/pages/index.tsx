import React from "react"
import { Link } from "gatsby"

import { Layout, SimpleHero, Banner, About, Services } from "../components"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nemo?"
      >
        <Link className="btn-white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
