import { mockItems } from "./mockItems";

const asyncMock = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        <mockItems />
        //para sacar un dato random de los items
        const randomIndex = Math.floor(Math.random() * mockItems.length);
        const randomItem = mockItems[randomIndex];
  
        resolve(randomItem);
      }, 3000); //aumenté a 3seg para hacer una animacion 
    });
  };
  
  export default asyncMock;
  


