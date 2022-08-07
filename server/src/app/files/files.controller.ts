import {Request, Response} from "express";
import {filesService} from "./files.service";
import {FilesCreateDto} from "./files.dto";
import {UploadedFile} from "express-fileupload";

class FilesController {

    async uploadFile(req: Request, res: Response) {
        try {
            const file = req.files?.file as UploadedFile
           // const params = new FilesCreateDto(req.body)

            if (!file) {
                return res.status(200).json({items: null, message: 'Загрузите файл', isError: true})
            }

            const items = await filesService.uploadFile(file)

            return res.status(200).json({items})

        } catch (e) {
            console.log(e)
            res.status(500).json({items: null, message: e, isError: true})
        }
    }

    async get(req: Request, res: Response) {
        res.status(200).json({mezza: req.httpVersion})
    }
}

export const filesController = new FilesController()