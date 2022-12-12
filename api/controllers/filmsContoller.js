const makeApiCall = require("../services/apiService")


exports.getFilms = async (req, res) => {
  let result;
  try{
    let query = req.query.title ? `?search=${req.query.title}` : ''
    result = await makeApiCall('GET',`films/${query}`)
  }catch(e){
    res.json("error",e)
  }
  res.status(200).json(result)

}


const apiMap = {
  characters:"people",
  vehicles:"vehicles",
}

exports.getFilm = async (req, res) => {
  
  let expandQueryResults = [];
  const {id} = req.params
  const {expand} = req.query
  if(!apiMap[expand]){
    console.log("ERROR??")
    return res.json("error","invalid expand query")
  }
  try{
    // console.log('query',expand )
    // console.log("map",apiMap[expand])
    let result = await makeApiCall('GET',`films/${id}`)
    // console.log(result[expand])
    for(let char of result[expand]){
      let result = await makeApiCall('GET',char)
      expandQueryResults.push(result)
    }
      res.status(200).json(expandQueryResults)

  }catch(e){
    console.log("2 error!!")
    res.status(404).json("error",e)
  } 
}
