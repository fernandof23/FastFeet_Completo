import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../app/Models/User';
import Recipient from '../app/Models/Recipient';
import File from '../app/Models/File';
import Deliveryman from '../app/Models/Deliveryman';
import Delivery from '../app/Models/Delivery';
import Deliveryproblem from '../app/Models/DeliveryProblem';

const models = [User, Recipient, File, Deliveryman, Deliveryproblem, Delivery];

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
