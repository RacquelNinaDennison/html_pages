import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

export default async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	await fs.writeFile(
		"./hello.txt",
		"This is a text file :)"
	);
	const file = await fs.readFile("./hello.txt", "utf-8");
	res.send(file);
};
