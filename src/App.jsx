import "./App.css";
import { useState } from "react";
import { UserClass, UserFunction, UserChildren } from "./user";

export default function App() {
    const initialUsers = [
        { name: "Mark", years: 30 },
        { name: "Anne", years: 35 },
        { name: "John", years: 25 },
    ];
    const tekst = "Proizvoljan tekst";

    const [users, setUsers] = useState(initialUsers);

    const uvecajGodine = () => {
        const newUsers = users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        setUsers(newUsers);
    };

    return (
        <>
            <h1>State</h1>
            <UserClass name={users[0].name} years={users[0].years} />
            <UserFunction name={users[1].name} years={users[1].years} />
            <UserChildren name={users[2].name} years={users[2].years}>
                <button onClick={uvecajGodine}>Uvecaj godine</button>
                {tekst}
            </UserChildren>
        </>
    );
}