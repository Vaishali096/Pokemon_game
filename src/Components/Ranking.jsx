import React, { useEffect, useState } from 'react';
import './Ranking.css';

export default function Ranking() {
    const [users, setUsers] = useState([]); // State to store the fetched user data

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://pokefight-backend-cbka.onrender.com/game/user");
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
            <div className="logo_container">
                <img className="main_logo" src="/poke_logo.png" alt="logo" />
            </div>

            <table className="table table-bordered">
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
            </table>
        </>
    );

}
