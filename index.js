const http = require("http");
const PORT = 6000;
const app = require("./app");
const connectDB = require("./MongoDb");

http.createServer(app).listen(PORT, () => {
  new connectDB();
  console.log(`Server is running at port no. ${PORT}`);
});






// const express =require('express')
// const mongoose=require('mongoose')

// const app = express();
// app.use(express.json());

// const connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/")
// }
// app.listen(5000, async(req,res)=>{
//   await connect();

//   console.log("Listining on port 5000")
// })

// const userSchema = new mongoose.Schema(
//   {
//     name:{type:String, required:true},
//     lastName:{type:String, required:true},
//     age:{type:Number, require:true},
//     email:{type:String, require:true},
//     image:{type:String, required:true},
//     strikeOff:{type:Number, required:true},
//   },{
//     versionKey:false,
//     timestamps:true,
//   }
// )

// module.exports = mongoose.model('user', userSchema);

// app.post("/users", async(req,res) => {
//   try{
//     const user =await User.create(req.body)
//     return res.status(201).send(user);
//   }
//   catch(e){
//     return res.status(500).send(e.message)
//   }
  
// })

// app.get("/users",async(req,res)=>{
//   try{
//       const user = await User.find().populate("master").populate("email").lean().exec();
//       return res.status(201).send(user);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// app.get("/users/:id",async(req,res)=>{
//   try{
//       const publication = await User.findById(req.params.id).lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// app.patch("/users/:id",async(req,res)=>{
//   try{
//       const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
//       return res.status(201).send(user);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.delete("/users/:id",async(req,res)=>{
//   try{
//       const user = await User.findByIdAndDelete(req.params.id).lean().exec();
//       return res.status(201).send(user);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// // book

// const book = new mongoose.Schema(
//   {
//   name:{type:String, required:true},
//   integer:{type:Number, required:true},
//   image:{type:String, required:true},
//   content:{type:String, required:true},
//     strikeOff:{type:Number, required:true},
//   },{
//     versionKey:false,
//     timestamps:true,
//   }

// )
// module.exports = mongoose.model('book', bookSchema);

// app.post("/book", async(req,res) => {
//   try{
//     const branch = await Book.create(req.body)
//     return res.status(201).send(branch);

//   }
//   catch(e){
//     return res.status(500).send(e.message)
//   }
// })

// app.get("/book",async(req,res) => {
//   try{
//     const branch = await Book.find().populate("master").lean().exec();
//     return res.status(201).send(branch);

//   }
//   catch(e){
//     return res.status(500).send(e.message)
//   }
// })

// app.get("/book/:id",async(req,res)=>{
//   try{
//       const publication = await Book.findById(req.params.id).lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.patch("/book/:id",async(req,res)=>{
//   try{
//       const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
//       return res.status(201).send(branch);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.delete("/book/:id",async(req,res)=>{
//   try{
//       const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
//       return res.status(201).send(branch);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// // publication model
// const publicationSchema = new mongoose.Schema({

//   name:{type:String, required:true},

// },
// {
//   versionKey:false,
//   timestamps:true
// }
// );

// const Publication = mongoose.model("publication",publicationSchema)


// //CRUD for branch DEtailes;
// app.post("/publication" , async(req,res)=>{
//   try{
//       const publication = await Publication.create(req.body)
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// app.get("/publication",async(req,res)=>{
//   try{
//       const publication = await Comment.find().populate("master").lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.get("/publication/:id",async(req,res)=>{
//   try{
//       const publication = await Comment.findById(req.params.id).lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.patch("/publication/:id",async(req,res)=>{
//   try{
//       const publication = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.delete("/publication/:id",async(req,res)=>{
//   try{
//       const publication = await Comment.findByIdAndDelete(req.params.id).lean().exec();
//       return res.status(201).send(publication);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// // comment

// const commentSchema = new mongoose.Schema({
//   body:{type:String, required:true}
// },
// {
//   versionKey:false,
//   timestamps:true
// }
// );

// const Comment = mongoose.model("comment",saveSchema)


// //CRUD for branch DEtailes;
// app.post("/comment" , async(req,res)=>{
//   try{
//       const comment = await Comment.create(req.body)
//       return res.status(201).send(comment);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })

// app.get("/comment",async(req,res)=>{
//   try{
//       const comment = await Comment.find().populate("master").lean().exec();
//       return res.status(201).send(comment);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.get("/comment/:id",async(req,res)=>{
//   try{
//       const comment = await Comment.findById(req.params.id).lean().exec();
//       return res.status(201).send(comment);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.patch("/comment/:id",async(req,res)=>{
//   try{
//       const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
//       return res.status(201).send(comment);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })
// app.delete("/comment/:id",async(req,res)=>{
//   try{
//       const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
//       return res.status(201).send(comment);
//   }
//   catch(e){
//       return res.status(500).send(e.message)
//   }
// })