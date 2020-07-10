import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Form, Modal, Icon, Header} from 'semantic-ui-react';

import UserContext from '../context/UserContext';

function ListComment(props) {
  const {comments, setComments} = useContext(UserContext);
  const deleteContact = async () => {
    let {index} = props;
    //const res =  await axios.delete (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const a1 = comments.slice(0, index);// xoá các phần tử trước tính từ phần tử ta chọn
    const a2 = comments.slice(index + 1, comments.length); //xoá các phần tử sau tính từ phần tử ta chọn
    const new_arr = a1.concat(a2); // gộp các phần tử đã xoá
    setComments(new_arr);
    console.log(a1);
    console.log(a2);
    console.log(new_arr);  
  };

  const {comment, user} = props;
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>{comment.id}</Table.Cell>
          <Table.Cell>
            {comment.postId}
            </Table.Cell>
          <Table.Cell>
            <Link to={`comment-details/${comment.id}`}>
              {comment.name}
            </Link>
          </Table.Cell>
          <Table.Cell>{user.name}</Table.Cell>
          <Table.Cell>
            <Modal
              trigger={<Button inverted color="blue">Edit</Button>}
              closeIcon
            >
              <Header icon="archive" content="Archive Old Messages" />
              <Modal.Content>
                <Form>
                  <Form.Group>
                    <Form.Input placeholder="STT" name="STT" value={comment.id} />
                    <Form.Input
                      placeholder="Post ID"
                      name="Post ID"
                      value={comment.postId}
                    />
                    <Form.Input
                      placeholder="Title"
                      name="Title"
                      value={comment.name}
                      // onChange={handleChange}
                    />
                    <Form.Input
                      placeholder="Created By"
                      name="Created By"
                      value={user.name}
                      // onChange={handleChange}
                    />
                  </Form.Group>
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

export default ListComment;
