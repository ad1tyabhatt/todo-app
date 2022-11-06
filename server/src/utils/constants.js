
const DB_CONNECT = "mongodb+srv://adityabhatt:Aditya123@cluster0.n0ud0ep.mongodb.net/todo?retryWrites=true&w=majority"

JWT_TOKEN = "alsdmlasdnla"

const StatusCode = {
  SUCCESS:200,
  VALIDATION_ERROR:201,
  UNPROCESSED:202
} 

module.exports ={ StatusCode, DB_CONNECT, JWT_TOKEN}