import React from "react";

const Login: React.FC = () => {
  return (
    <div className="container">
      <h1 className="d-flex justify-flex-start">Login form</h1>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1 d-flex justify-flex-start">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small
              id="emailHelp"
              className="form-text text-muted d-flex justify-flex-start"
            >
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1 d-flex">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label d-flex justify-flex-start"
              htmlFor="exampleCheck1"
            >
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-flex justify-flex-start"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
