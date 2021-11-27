const getAllUsers = async (): Promise<any> => {
  const searchAllUsers = await { UserName: "John", Age: 25 };

  return await searchAllUsers;
};

module.exports = { getAllUsers };
