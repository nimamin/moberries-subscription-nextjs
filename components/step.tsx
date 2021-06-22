export default function Step({
  children,
  turn,
  index,
}: {
  children: React.ReactNode;
  turn: number;
  index: number;
}) {
  const style = {
    display: turn == index ? "" : "none",
  };

  return <section style={style}>{children}</section>;
}
