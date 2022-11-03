function Description(props, color) {
  return (
    <section>
      <p
        style={{ backgroundColor: color }}
        className="text-base font-font-semibold leading-1/26 whitespace-pre-line "
      >
        {props.description}
      </p>
    </section>
  );
}
export default Description;
