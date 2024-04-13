export default function ModelLoaderFlower({ Model, ...props }) {
  return (
    <>
      {props.light_indices.map((el, index) => (
        <pointLight
          key={index}
          position={props.position[index]}
          intensity={props.intensity[index]}
          color={"white"}
        />
      ))}
      {Model}
    </>
  );
}
