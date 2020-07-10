import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Modal, Header, Icon, Form} from 'semantic-ui-react';
import axios from 'axios';
import UserContext from '../context/UserContext';

function ItemListPosts (props) {
  const {post} = props;
  const [user, setUser] = useState ({});
  const [comments, setComments] = useState ([]);
  const [loading, setLoading] = useState (false);
  const {posts, setPosts} = useContext (UserContext);
  // console.log(post);

  const deleteContact = async () => {
    let {index} = props;
    //const res =  await axios.delete (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const a1 = posts.slice(0, index);// xoá các phần tử trước tính từ phần tử ta chọn
    const a2 = posts.slice(index + 1, posts.length); //xoá các phần tử sau tính từ phần tử ta chọn
    const new_arr = a1.concat(a2); // gộp các phần tử đã xoá
    setPosts(new_arr);
    console.log(a1);
    console.log(a2);
    console.log(new_arr);  
  };

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
        {username}
        {total}
        <Table.Cell>
          <Modal
            trigger={<Button inverted color="blue">Edit</Button>}
            closeIcon
          >
            <Header icon="archive" content="Archive Old Messages" />
            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>STT</label>
                  <input placeholder="STT" />
                </Form.Field>
                <Form.Field>
                  <label>Title</label>
                  <input placeholder="Title" />
                </Form.Field>
                <Form.Field>
                  <label>Created By</label>
                  <input placeholder="Title" />
                </Form.Field>
                <Form.Field>
                  <label>Total</label>
                  <input placeholder="Title" />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red">
                <Icon name="remove" /> No
              </Button>
              <Button color="green">
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>

          <Button inverted color="red" onClick={deleteContact}>Delete</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}

export default ItemListPosts;
