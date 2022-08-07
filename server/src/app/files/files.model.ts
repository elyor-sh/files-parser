import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
    fileType: {type: String, required: true},
    fileLink: {type: String, required: true},
    author: {type: Types.ObjectId, ref: 'User'}
})

export const FilesModel = model('Files', schema)