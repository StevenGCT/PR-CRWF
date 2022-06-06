import {useState, createContext, useContext, useEffect} from 'react';
import {getCategorysRequest, createCategoryRequest, deleteCategoryRequest, getCategoryRequest, updateCategoryRequest} from '../api/categorys';

const categoryContext = createContext();
export const useCategorys = () =>{
    const context = useContext(categoryContext);
    return context;
}

export const CategoryProvider = ({children}) =>{
    const [categorys, setCategorys] = useState([]);

    const getCategorys = async()=>{
        const res = await getCategorysRequest();
        setCategorys(res.data);
    }
    const createCategory = async(category)=>{
        const res = await createCategoryRequest(category);
        setCategorys([...categorys, res.data['Category']]);
        console.log(res.data['Category']);
    }
    const deleteCategory =async (id) =>{
        const res =await deleteCategoryRequest(id);
        if(res.status === 200){
            setCategorys(categorys.filter((category) => category.IdCategory !== id));
        console.log(res.data);
        }
        
    }
    const getCategory = async(id)=>{
        const res = await getCategoryRequest(id);
        return res.data;
    }
    const updateCategory = async(id)=>{
        const res = await updateCategoryRequest(id)
        return res.data;
    }
    useEffect(() =>{
        getCategorys();
      },[]);
    return <categoryContext.Provider value={{
        categorys,
        getCategorys,
        createCategory,
        deleteCategory,
        getCategory
    }}>
        {children}
    </categoryContext.Provider>
}