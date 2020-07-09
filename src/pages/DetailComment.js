import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DetailComments from '../components/DetailComments';
import { isEmpty as _isEmpty } from 'lodash';

function DetailComment(props) {
    const id = props.match.params.id;
    const [comments, setComments] = useState({});
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const fetchComment = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
            setComments(res.data);
            setLoading(false);
        };
        fetchComment();
        
    },[id]);
    let DetailComment = null;
    if (loading) {
        DetailComment = <h1>Loading...</h1>
    } else if(!_isEmpty(comments)){
        DetailComment = <DetailComments comments={comments} />
    }

    return (
        <div>
            <h1>Detail Comment</h1>
            {DetailComment}
        </div>

    );
}

export default DetailComment;