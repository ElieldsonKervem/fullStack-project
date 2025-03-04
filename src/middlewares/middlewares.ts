import { Request,Response,NextFunction } from "express";

import { v4 as uuidV4 } from "uuid";

export default function verifyIdExist(request: Request, response: Response, next: NextFunction) {
 
    if (!request.body.id) {
        console.log("id não exisitia e foi criado")
        request.body.id = uuidV4();
    }

    next();
}