import { NextApiRequest, NextApiResponse } from "next";

interface user {
  id: number;
  name: string;
}

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query

  const users = [
    { id: 1, name: "Anderson Nascimento" },
    { id: 2, name: "Yanni Teixeira" },
    { id: 3, name: "Gabriela Souza" },
    { id: 4, name: "Maria Luiza" },
  ];

  const findUser = users.filter((user) =>  user.id === id)

  return response.json(findUser);
};

export default users;
