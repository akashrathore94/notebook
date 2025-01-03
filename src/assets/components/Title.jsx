function Title({ text }) {
  const splitTxt = text.split(" ");
  return (
    <p style={{ marginBottom: "20px" }}>
      <span style={{ background: " #00AAA1" }}>{splitTxt[0]}</span>{" "}
      {splitTxt[1]}
    </p>
  );
}

export default Title;
