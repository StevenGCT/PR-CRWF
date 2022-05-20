import { usePostsCat } from '../context/postContext2'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function SearchByCategory() {
    const {postsCat} = usePostsCat()
    console.log("Posts SearchByCategory",postsCat)
    return(
    <DropdownButton id="dropdown-item-button" title="Buscar por Categoría" size="md" className="d-grid gap-2 m-2" variant="dark">
    {postsCat.map(postCat => (
        <Dropdown.Item key={postCat.IdCategory} as="button">{postCat.CategoryName}</Dropdown.Item>
    ))}
    </DropdownButton>
    );
}