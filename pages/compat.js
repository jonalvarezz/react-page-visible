const Footer = () => (
  <div className="text-center">
    <p>You did not found the devices you were looking for?</p>
    <p>
      <a
        href="https://github.com/jonalvarezz/page-visibility/issues"
        title="Create new Issue"
      >
        Feel free to add it :)
      </a>
    </p>
  </div>
);

const CompatTable = () => (
  <div className="container">
    <table className="table table-hover table-bordered">
      <thead>
        <tr className="compat-head-cases">
          <th scope="col" />
          <th scope="col" colSpan={2} className="text-center">
            Change tab
          </th>
          <th scope="col" colSpan={2} className="text-center">
            Change window/app
          </th>
          <th scope="col" colSpan={2} className="text-center">
            Click outside browser
          </th>
          <th scope="col" colSpan={2} className="text-center">
            Move to another desktop
          </th>
          <th scope="col" colSpan={2} className="text-center">
            Lock screen
          </th>
          <th scope="col" colSpan={2} className="text-center">
            Close laptop
          </th>
        </tr>
        <tr className="compat-head-events">
          <th scope="col">Device</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
          <th scope="col">Focus</th>
          <th scope="col">Visibility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">MacOS(MacBook Pro 2015)</th>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
        </tr>
        <tr>
          <th scope="row">iOS (iPhone X)</th>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td> -- </td>
          <td> -- </td>
        </tr>
        <tr>
          <th scope="row">Chome Windows 10</th>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
        </tr>
        <tr>
          <th scope="row">Edge Windows 10</th>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
        </tr>
        <tr>
          <th scope="row">IE11 Windows 10</th>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td className="success">Change</td>
          <td className="warning">No Change</td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
          <td> -- </td>
        </tr>
        <tr />
      </tbody>
    </table>
    <Footer />

    <style jsx>{`
      .table td {
        text-align: center;
        font-size: 9px;
        vertical-align: middle;
        text-transform: uppercase;
        font-weight: 600;
      }
      .table th {
        vertical-align: middle;
      }

      .table tbody td:nth-child(2n + 1),
      tr.compat-head-events th:nth-child(2n + 1),
      tr.compat-head-cases th,
      .table tbody th {
        border-right: 3px solid #ccc;
      }

      tr.compat-head-events th {
        border-bottom: 3px solid #ccc;
      }

      .table td.warning {
        background-color: #dc3545;
        color: white;
      }
      .table td.success {
        background-color: #28a745;
        color: white;
      }

      .table tr {
        transition: opacity 150ms ease;
      }
      .table:hover tr:not(:hover) td {
        opacity: 0.7;
      }
    `}</style>
  </div>
);

export default CompatTable;
