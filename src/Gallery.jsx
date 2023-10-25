import HornedBeast from "../src/HornedBeast";

export default function Gallery({ theme, setTheme, data }) {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.title}>
            <HornedBeast
              title={data.title}
              imageUrl={data.imageUrl}
              description={data.description}
              theme={data.theme}
              setTheme={data.setTheme}
            />
          </div>
        );
      })}
    </div>
  );
}
