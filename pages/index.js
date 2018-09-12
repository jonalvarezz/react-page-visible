import Head from "next/head";

import Logger from "../components/Logger";
import Counter from "../components/Counter";
import PageVisibility from "../components/PageVisibility";

const Index = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css"
      />
    </Head>

    <PageVisibility>
      {({ hidden, focus, active }) => (
        <div className="app container mt-3">
          <h1>
            This page has been{" "}
            <span className="text-success">
              {active ? "active" : "inactive"}
            </span>{" "}
            by
          </h1>
          <Counter key={`${hidden.toString()}-${focus.toString()}`} />
          <Logger hidden={hidden} focus={focus} active={active} />
        </div>
      )}
    </PageVisibility>

    <style jsx>{`
      .app {
        max-width: 600px;
        margin: 2rem auto 0;
        text-align: center;
      }

      h1 {
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Index;
