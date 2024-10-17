import { User } from "./_components/user";
import { fetchUsers } from "./fetchUsers";
import "./style.css";

export default async function Users () {
    const users = await fetchUsers()
    return (
      <section>
        <h1 className="app__title">Users</h1>
        <ul className="user-list"> 
            {users.map((user) => <li className="user-item" key={user.id}><User {...user} /></li> )} 
        </ul>
      </section>
    );
}