import HornedBeast from "../src/HornedBeast";
import data from "./assets/beasts-data.json";

export default function Gallery() {
  const beasts = [];

  return (
    <div>
      {data.map((beast) => {
        return (
          <div key={beast.title}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.imageUrl}
              description={beast.description}
            />
          </div>
        );
      })}
    </div>
  );
}
