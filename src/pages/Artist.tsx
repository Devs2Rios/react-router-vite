import artists from "../assets/artists";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Artist } from "../types";

export default function ArtistPage(): JSX.Element {
    // An object with every dynamic path section
    const { artistId } = useParams<{ artistId: string; }>(),
        [artist] = useState<Artist | undefined>(
            artists.find((artist: Artist) => artist.id === (artistId ? +artistId : 0))
        );

    if (!artist) {
        return (
            <>
                <h1>Artist not found</h1>
                <p>The artist you are looking for does not exist.</p>
                <Link to="..">Go back home</Link> {/* Back to home */}
                <Link to=".." relative="path">Go back to artists</Link> {/* Back to /artists */}
            </>
        );
    }

    return (
        <>
            <h1>{artist.name}</h1>
            <p>An artist from {artist.country}</p>
            <Link to=".." relative="path">Go to Artists</Link>
        </>
    );
}