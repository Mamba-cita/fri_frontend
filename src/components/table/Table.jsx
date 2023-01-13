import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css';

function createData(name, calories, fat, carbs, status) {
  return { name, calories, fat, carbs, status };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "Pending"),
  createData("Ice cream sandwich", 237, 9.0, 37, "Completed"),
  createData("Eclair", 262, 16.0, 24, "In_Progress"),
  createData("Cupcake", 305, 3.7, 67, "Completed"),
  createData("Gingerbread", 356, 16.0, 49, "Pending"),
  createData("MeatBalls", 356, 16.0, 49, "In_Progress"),
];

const makeStyle = (status) => {
  if (status === "Completed") {
    return {
      background: "whitesmoke",
      color: "red",
    };
  } else if (status === "In_Progress") {
    return {
      background: "whitesmoke",
      color: "green",
    };
  } else {
    return {
      background: "whitesmoke",
      color: "orange",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Open Jobs</h3>

      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="left">Calories</TableCell>
              <TableCell align="left">Fat&nbsp;(g)</TableCell>
              <TableCell align="left">Carbs&nbsp;(g)</TableCell>
              <TableCell align="left">status&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}{" "}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
