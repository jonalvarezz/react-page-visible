import PageVisible from "../lib/PageVisible";

import Logger from "../components/Logger";
import Counter from "../components/Counter";
import Disclaimer from "../components/Disclaimer";

const Index = () => (
  <div>
    <PageVisible>
      {({ hidden, focus, visible }) => (
        <div className="container">
          <h1>
            This page has been{" "}
            <span className="text-success">
              {visible ? "visible" : "hidden"}
            </span>{" "}
            by
          </h1>
          <Counter key={`${hidden.toString()}-${focus.toString()}`} />
          <Logger hidden={hidden} focus={focus} visible={visible} />
          <Disclaimer />
        </div>
      )}
    </PageVisible>

    <style jsx>{`
      .container {
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
