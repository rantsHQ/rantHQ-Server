import { DataTypes } from "sequelize";

export const UserModel = {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
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
  verified: DataTypes.BOOLEAN,
  last_login: DataTypes.DATE,
  status: {
    type: DataTypes.ENUM("active", "inactive", "verified", "unverified"),
    defaultValue: "active",
  },
};
