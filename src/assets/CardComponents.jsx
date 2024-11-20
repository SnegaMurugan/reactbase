

export const CardComponents=({name,image})=>{
    return (
        
            <div id="card">
        <img src={image}/>
        <h1>{name}</h1>
        </div>
        
       )
};
export default CardComponents;