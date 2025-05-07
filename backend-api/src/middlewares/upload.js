import multer from 'multer';
import path from 'path';
import fs from 'fs';

// a pasta que as fotos vão ser armazenadas
const uploadDir = path.resolve(process.cwd(), './uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuração do armazenamento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${file.fieldname}${ext}`;
        cb(null, name);
    },
});

//  opcional para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos de imagem são permitidos.'));
    }
};

export const upload = multer({ storage, fileFilter });
