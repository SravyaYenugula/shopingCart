export const getAddCart=(id)=>{

   
return fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: id,
        quantity: 1,
      }
    ]
  })
})
.then(res => res.json())
      
    } 
    
    export default getAddCart