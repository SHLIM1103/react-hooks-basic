import React from "react"
import ReactDOM from "react-dom"
import useAxios from "./useAxios"

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://api.themoviedb.org/3/movie/550?api_key=23b3e070c63ad3b31ad25441c2bbc523"
  })
  console.log(`loading: ${loading},\nerror: ${error},\ndata: ${JSON.stringify(data)}`)
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading..."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
