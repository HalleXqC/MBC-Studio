import { Link, useResolvedPath, useMatch } from "react-router-dom"

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <div>
            <Link
            style={{ color: match ? "rgba(236, 28, 36, 1)" : "white" }}
            to={to}
            {...props}
            >
            {children}
            </Link>
        </div>
    )
}

export default CustomLink