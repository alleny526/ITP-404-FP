export default function DeleteButton(props) {
  return (
    <>
      <form data-testid="form" onSubmit={props.onSubmit}>
        <button type="submit" className="btn btn-primary">
          Delete
        </button>
      </form>
    </>
  );
}
