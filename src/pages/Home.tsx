import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
    return (
        <>
            <h1>Home</h1>
            <p>Go to <Link to="/artists">Artists</Link> page</p>
        </>
    );
}