import {FilesCreateDto} from "./files.dto";
import {UploadedFile} from "express-fileupload";
import path from "path";
import * as xlsx from "xlsx";
import {v4} from 'uuid'
import fs from 'fs'

class FilesService {

    async uploadFile (file: UploadedFile) {

        const type = file.name.split('.')[file.name.split('.').length - 1]

        const fileName = v4() + `.${type}`

        const filePath = path.join(__dirname, '..', '..', '..', 'dist', 'static', fileName)

        await file.mv(filePath)

        const response = await this.parseFile(filePath, type)

        return {
            data: response,
            fileName: fileName
        }

    }

    async parseFile (filePath: string, fileType: string) {

        switch (fileType) {
            case 'xlsx':
                return this.parseExcel(filePath)
            case 'pdf':
                return this.parsePdf(filePath)
            default:
                throw new Error('К сожадению мы не могли обработать такой тип файла:(')
        }


    }

    parseExcel (filePath: string) {

        const workbook = xlsx.readFile(filePath);
        const sheetNames = workbook.SheetNames;

        let obj = {}

        sheetNames.forEach(sheet => {
            const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
            obj = {
                ...obj,
                [sheet]: data
            }
        })

        return obj
    }

    async parsePdf (filePath: string) {
        let res: any = []

        const data = fs.readFileSync(filePath, 'utf-8')

        return data.toString()
    }
}

export const filesService = new FilesService()