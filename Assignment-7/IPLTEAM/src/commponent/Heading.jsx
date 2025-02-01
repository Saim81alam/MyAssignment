function Heading({ iplTeam }) {
  return (
    <>
      <table
        className="table table-bordered table-success rounded-2 m-auto"
        style={{ width: "50%" }}
      >
        <thead>
          <tr className="table-danger">
            <th scope="col">No</th>
            <th scope="col">Team</th>
            <th scope="col">Matches</th>
            <th scope="col">Won</th>
            <th scope="col">Lost</th>
            <th scope="col">Tied</th>
            <th scope="col">NRR</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {iplTeam?.map((curCart) => {
            return (
              <tr key={curCart.id}>
                <td scope="col">{curCart.No}</td>
                <td scope="col">{curCart.Team}</td>
                <td scope="col">{curCart.Matches}</td>
                <td scope="col">{curCart.Won}</td>
                <td scope="col">{curCart.Lost}</td>
                <td scope="col">{curCart.Tied}</td>
                <td scope="col">{curCart.NRR}</td>
                <td scope="col">{curCart.Points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Heading;
