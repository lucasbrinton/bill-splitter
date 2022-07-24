import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/active-bill">Active Bill</Link> |{" "}
        <Link to="/split-bill">Split Bill</Link>
      </nav>
      {children}
    </div>
  );
};

export const withLayout = (Component) => (props) =>
  (
    <Layout>
      {/* All props are passed through to the Component being wrapped */}
      <Component {...props} />
    </Layout>
  );
