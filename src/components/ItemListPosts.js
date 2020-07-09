import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
import axios from 'axios';

function ItemListPosts (props) {
  let post = props.post;
  const [user, setUser] = useState ({});
  const [comments, setComments] = useState ([]);
  const [loading, setLoading] = useState (false);

  useEffect (
    () => {
      const fetch = () => {
        setLoading (true);
        axios
          .get (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then (res => {
            setUser (res.data);
          });
        axios
          .get (
            `https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`
          )
          .then (res => {
            setComments (res.data);
          });
        setLoading (false);
      };
      fetch ();
    },
    [post.userId]
  );

  let total = null;
  let username = null;

  if (loading) {
    username = <td>Loading...</td>;
    total = <td>Loading...</td>;
  } else {
    username = <Table.Cell>{user.name}</Table.Cell>;
    total = <Table.Cell>{comments.length}</Table.Cell>;
  }

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{post.id}</Table.Cell>
        <Table.Cell>
          <Link to={`post-details/${post.id}`}>
            {post.title}
          </Link>
        </Table.Cell>
        <Table.Cell>23/02/1998</Table.Cell>
        {username}
        {total}
        <Table.Cell>
          <Button inverted color="blue">Edit</Button>
          <Button inverted color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}

export default ItemListPosts;
