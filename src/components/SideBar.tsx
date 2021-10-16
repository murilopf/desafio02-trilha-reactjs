import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenresProps {
  genres: Genre[],
  selectedGenreId: number,
  clickGenreButton: (id: number) => void
}

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({ genres, selectedGenreId, clickGenreButton }: GenresProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => clickGenreButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}