import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="h-screen bg-blue-50">
      <h1>Aside</h1>
      <Link to="/edit">Edit</Link>
      <Link to="/preview">preview</Link>
    </div>
  );
};
export default Aside;
