import { Link } from "react-router-dom";

/**
 * Layout component provides consistent navigation structure across pages.
 * Simple wrapper that adds a navigation bar to any child components.
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render within the layout
 * @returns {JSX.Element} Layout with navigation and children
 */
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

/**
 * Higher-order component that wraps a component with the Layout.
 * Enables consistent page structure across routes without repetitive code.
 *
 * @param {React.ComponentType} Component - The component to wrap with layout
 * @returns {Function} A new component that renders the original within Layout
 *
 * @example
 * const HomePage = withLayout(() => <div>Home Content</div>);
 */
export const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);
