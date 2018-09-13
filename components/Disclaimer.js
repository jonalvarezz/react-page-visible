const Disclaimer = () => (
  <div>
    <p>
      Please note that <code>visible</code> and <code>hidden</code> refers to different properties.
    </p>
    <ul>
      <li>
        <code>visible</code>: New introduced property.
      </li>
      <li>
        <code>hidden</code>:{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API"
          target="_blank"
        >
          Page Visibility API
        </a>{" "}
        property
      </li>
      <li>
        <code>focus</code>: Browser focus event.
      </li>
    </ul>

    <style jsx>{`
      div {
        margin-top: 4rem;
        font-size: .8rem;
        color: #333;
      }

      ul {
        padding: 0;
        list-style: none;
      }
    `}</style>
  </div>
);

export default Disclaimer;
