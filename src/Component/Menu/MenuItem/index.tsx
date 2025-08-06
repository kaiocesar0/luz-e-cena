import Link from "../../Link/Index"

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>{
  href? : string
}

const MenuItem = ({href= "#", children}: MenuItemProps) => {
  return(
    <li>
      <Link href={href} >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem