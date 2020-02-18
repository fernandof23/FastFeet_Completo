import Sequelize, { Model } from 'sequelize';

class DeliveryMan extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            { sequelize }
        );
        return this;
    }

    static associate(model) {
        this.belongsTo(model.File, { foreignKey: 'avatar_id', as: 'avatar' });
    }
}

export default DeliveryMan;
