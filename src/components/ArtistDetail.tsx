import { Link } from "react-router-dom";

interface ArtistDetailProps {
    id: number;
    name: string;
    country: string;
}

export default function ArtistDetail({ id, name, country }: ArtistDetailProps): JSX.Element {
    return (
        <li>
            <Link to={`${id}`} relative="path">
                <span>{name}</span> - <span className="italic text-green-500">{country}</span>
            </Link>
        </li>
    );
}