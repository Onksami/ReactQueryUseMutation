
import { useQuery } from 'react-query'
import './App.css'

//useQuery is just pulling data (get request)
//useMutation is adding, upgrading, changing data (post, delete, push)

function App() {

  // useQuery has 3 parameters. whenever the first parameters changes, the function(second parameter) works.

  // enabled property is stopping the data getting when the component mount.

  //https://jsonplaceholder.org/posts

  const fetchData = useQuery(["posts"], () => {
    return fetch("https://jsonplaceholder.org/posts").then(response => response.json());
  }, {
    enabled: false
  } )

  const {data, isLoading, refetch} = fetchData


  console.log( "fetchData", data, isLoading);

  if (isLoading) {
    return <div>Loading...</div>  }


  

  return (
  <div>
    <button onClick={() => refetch()}> Get Data </button>
    <div>
      {
        data && data.map((dt,i) => (
          <div key={i}>{dt.title}</div>
        ))
      }
    </div>
  </div>
  )
}

export default App
