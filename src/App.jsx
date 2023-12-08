import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "./contexts/auth-provider.tsx";
import styled from "styled-components";

import Root from "./routes/Root";
import Dashboard from "./routes/Dashboard";
import Welcome from "./routes/Welcome";
import NoteList from "./routes/NoteList";
import { useEffect } from "react";
import { iam } from "telkom-domain-sdk"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: monospace;
    font-size: x-large;
`;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: "notes",
                element: <NoteList />,
                children: [
                    {
                        index: true,
                        element: <NoteList />,
                    },
                ],
            },
        ],
    },
]);

export default function App() {
    // const { isLoading } = useAuth();

    useEffect(() => {
        let args = {
            IAM_SERVER: 'https://iam-server.org',
            CLIENT_ID: 'client-id',
            CLIENT_SECRET: 'client-secret',
            REDIRECT_URI: 'https://app-address.com',
            AUDIENCE: 'https://server.com',
            SCOPE: 'user:read user:create',
        };
        iam.setup(args);
    },[])



    // if (isLoading) {
    //     return (
    //         <Wrapper>
    //             <p>Loading User Info...</p>
    //         </Wrapper>
    //     );
    // }

    return <RouterProvider router={router} />;
}
