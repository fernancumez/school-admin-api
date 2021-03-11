import { Request, Response } from "express";
import User from "../models/model.user";
import config from "../config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { IUser } from "../types/model.user.types";

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.JWT_KEY, {
    expiresIn: 86400,
  });
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ msg: "The user already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "The user does not exist" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        msg: "The email or password are incorrect",
      });
    }
    return res.status(200).json({ token: createToken(user) });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
