import ListPost from './pages/ListPost';

const routes=[
    {
        path: "/post",
        exact: true,
        Component: ListPost,
    },
    {
        path: "/",
        exact: true,
        Component: ListPost,
    },
];

export default routes;