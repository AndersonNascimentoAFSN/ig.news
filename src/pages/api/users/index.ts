import { NextApiRequest, NextApiResponse } from "next";

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Anderson Nascimento" },
    { id: 2, name: "Yanni Teixeira" },
    { id: 3, name: "Gabriela Souza" },
    { id: 4, name: "Maria Luiza" },
  ];

  return response.json(users);
};

export default users;
