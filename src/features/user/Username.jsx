import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return <div className="font-semibol hidden text-sm md:block">{username}</div>;
};

export default Username;
