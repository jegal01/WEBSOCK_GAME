const users = [];
//추가
export const addUser = (user) => {
  users.push(user);
};

//삭제
export const removeUser = (socketId) => {
  const index = users.findIndex((user) => user.socketId === socketId);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
//조회
export const getUsers = () => {
  return users;
};