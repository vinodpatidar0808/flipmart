import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SignupLogin = ({ type }) => {
  const navigate = useNavigate();
  const { createUser, loginUser } = useContext(AuthContext);

  const [userDetails, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // note: this can also be used.
  // const location = useLocation();
  // const type = location.pathname.split('/')[1];

  const disableLoginSignupbutton = () => {
    // TODO: if time permits use regex for email checking
    if (type === 'signup') {
      return (
        userDetails.email.trim().length === 0 ||
        userDetails.password.trim().length === 0 ||
        userDetails.name.trim().length === 0 ||
        userDetails.confirmPassword.trim().length === 0 ||
        userDetails.password !== userDetails.confirmPassword
      );
    }

    return userDetails.email.trim().length === 0 || userDetails.password.trim().length === 0;
  };

  const handleInputChange = (e) => {
    setDetails((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'signup') {
      const res = await createUser(userDetails.email, userDetails.password, userDetails.name);
      if (res) {
        navigate('/');
      }
    } else {
      const res = await loginUser(userDetails.email, userDetails.password);
      if (res) {
        navigate('/');
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-1/2 h-2/3 flex shadow-md">
        <div className="bg-primary w-2/5 h-full py-3 px-5">
          <div className="text-3xl font-bold text-white">
            {type === 'signup' ? 'Signup' : 'Login'}
          </div>
          <div className="text-white font-semibold text-lg py-3">
            {type === 'signup'
              ? 'Create an account to make shop with us.'
              : 'Access your cart and order history.'}
          </div>
        </div>
        <div className="w-3/5 h-full py-3 px-5 flex  flex-col gap-4">
          {type === 'signup' && (
            <div className="w-full flex flex-col gap-1">
              <label>Name:</label>
              <input
                className="w-full border border-primary outline-none rounded-md px-2 py-2 focus:border-2"
                type="text"
                name="name"
                placeholder="Name"
                required
                value={userDetails.name}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="w-full">
            <label>Email:</label>
            <input
              className="w-full border rounded-md px-2 py-2 border-primary outline-none focus:border-2"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Password:</label>
            <input
              className="w-full border rounded-md px-2 py-2 border-primary outline-none focus:border-2"
              type="text"
              name="password"
              placeholder="Name"
              onChange={handleInputChange}
              required
            />
          </div>

          {type === 'signup' && (
            <div className="w-full flex flex-col gap-1">
              <label>Confirm Password:</label>
              <input
                className="w-full border rounded-md px-2 py-2 border-primary outline-none focus:border-2"
                type="text"
                name="confirmPassword"
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            type="button"
            disabled={disableLoginSignupbutton()}
            className="border rounded-md border-secondary text-primary font-bold py-3 hover:bg-secondary hover:text-white disabled:bg-gray-400 disabled:border-transparent disabled:text-white disabled:pointer-events-none">
            {type === 'signup' ? 'Signup' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
