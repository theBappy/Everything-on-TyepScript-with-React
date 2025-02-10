import React from "react"
import { AdminInfoList } from "../types"

type AdminInfoProps  = {
    admin: AdminInfoList;
}

const AdminInfo : React.FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>ID: {admin.id}</p>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Name: {admin.role}</p>
        <p>Email: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo