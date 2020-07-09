import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import UserContext from '../context/UserContext';

function ListComment (props) {
  let {comment} = props;
  const {user} = useContext (UserContext);

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{comment.id}</Table.Cell>
        <Table.Cell>{comment.postId}</Table.Cell>
        <Table.Cell>
          <Link to={`comment-details/${comment.id}`}>
            {comment.name}
          </Link>
        </Table.Cell>
        <Table.Cell>23/02/1998</Table.Cell>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>
          <Button inverted color="blue">Edit</Button>
          <Button inverted color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}

export default ListComment;
