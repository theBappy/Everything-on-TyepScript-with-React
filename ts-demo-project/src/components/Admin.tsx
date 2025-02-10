import { type Info } from "../components/Employee"

type AdminInfoList = Info & {admin: string}



const Admin = ({username, email, location, age, admin}: AdminInfoList) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{age}</li>
        <li>{admin}</li>
    </ul>
  )
}

export default Admin