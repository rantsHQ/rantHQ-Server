import { DataTypes } from "sequelize";

export const PostModel = {
  content: { type: DataTypes.TEXT, allowNull: false },
  author: DataTypes.INTEGER,
  parent: DataTypes.INTEGER,
  public: DataTypes.BOOLEAN,
  flag: DataTypes.ENUM("ok", "abusive", "18+"),
  status: {
    type: DataTypes.ENUM("public", "private", "hidden"),
    defaultValue: "public",
  },
};
