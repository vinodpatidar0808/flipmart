import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="flex w-full justify-end px-5 py-5">
        <Link className="bg-secondary px-2 py-2 text-white font-semibold text-lg rounded-md border outline-none" to="/admin/createproduct">Add product</Link>
      </div>
    </div>
  );
};

export default Admin;
