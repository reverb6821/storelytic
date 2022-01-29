/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { uploadFileMiddleware } from '../middlewares/upload';

declare const __basedir: any;
declare const baseUrl: any;
declare const fs: any;

export const Upload = async (req, res) => {
  try {
    await uploadFileMiddleware(req, res);

    if (req.file === undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }

    res.status(200).send({
      message: `Uploaded the file successfully: ${req.file.originalname}`,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

export const getListFiles = (req, res) => {
  const directoryPath = `${__basedir}/resources/static/assets/uploads/`;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({
        message: 'Unable to scan files!',
      });
    }

    const fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

export const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = `${__basedir}/resources/static/assets/uploads/`;

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: `Could not download the file. ${err}`,
      });
    }
  });
};
