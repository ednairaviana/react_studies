export default function CardInline() {
  const styles = {
    backgroundColor: "green",
    borderRadius: "24px 0 24px 0",
    border: "2px solid white",
  };

  return (
    <div style={styles}>
      This card has been styled from inline parameter. It is need to transform
      the css to an object. Constant or not. It can be hard to maintain.
    </div>
  );
}
