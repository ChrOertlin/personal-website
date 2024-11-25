import NavBarItem from '../NavBarItem/NavBarItem.tsx';
import { NavBarItemProps } from '../NavBarItem/NavBarItem.tsx';

const navItems: NavBarItemProps[] = [
  { href: '/', itemName: 'Home' },
  { href: '/about', itemName: 'About' },
  { href: '/work', itemName: 'Work' },
  { href: '/resume', itemName: 'Resume' },
];

function NavBar() {
  return (
    <nav className="bg-black justify-center">
      <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-lg">
        <ul className="flex flex-row gap-x-8">
          {navItems.map((item, index) => (
            <NavBarItem key={index} href={item.href} itemName={item.itemName} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;