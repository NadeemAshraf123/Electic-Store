import { Link } from 'react-router-dom';

const RQNavbar = () => {
  return (
    <div className="bg-[#fff5e1] px-6 py-4 flex space-x-6 text-purple-700 text-lg underline">
      <Link to="/rqhome" className="hover:text-purple-900 transition">Home Page</Link>
      <Link to="/super-heroes" className="hover:text-purple-900 transition"> Super Heroes Page</Link>
      <Link to="/rq-super-heroes" className="hover:text-purple-900 transition">RQ Super Heroes Page</Link>
    </div>
  );
};

export default RQNavbar;
