import { Link } from 'react-router-dom';
import SearcgOrder from '../features/order/SearcgOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 font-pizza uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearcgOrder />
      <Username />
    </header>
  );
};

export default Header;
