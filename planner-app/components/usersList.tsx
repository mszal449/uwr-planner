import React from 'react';

interface UserI {
  _id: string;
  name: string;
  degree: string;
}

interface UserListProps {
  users: UserI[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} - {user.degree}
        </li>
      ))}
    </ul>
  );
};

export default UserList;