class Counter extends React.Component {
  intervalId = 0;
  state = { counter: 0 };

  componentDidMount() {
    this.intervalId = window.setInterval(this.onTick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  onTick = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div className="counter">
        <span>{this.state.counter}</span>
        <label className="text-muted">Seconds</label>

        <style jsx>{`
          .counter {
            margin: 1rem 0 2rem;
          }
          .counter span {
            font-size: 4rem;
            display: block;
            font-weight: 600;
          }
        `}</style>
      </div>
    );
  }
}

export default Counter;
