import multer from "multer";
//vou precisar salvar os dados em algum lugar
import path from 'path';




const storage = multer.diskStorage({
    destination:(request,file,cb) =>{
        cb(null,path.join(__dirname,"../uploads"))
    },
    filename: (request,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

       return cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})


function fileFilter(req: Express.Request, file: Express.Multer.File, cb) {
   
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('So imagens são aceitas'), false);
      
    }
    cb(null, true);
  }

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }  
  });
export default upload