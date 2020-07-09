import React from 'react';
import {Table} from 'semantic-ui-react';
function DetailComments (props) {
  let comments = props.comments;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>STT</Table.HeaderCell>
          <Table.HeaderCell>Post ID</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Body</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{comments.id}</Table.Cell>
          <Table.Cell>{comments.postId}</Table.Cell>
          <Table.Cell>{comments.email}</Table.Cell>
          <Table.Cell>{comments.name}</Table.Cell>
          <Table.Cell>{comments.body}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default DetailComments;
