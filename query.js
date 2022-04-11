const { User, Article } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllUsers = async () => {
  try {
    const results = await User.findAll()
    stringify(results)
  } catch (error) {
    console.log(error)
    return false
  }
}

const articlesWithCreator = async () => {
  try {
    const articles = await Article.findAll({
      include: [{ model: User, as: 'creator' }]
    })
    stringify(articles)
  } catch (error) {
    console.log(error)
    return false
  }
}

//Bonus
const getAllBookmarks = async () => {
  try {
    // execute query here
    // Return the result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = {
  articlesWithCreator,
  getAllBookmarks,
  getAllUsers,
  stringify
}
