import { useState } from "react"

interface UserProfileInfo {
    name: string;
    age: number;
    email: string;
}

const UserProfile = () => {
 const[profile, setProfile] =  useState<UserProfileInfo>({
    name: '',
    age: 0,
    email: ''
  })
  const updateName = (name: string) => {
    setProfile((prevProfile) => ({...prevProfile, name}))
  }
  const updateAge = (age: number) => {
    setProfile((prevProfile) => ({...prevProfile, age: Number(age)}))
  }
  const updateEmail=(email: string) => {
    setProfile((prevProfile) => ({...prevProfile, email: email}))
  }

  return (
    <div>
        <h1>User Profile</h1>
        <input 
        type="text" 
        placeholder="name" 
        value={profile.name} 
        onChange={(e) => updateName(e.target.value)}
        />
        <input type="number" 
        placeholder="age"
        value={profile.age > 0 ? profile.age : '' }
        onChange={(e)=>updateAge(e.target.value)}
        />

        <input type="email" 
        value ={profile.email}
        placeholder="your email"
        onChange={(e) => updateEmail(e.target.value)}
        />
        <h3>Profile summary</h3>
        <p>Name: {profile.name}</p>
        <p>Name: {profile.age}</p>
        <p>Name: {profile.email}</p>
    </div>
  )
}

export default UserProfile