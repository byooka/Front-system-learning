const Theaters = require('../../model/Theaters')

module.exports = async data => {

  for (let i = 0; i < data.length; i++) {
    let item = data[i]

    const result = await Theaters.create({
      title: item.title,
      rating: item.rating,
      runtime: item.runtime,
      directors: item.directors,
      casts: item.casts,
      image: item.image,
      doubanId: item.doubanId,
      genre: item.genre,
      summary: item.summary,
      releaseDate: item.releaseDate
    })
    console.log('Theaters数据保存成功', result)

  }

}