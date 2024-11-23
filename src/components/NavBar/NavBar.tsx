import NavBarItem from '../NavBarItem/NavBarItem.tsx';
import { NavBarItemProps } from '../NavBarItem/NavBarItem.tsx';

const navItems: NavBarItemProps[] = [
  { href: '#', itemName: 'About' },
  { href: '#', itemName: 'Projects' },
  { href: '#', itemName: 'Resume' },
];

function NavBar() {
  return (
    <nav className="bg-black">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Christian Oertlin
          </span>
        </a>
        <ul className="flex flex-row ml-auto gap-x-8">
          {navItems.map((item, index) => (
            <NavBarItem key={index} href={item.href} itemName={item.itemName} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;