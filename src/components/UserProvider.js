import React, {useState} from 'react';

import UserContext from '../context/UserContext';

const UserProvider = props => {
  const [user, setUser] = useState ({});
  const [comments, setComments] = useState ([]);
  const [posts, setPosts] = useState([]);
  return (
    <UserContext.Provider value={{user, setUser, comments, setComments, posts, setPosts}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
