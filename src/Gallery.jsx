import HornedBeast from "../src/HornedBeast";

export default function Gallery({
  theme,
  setTheme,
  data,
  handleShowSelectedBeast,
}) {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.title}>
            <HornedBeast
              title={data.title}
              image_url={data.image_url}
              description={data.description}
              handleShowSelectedBeast={handleShowSelectedBeast}
              theme={data.theme}
              setTheme={data.setTheme}
            />
          </div>
        );
      })}
    </div>
  );
}
