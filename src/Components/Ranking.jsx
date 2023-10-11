import "./Ranking.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Table from "react-bootstrap/Table";

export default function Ranking() {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <>
      <div
        className="ranking-container"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <div className="logo_container">
          <img className="main_logo" src="/poke_logo.png" alt="logo" />
        </div>
        <div className="table-container">
          <h2 className="ranking-heading">Current Leaderboard</h2>
          <Table
            variant={!isLightTheme ? "dark" : null}
            class="table table-bordered"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
