const mongoose = require('mongoose')

// 获取Schema
const Schema = mongoose.Schema

// 创建约束对象
const thatersSchema = new Schema({
  title: String,
  rating: Number,
  runtime: String,
  directors: String,
  casts: String,
  image: String,
  doubanId: {type: Number, unique: true},
  genre: [String],
  summary: String,
  releaseDate: String,
  posterKey: String,    // 图片上传到七牛，返回的key
  createTime: {
    type: Date,
    default: Date.now()
  }
})

// 创建模型对象
const Theaters = mongoose.model('theater', thatersSchema)

module.exports = Theaters