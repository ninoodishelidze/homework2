// example 1
const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 },
   
  ];
  const lowest = users.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
  });
  
  console.log(lowest);


//   example 2

 let user = {
      name : 'car',
      brand: 'BMW',
      year : 2020
  
    }

     user.name = "ford";
     user.brand = 'ford'
     user.year = 2018

      

      console.log(user)
