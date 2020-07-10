import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

import Pagination from '../components/Pagination';
import DetailPost from '../components/DetailPost';
import ListComment from '../components/ListComment';
import UserContext from '../context/UserContext';

function DetailPostPages (props) {
  const id = props.match.params.id;
  const [post, setPost] = useState ({});
  const [user, setUser] = useState({});
  const {comments, setComments} = useContext(UserContext);
  const [loading, setLoading] = useState (false);
  const [currentPage, setCurrentPage] = useState (1);
  const [postPerPage] = useState (10);

  useEffect (
    () => {
      const fetchPost = async () => {
        setLoading (true);
        const resPost = await axios.get (
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost (resPost.data);
        const resComment = await axios.get (
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        setComments (resComment.data);
        setLoading (false);
      };
      fetchPost ();
    },[id]
  );

  useEffect(
    () => {
      const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(res.data);
      setLoading(false);
  };
  fetchUser();
}, [id]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = comments.slice (indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage (pageNumber);
  let xDetailPost = null;
  let xComment = null;

  if (loading) {
    xDetailPost = <h1>Loading...</h1>;
    xComment = (
      <tbody>
        <tr>
          <th>
            <h1>Loading...</h1>
          </th>
        </tr>
      </tbody>
    );
  } else {
    xDetailPost = <DetailPost post={post} />;
    if (currentPost.length > 0) {
      xComment = comments.map ((comment, i) => {
        return <ListComment key={i} index={i} comment={comment} user={user} />;
      });
    }
  }
  

  return (
    <div>
      <h1>Detail Post</h1>
      {xDetailPost}
      <h1>List Comment</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>STT</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created By</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {xComment}
      </Table>
      <Pagination
        postPerPost={postPerPage}
        totalPost={comments.length}
        paginate={paginate}
      />
    </div>
  );
}

export default DetailPostPages;
