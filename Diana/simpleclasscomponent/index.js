class User extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Place</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Steve</td>
            <td>Kerala</td>
            <td>99</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>TN</td>
            <td>98</td>
          </tr>
        </table>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<User />);
