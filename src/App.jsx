

import { useMutation } from 'react-query'
import './App.css'


//useMutation is adding, upgrading, changing data (post, delete, push)

// when we want to create something, we need to some parameters for the function. (ex: newPost)

// mutate and reset functions are coming with useMutation

function App() {


  //https://jsonplaceholder.org/users



  const {data, reset, mutate, isLoading} = useMutation(["users"], (newPost) => {

    return fetch("https://jsonplaceholder.org/users",  
      {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type" : "application/json; charset=UTF-8"
        }
      }
    ).then(response => response.json())

  })



console.log("mutation data", data);

if (isLoading) {
  return <div> Loading ....</div>
}


  

  return (
  <div>
  <button onClick={() => mutate({title:"Deneme", body:"deneme-body", userId: 1})}> Add Data</button>
  <button onClick={() => reset()}> Reset Data</button>
 
  </div>
  )
}

export default App
