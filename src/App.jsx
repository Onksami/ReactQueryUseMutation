

import { useMutation } from 'react-query'
import './App.css'


//useMutation is adding, upgrading, changing data (post, delete, push)

// when we want to create something, we need to some parameters for the function. (ex: newPost)

// mutate and reset functions are coming with useMutation

// <pre> HTML tag, preformatted text 

/*   <pre>{JSON.stringify(data, null, 2)}</pre> ----> The JSON.stringify(data, null, 2) function converts a JavaScript object or value (data) into a JSON string. This function takes three parameters:

data: The object or value you want to convert into JSON format. This typically represents the data you received from an API.

 null: The replacer parameter. This parameter can be a function or an array used to control which keys should be included in the conversion. When set to null, it means all keys will be included.

2: The space parameter. This specifies the indentation level in the resulting JSON string. A value of 2 means each level of nesting will be indented with two spaces, making the JSON output more readable.

*/ 

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

  <div>
        {data && (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    
  </div>
  )
}

export default App
