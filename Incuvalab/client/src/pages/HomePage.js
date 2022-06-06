import {useCategorys} from '../context/categoryContext';
import {VscEmtyWindow} from 'react-icons/vsc';
import {Link} from 'react-router-dom'
import {CategoryCard} from '../components/categoryCard';

export function HomePage() {
  const {categorys} = useCategorys();

  if(categorys.length ===0)return(
    <div>No Existen Categorias</div>
  )
  return (
    <div className="text-black">
      <Link to="/categoryForm">Crear nueva Categoria</Link>
       <div className="grid grid-cols-3 gap-2">
        {categorys.map(category =>(
          <CategoryCard category={category} key={category.IdCategory}/>
        ))}
       </div>
       </div>
       
  );
}