export const getProductBYCategory=(category)=>{

  return  fetch(`https://dummyjson.com/products/category/${category}`)
.then(res => res.json())


   
    } 
    
    export default getProductBYCategory