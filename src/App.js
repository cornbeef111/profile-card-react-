import React from 'react';
import './App.css';
import Header from './Profile.js';
import About from './About.js';
import Footer from './Foooter.js';
import Secondname from './Secondname';
// import Joke from './Joke.js'
// import Jokesarray from './Jokesarray';
// import Message from './Message.js'



// let jokes = Jokesarray.map(joke => {
//   return (
//     <Joke 
//     setup={joke.setup}
//     punchline={joke.punchline}
//     />
//   )
// })


function App() {
return(
  <div className="card" >
         <Header /> 
         <About />
         <Footer />
        <Secondname />
 </div>
);

}

export default App;




// this is an example showing that i can define a component inside another component and just call the function
// function List2(){
//   return(
//     <div>
//       <p>This is a second list created inside App.js</p>
//       <ul>
//         <li>yes</li>
//         <li>yes</li>
//         <li>yes</li>
//         <li>yes</li>
//       </ul>
//     </div>
//   )
// }






// return (
//   <div /*className="card"*/ >
//       {/* <Header /> */}
//       {/* <About /> */}
//       {/* <Footer /> */}
//       {/* <Secondname /> */}
//   </div>
   
//   );