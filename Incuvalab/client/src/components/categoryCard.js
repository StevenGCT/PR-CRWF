import toast from 'react-hot-toast';
import {useCategorys} from '../context/categoryContext';
import {useNavigate} from 'react-router-dom';

export function CategoryCard({category}){

    const {deleteCategory} = useCategorys();
    const navigate = useNavigate();
    const handleDelete = (idCategory) =>{
           toast((t)=> (
               <div>
                   <p className="text-black"> Estas seguro de Eliminar el registro con el ID: <strong>{idCategory} </strong> ?</p>
                   <div>
                       <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-black rounded-sm mx-2" 
                       onClick={()=> {
                           deleteCategory(idCategory);
                           toast.dismiss(t.id);
                           }}>Delete
                       </button>
                       <button className="bg-slate-400 hover:bg-slate-500 px-3 py-3
                                            text-white rounded-sm mx-2" onClick={()=>toast.dismiss(t.id)}
                                            >
                                                Cancelar
                                                </button>
                   </div>
               </div>
           )) 
    };
    return (
        <div className="bg-gray-100 text-black rounded-sm shadow-black
                        hover:bg-gray-300 hover:cursor-pointer"
                        onClick={()=> navigate('/categoryForm/'+category.IdCategory)}> 
            <div className="px-4 py-7">
                <div className="flex justify-between">
                    <h3>
                    {category.CategoryName}
                    </h3>
                    <button className="bg-red-300 text-sm px-2 py1 rounded-sm"
                        onClick={()=>handleDelete(category.IdCategory)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}