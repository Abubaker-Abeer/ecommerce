import connectDB  from '../DB/connection.js';
import cors from 'cors';
const initApp= async(app,express)=>{
   app.use(cors());
   connectDB();
    app.use(express.json());   
    app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: "welcome ..." });
});

app.get('*', (req, res) => {
  return res.status(404).json({ message: "page not found" });
});
    app.use((err,req,res,next)=>{
    return  res.status(err.statusCode).json({ msg: err.message });
    });
}
export  default initApp