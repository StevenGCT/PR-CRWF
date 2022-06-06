import axios from 'axios';

export const getCategorysRequest =async ()=> await axios.get('/categorys');
export const createCategoryRequest =async (category)=> await axios.post('/categorys', category);
export const deleteCategoryRequest =async (id)=> await axios.delete('/categorys'+'/'+id);
export const getCategoryRequest =async (id)=> await axios.get('/categorys'+'/'+id);
export const updateCategoryRequest =async (id)=> await axios.put('/categorys'+'/'+id);



