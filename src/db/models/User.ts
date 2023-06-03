import  { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface UserAttributes {
  id: number;
  name: string;
  surname: string;
  email: string;
  isActivated: boolean;
  password: string;
  activationLink: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id' > {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserOutput {
  public id!: number;
  public name!: string;
  public surname!: string;
  public password!: string;
  public email!: string;
  public isActivated!: boolean;
  public activationLink!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    unique: true,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_activated',
  },
  activationLink: {
    type: DataTypes.STRING,
    field: 'activation_link',
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at'
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  // paranoid: true
});

export default User;