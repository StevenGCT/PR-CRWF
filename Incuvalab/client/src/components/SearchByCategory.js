import { usePostsCat } from '../context/userContext'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom"

export function SearchByCategory() {
    const {postsCat} = usePostsCat()
    const {navigate} = useNavigate()
    console.log("Posts SearchByCategory",postsCat)
    return(
    <DropdownButton id="dropdown-item-button" title="Buscar por Categoría" size="md" className="d-grid gap-2 m-2" variant="dark">
    {postsCat.map(postCat => (
        <Dropdown.Item key={postCat.IdCategory} as="button" onClick={()=> navigate(`/${postCat.IdCategory}`)}>{postCat.CategoryName}</Dropdown.Item>
    ))}
    </DropdownButton>
    );
}