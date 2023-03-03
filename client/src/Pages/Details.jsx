import styles from "../Styles/landing.module.css";
function Details() {
  return (
    <div className={styles.details}>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            age
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone No
          </label>
          <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Details;
