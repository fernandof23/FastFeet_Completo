import File from '../Models/file';

class Files {
    async store(req, res) {
        try {
            const { originalname: name, filename: path } = req.file;

            const file = await File.create({ name, path });

            return res.send(file);
        } catch (err) {
            return res.status(err.status).send(err.message);
        }
    }
}

export default new Files();
