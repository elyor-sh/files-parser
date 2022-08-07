export const uploadSteppers = [
    'Заполните поля',
    'Загрузите файл',
    'Просмотр и завершение'
]

export interface UploadStepOneOptions {
    label: string
    value: string
}

export interface UploadFormStepOneType {
    label: string
    required: boolean
    name: string
    helperText: string
    error: boolean
    value: string
    type: 'input' | 'select',
    options?: UploadStepOneOptions[]
}

export const uploadFormStepOne: UploadFormStepOneType[] = [
    {
        label: 'Введите название',
        required: true,
        name: 'name',
        helperText: 'Название должно быть больше 2 символов',
        error: false,
        value: '',
        type: 'input'
    },
    {
        label: 'Выберите тип файла',
        required: true,
        name: 'fileType',
        helperText: 'Тип файла обязателен',
        error: false,
        value: 'xlsx',
        type: 'select',
        options: [
            {label: 'Excel', value: 'xlsx'},
            {label: 'Word', value: 'docx'}
        ]
    },
]