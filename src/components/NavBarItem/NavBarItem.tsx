interface NavBarItemProps {
    href: string;
    itemName: string;
  }

const NavBarItem: React.FC<NavBarItemProps> = ({ href, itemName, }) => {
    return(
    <li>
        <a
            href={href}
            className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-primary-700 md:p-0"
            aria-current="page"
        >
            {itemName}
        </a>
    </li>

)};

export default NavBarItem;
export type { NavBarItemProps };