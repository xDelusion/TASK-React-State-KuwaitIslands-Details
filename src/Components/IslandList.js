import IslandsData from '../Islands';
import Island from './Island';

export default function IslandList() {
  const [query, setQuery] = useState('');

  let islandsArray = IslandsData.filter((island) =>
    island.name.includes(query)
  ).map((island) => <Island island={island} />);
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
