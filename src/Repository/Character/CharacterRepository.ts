const getAllUsers = async (): Promise<Object> => {
  const searchAllUsers: Object = await { UserName: "John", Age: 25 };

  return await searchAllUsers;
};

module.exports = { getAllUsers };
