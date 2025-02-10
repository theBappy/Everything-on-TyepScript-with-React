import React from "react";
import { Info } from "../types"

type UserInfoProp = {
    user: Info;
}

const UserInfo : React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserInfo