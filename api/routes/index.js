const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const changeImageFormatRoutes = require('./changeImageFormat');
const { url_upload_file } = require('../constant/config');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, url_upload_file);
    },
    filename: function (req, file, cb) {
        let filenameArray = file.originalname.split('.');
        let mimetype = filenameArray[filenameArray.length - 1];

        cb(null, filenameArray[0] + '_' + Date.now() + '.' + mimetype);
    },
});

const upload = multer({ storage: storage });
const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method [:status] :url :res[content-length] - :response-time ms'));

//Resources
app.use(express.static(path.join(__dirname, '../assets')));

// End points
app.use('/api/v1/changeImageFormat', upload.array('files', 5), changeImageFormatRoutes);

module.exports = app;
