import { FC } from "react";

type UserShape =  {
    name: string;
    age: number;
    isStudent: boolean;
};



const User : FC<UserShape> = ({
  name, age, isStudent
} ) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{isStudent}</h3>
    </div>
  );
};

export default User;
