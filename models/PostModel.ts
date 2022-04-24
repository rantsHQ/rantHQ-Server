import { DataTypes } from "sequelize";

export const PostModel = {
  content: { type: DataTypes.TEXT, allowNull: false },
  author: DataTypes.INTEGER,
  parent: DataTypes.INTEGER,
  flag: DataTypes.ENUM("abusive", "18+"),
  status: {
    type: DataTypes.ENUM("public", "hidden", "archived"),
    defaultValue: "public",
  },
};
