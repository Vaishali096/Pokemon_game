import React, { useEffect, useState, useContext } from "react";
import "./Ranking.css";
import Table from "react-bootstrap/Table";
import { ThemeContext } from "../context/ThemeContext";

export default function Ranking() {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  const [users, setUsers] = useState([]); // State to store the fetched user data

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://pokefight-backend-cbka.onrender.com/game/user"
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div
        className="ranking-container"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <div
          className="logo_container"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <img className="main_logo" src="/poke_logo.png" alt="logo" />
        </div>
        <div className="table-container">
          <Table
            className="ranking-table"
            variant={!isLightTheme ? "dark" : null}
            style={{ background: themeStyles.ui, color: themeStyles.text }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
