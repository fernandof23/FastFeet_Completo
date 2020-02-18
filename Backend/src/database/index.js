import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../app/Models/user';
import Recipients from '../app/Models/Recipient';

const models = [User, Recipients];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
