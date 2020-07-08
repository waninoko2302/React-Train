import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ItemListPost from '../components/ItemListPost';
import Pagination from '../components/Pagination';
import {Table, Dimmer, Loader} from 'semantic-ui-react';

function ListPostPage () {
  const [posts, setPosts] = useState ([]);
  const [loading, setLoading] = useState (false);
  const [curPage, setCurPage] = useState (1);
  const [itemPerPage] = useState (10);

  useEffect (() => {
    const fetchPostData = async () => {
      setLoading (true);
      const res = await axios.get (
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts (res.data);
      setLoading (false);
    };
    fetchPostData ();
  }, []);

  const indexOfLastPost = curPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentPost = posts.slice (indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurPage (pageNumber);

  let Post = null;

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    );
  } else {
    if (currentPost.length > 0) {
      Post = currentPost.map ((post, i) => {
        return <ItemListPost key={i} index={i} post={post} />;
      });
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1>List Post</h1>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>STT</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Created By</Table.HeaderCell>
            <Table.HeaderCell>Total Comments</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {Post}
      </Table>
      <Pagination
        postPerPost={itemPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListPostPage;
