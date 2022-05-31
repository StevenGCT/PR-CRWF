import { usePostsCat } from '../context/userContext'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

export function SearchByCategory() {
    const {postsCat} = usePostsCat()
    const {getPostsFundByCat} = usePostsCat()

    return(
    <DropdownButton id="dropdown-item-button" title="Buscar por Categoría" size="md" className="d-grid gap-2 m-2" variant="dark">
    {postsCat.map(postCat => (
        <Link to="/catalogue/category">
            <Dropdown.Item key={postCat.IdCategory} as="button" onClick={()=> getPostsFundByCat(postCat.IdCategory)}>
                {postCat.CategoryName}
            </Dropdown.Item>
        </Link>
    ))}
    </DropdownButton>
    );
}