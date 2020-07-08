import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table, Button} from 'semantic-ui-react';

function ItemListPost (props) {
  const post = props.post;
  const [user, setUser] = useState ({});
  const [comments, setComments] = useState ([]);

  useEffect (
    () => {
      const fetchUser = async () => {
        const res = await axios.get (
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        setUser (res.data);
      };
      const fetchComments = async () => {
        const res = await axios.get (
          `https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`
        );
        setComments (res.data);
      };
      fetchUser ();
      fetchComments ();
    },
    [post.userId]
  );

  return (

    <Table.Body>
    <Table.Row>
    <Table.Cell>{post.id}</Table.Cell>
    <Table.Cell>{post.title}</Table.Cell>
    <Table.Cell>22/1/2020</Table.Cell>
    <Table.Cell>{user.name}</Table.Cell>
    <Table.Cell>{comments.length}</Table.Cell>
    <Table.Cell>
      <Button inverted color='teal'>Edit</Button>
      <Button inverted color='red'>Delete</Button>
    </Table.Cell>
  </Table.Row>
</Table.Body>
  );
}

export default ItemListPost;
