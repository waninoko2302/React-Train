import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';
import axios from 'axios';

import UserContext from '../context/UserContext';

function DetailPost (props) {
  let post = props.post;
  const {user, setUser} = useContext (UserContext);
  const [loading, setLoading] = useState (false);

  useEffect (
    () => {
      const fetchData = async () => {
        setLoading (true);
        if (post.userId !== undefined) {
          const res = await axios.get (
            `https://jsonplaceholder.typicode.com/users/${post.userId}`
          );
          setUser (res.data);
          setLoading (false);
        }
      };
      fetchData ();
    },
    [post.userId, setUser]
  );

  let username = null;

  if (loading) {
    username = <p>Loading...</p>;
  } else {
    username = (
      <Link to={`../user-details/${user.id}`}>
        {user.name}
      </Link>
    );
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>STT</Table.HeaderCell>
          <Table.HeaderCell>User ID</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Body</Table.HeaderCell>
          <Table.HeaderCell>Created Date</Table.HeaderCell>
          <Table.HeaderCell>Created By</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{post.id}</Table.Cell>
          <Table.Cell>{post.userId}</Table.Cell>
          <Table.Cell>{post.title}</Table.Cell>
          <Table.Cell>{post.body}</Table.Cell>
          <Table.Cell>23/02/2020</Table.Cell>
          <Table.Cell>{username}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default DetailPost;
