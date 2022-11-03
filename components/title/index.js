function Title(props, color) {
  return (
    <section>
      <h4
        style={{ backgroundColor: color }}
        className="not-italic font-font-bold lg:text-1/40 text-1/32 lg:w-[500px] leading-1/56  m-0  whitespace-pre-line"
      >
        {props.title}
      </h4>
    </section>
  );
}
export default Title;
