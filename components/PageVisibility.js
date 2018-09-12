const getProperties = () => {
  let hidden = "hidden";
  let visibilityChange = "visibilitychange";

  if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  return { hidden, visibilityChange };
};

class PageVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.mountNode = null;
    this.state = { hidden: false, focus: true };

    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    const { hidden, visibilityChange } = getProperties();
    this.propertyName = hidden;
    this.eventName = visibilityChange;

    if (this.mountNode !== null) {
      window.addEventListener(this.eventName, this.onVisibilityChange);
    }
    window.addEventListener("focus", this.onFocus);
    window.addEventListener("blur", this.onBlur);
  }

  componentWillUnmount() {
    if (this.mountNode !== null) {
      window.removeEventListener(this.eventName, this.onVisibilityChange);
    }
    window.removeEventListener("focus", this.onFocus);
    window.removeEventListener("blur", this.onBlur);
  }

  onFocus() {
    this.setState({ focus: true });
  }
  onBlur() {
    this.setState({ focus: false });
  }

  onVisibilityChange() {
    const hidden = document[this.propertyName];
    this.setState({ hidden });
  }

  render() {
    const active = this.state.focus && !this.state.hidden;
    return (
      <div
        ref={r => {
          this.mountNode = r;
        }}
      >
        {this.props.children({ ...this.state, active })}
      </div>
    );
  }
}

export default PageVisibility;
