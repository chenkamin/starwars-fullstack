const makeApiCall = require("../services/apiService")
const AppError = require("../utils/appError")
const apiMap = {
  characters: "people",
  vehicles: "vehicles",
}

exports.getFilms = async (req, res, next) => {
  let result;
  try {
    let query = req.query.title ? `?search=${req.query.title}` : ''
    result = await makeApiCall('GET', `films/${query}`)
  } catch (e) {
    next(new AppError(e, 404));
  }
  res.status(200).json(result)

}




exports.getFilm = async (req, res, next) => {
  let expandQueryResults = [];
  const { id } = req.params
  const { expand } = req.query
  if (!apiMap[expand]) {
    return res.json("error", "invalid expand query")
  }
  try {
    let result = await makeApiCall('GET', `films/${id}`)
    for (let char of result[expand]) {
      let result = await makeApiCall('GET', char)
      expandQueryResults.push(result)
    }
    res.status(200).json(expandQueryResults)
  } catch (e) {
    next(new AppError(e, 404));
  }
}
