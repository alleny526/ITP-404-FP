export default function BookmarkButton(props) {
  return (
    <>
      <form data-testid="form" onSubmit={props.onSubmit}>
        <button type="submit" className="btn btn-primary">
          Bookmark
        </button>
      </form>
    </>
  );
}
