const fs = require('fs');
const sharp = require('sharp');

const { url_upload_file } = require('../constant/config');

const BASE_FILENAME = "transformed";

module.exports = class ChangeImageFormatCtrl {
    static async post(req, res, next) {
        try {
            const { height, width, imageFormat } = req.body;
            const files = req.files;
            let transformedFiles = [];

            for (let index = 0; index < files.length; index++) {
                const file = files[index];

                const newFileName = await processingImage(file, width, height, imageFormat);
                transformedFiles.push(newFileName);
            }

            return res.status(200).json({ status: 200, images: transformedFiles });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 500, error: 'Internal Server Error' });
        }
    }

    static async get(req, res, next) {
        try {
            const { fileName } = req.params;

            res.sendFile(`${url_upload_file}/${fileName}`);
            setTimeout(() => {
                fs.unlinkSync(`${url_upload_file}/${fileName}`);
            }, 1000);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 500, error: 'Internal Server Error' });
        }
    }
};

const processingImage = async (file, width, height, imageFormat) => {
    const realFileName = `${file.path}`;
    let fileName = file.filename.split('.');
    fileName[fileName.length - 1] = imageFormat;
    fileName = fileName.join('.');

    try {
        const transformedFilename = `${BASE_FILENAME}-${fileName}`;
        await sharp(realFileName)
            .resize({ width: +width, height: +height })
            .clone()
            .toFormat(imageFormat)
            .toFile(`${url_upload_file}/${transformedFilename}`);

        fs.unlinkSync(realFileName);

        return transformedFilename;
    } catch (error) {
        fs.unlinkSync(realFileName);

        throw error;
    }
};