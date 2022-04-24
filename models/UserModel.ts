import { DataTypes } from "sequelize";

export const UserModel = {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fistName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  location: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  bio: DataTypes.TEXT,
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  last_login: DataTypes.DATE,
  status: {
    type: DataTypes.ENUM("active", "inactive", "verified", "unverified"),
    defaultValue: "active",
  },
};
