import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../app/Models/user';
import Recipients from '../app/Models/recipient';
import File from '../app/Models/file';
import Deliveryman from '../app/Models/deliveryman';

const models = [User, Recipients, File, Deliveryman];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
