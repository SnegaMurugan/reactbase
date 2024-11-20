
import { CardComponents } from './assets/CardComponents';
import { WelcomeComponents } from "./assets/WelcomeComponents";


function App() {

  const marveldata=[
    {
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Firon-man-superhero&psig=AOvVaw2AxdhMm82O6oATPdKCDjLY&ust=1732033255918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiEue6k5okDFQAAAAAdAAAAABAK",
        name:"ironman",
    },
    {
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fsuriman-map&psig=AOvVaw1VeDJGbwL0bG1wo9nh2ZII&ust=1732034563761000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi6_Nup5okDFQAAAAAdAAAAABAE",
      name:"suriman"
    },
    {
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dsingle%2Blilly&psig=AOvVaw1lUsYhuWgfbUYpIibxKYgF&ust=1732206806445000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDI066r64kDFQAAAAAdAAAAABAE",
      name:"balmann"
    }
  ]
  

  return (
    <>
      <h1>IM SNAKEUHH</h1>
      <WelcomeComponents/>
      {marveldata.map((data,idx)=>(
        <div key={idx}>
      
      <CardComponents name={data.name} 
      image={data.image}/>
      </div>
     ))} 

    </>
  )
}

export default App


