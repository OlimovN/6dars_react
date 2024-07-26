import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {
//   const [user, setUser] = useState([]);
//   const [filteredUser, setFilteredUser] = useState([]);
//   const boshlangichRef = useRef();
//   const tugashRef = useRef();

//   async function api(url) {
//     try {
//       const response = await fetch(url);
//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       } else {
//         console.error("error");
//         return [];
//       }
//     } catch (error) {
//       console.log(error);
//       return [];
//     }
//   }

//   useEffect(() => {
//     api("https://jsonplaceholder.typicode.com/photos")
//       .then((data) => {
//         setUser(data);
//         setFilteredUser(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleFilter = () => {
//     const boshlangichId = boshlangichRef.current.value;
//     const tugashId = tugashRef.current.value;
//     const filtered = user.filter(
//       (item) => item.id >= boshlangichId && item.id <= tugashId
//     );
//     setFilteredUser(filtered);
//   };

//   return (
//     <div className="App">
//       <div className="filter">
//         <input
//           type="number"
//           placeholder="Boshlangich Id"
//           ref={boshlangichRef}
//         />
//         <input type="number" placeholder="Tugash Id" ref={tugashRef} />
//         <button onClick={handleFilter}>Filter</button>
//       </div>
//       <div className="cards">
//         {filteredUser.slice(0, 60).map((item) => (
//           <div className="user-card" key={item.id}>
//             <img src={item.thumbnailUrl} alt={item.title} />
//             <div className="card-content">
//               <h1>AlbumId: {item.albumId}</h1>
//               <h1>{item.title}</h1>
//               <p>Id: {item.id}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 


// 2- fail
// __________________________________________________________________________




// function App() {
//   const fullNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);
//   const descRef = useRef(null);

//   function validateForm() {
//     if (fullNameRef.current.value === "") {
//       alert("Full name  kiriting");
//       return false;
//     }
//     if (emailRef.current.value === "") {
//       alert("Email  kiriting");
//       return false;
//     }
//     if (usernameRef.current.value === "") {
//       alert("Username kiriting");
//       return false;
//     }
//     if (passwordRef.current.value === "") {
//       alert("Password  kiriting");
//       return false;
//     }
//     if (descRef.current.value === "") {
//       alert("Description  kiriting");
//       return false;
//     }
//     return true;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const isValid = validateForm();
//     if (!isValid) {
//       return;
//     }

//     const test = {
//       fullName: fullNameRef.current.value,
//       email: emailRef.current.value,
//       username: usernameRef.current.value,
//       password: passwordRef.current.value,
//       desc: descRef.current.value,
//     };

//     console.log(test);

//     fullNameRef.current.value = "";
//     emailRef.current.value = "";
//     usernameRef.current.value = "";
//     passwordRef.current.value = "";
//     descRef.current.value = "";
//   }

//   return (
//     <div className="App">
//       <form className="form-container" onSubmit={handleSubmit}>
//         <h2>Create An Account</h2>
//         <p>Kindly fill the following details to create your account.</p>
//         <input
//           ref={fullNameRef}
//           type="text"
//           placeholder="Enter your full name"
//         />
//         <input
//           ref={emailRef}
//           type="email"
//           placeholder="Enter your email address"
//         />
//         <input
//           ref={usernameRef}
//           type="text"
//           placeholder="Enter your username"
//         />
//         <input ref={passwordRef} type="password" placeholder="Enter password" />
//         <textarea ref={descRef} placeholder="Your Biography" />
//         <button type="submit">CREATE ACCOUNT</button>
//         <p>You will receive an email after setting up your account</p>
//       </form>
//     </div>
//   );
// }





// 3 - fayl
// __________________________________________________________________________



export default App;
