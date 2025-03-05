import path from "path";
import multer from "multer";



const storage = multer.diskStorage({
    destination:(request,file,cb)=>{
        cb(null,path.join(__dirname,"../uploads/csv"))
    },
     filename: (request,file,cb)=>{
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    
           return cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
        }
})

function fileFilter(req: Express.Request, file: Express.Multer.File, cb) {
   
    if (!file.mimetype.startsWith('text/')) {
      return cb(new Error('So arquivos csv são aceito'), false);
      
    }
    cb(null, true);
  }

const csvUpload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } 
})

export default csvUpload