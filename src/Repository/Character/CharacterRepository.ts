const getAllUsers = async (): Promise<Object> => {
  const searchAllUsers: Object = await { UserName: "John, Snow", Age: 25 };

  return await searchAllUsers;
};

module.exports = { getAllUsers };
