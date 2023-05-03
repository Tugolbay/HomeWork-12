export const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        onSubmit={props.onSubmit}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};
