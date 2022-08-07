
export class FilesCreateDto {
    name: string
    fileType: string

    constructor(body: any) {

        this.name = body.name
        this.fileType = body.fileType
    }
}
