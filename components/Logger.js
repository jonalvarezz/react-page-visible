const dateOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short"
};

class Logger extends React.Component {
  records = [];

  recordToString = record => {
    const date = record.date.toLocaleTimeString();
    return `${date}. Active: ${record.active}, Hidden: ${
      record.hidden
    }, Focus: ${record.focus}.`;
  };

  log = () => {
    const { hidden, focus, active } = this.props;

    if (
      this.records.length > 0 &&
      hidden === this.records[0].hidden &&
      focus === this.records[0].focus &&
      active === this.records[0].active
    ) {
      return -1;
    }

    const record = {
      active,
      hidden,
      focus,
      date: new Date()
    };
    this.records = [record, ...this.records].slice(0, 10);
  };

  render() {
    this.log();

    return (
      <React.Fragment>
        <p>Last records:</p>
        <ul className="records">
          {this.records.map(record => (
            <li key={record.date.getTime().toString()}>
              {this.recordToString(record)}
            </li>
          ))}
        </ul>

        <style jsx>{`
          .records {
            list-style: none;
            margin: 0;
            padding: 0;
            color: #aaadb3;
            font-size: 0.9rem;
          }
          .records li:nth-child(2) {
            color: #77797d;
          }
          .records li:nth-child(1) {
            color: #333;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Logger;
