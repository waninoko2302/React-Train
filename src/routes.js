import React from 'react';

import ListPost from './pages/ListPost';
import DetailPostPages from './pages/DetailPostPages';
import DetailUserPages from './pages/DetailUserPages';
import DetailComment from './pages/DetailComment';
const routes = [
    {
        path: "/post",
        exact: true,
        main: () => <ListPost />
    },
    {
        path: "/",
        exact: true,
        main: () => <ListPost />
    },
    {
        path: "/post-details/:id",
        exact: true,
        main: ({ match }) => <DetailPostPages match={match} />
    },
    {
        path: "/user-details/:id",
        exact: true,
        main: ({ match }) => <DetailUserPages match={match} />
    },
    {
        path: "/post-details/comment-details/:id",
        exact: true,
        main: ({ match }) => <DetailComment match={match} />
    }
];

export default routes;