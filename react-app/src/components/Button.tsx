interface ButtonProps {
  btntxt: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <div>
        <button type="button" className="btn btn-primary">
          {props.btntxt}
        </button>
      </div>
    </>
  );
}

export default Button;
