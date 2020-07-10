import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

import ItemListPosts from '../components/ItemListPosts';
import {Table} from 'semantic-ui-react';
// import Control from '../components/Control';
import Pagination from '../components/Pagination';
import UserContext from '../context/UserContext';

function ListPost () {
  const {posts, setPosts} = useContext (UserContext);
  const [loading, setLoading] = useState (false);
  const [currentPage, setCurrentPage] = useState (1);
  const [postPerPage] = useState (10);

  useEffect (() => {
    const fetchPost = async () => {
      setLoading (true);
      const res = await axios.get (
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts (res.data);
      setLoading (false);
    };
    fetchPost ();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice (indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage (pageNumber);

  let xhtmlPost = null;

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    if (currentPost.length > 0) {
      xhtmlPost = currentPost.map ((post, i) => {
        return <ItemListPosts key={i} index={i} post={post}/>;
      });
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1>List Post</h1>
      </div>
      {/* <Control /> */}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>STT</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created By</Table.HeaderCell>
            <Table.HeaderCell>Total Comments</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {xhtmlPost}
      </Table>
      <Pagination
        postPerPost={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListPost;
