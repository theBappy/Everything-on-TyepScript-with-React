export type Info = {
    username: string;
    email: string;
    location: string[];
    age: number;
}

const Employee = ({username, email, location, age} : Info) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{age}</li>
    </ul>
  )
}

export default Employee