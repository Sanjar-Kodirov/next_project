"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    // Create the tags or get them if they already exist
  } catch (error) {
    console.log(error);
  }
}
