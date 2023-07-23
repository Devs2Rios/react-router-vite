import ARTISTS from "../assets/artists";
import ArtistDetail from "../components/ArtistDetail";

export default function Home(): JSX.Element {
    return (
        <>
            <h1>Artists</h1>
            <ul>
                {ARTISTS.map(artist => <ArtistDetail key={`artist-${artist.id}`} id={artist.id} name={artist.name} country={artist.country} />)}
            </ul>
        </>
    );
}