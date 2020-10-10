interface User {
  items: Items;
}
interface Items {
  id: string;
  firstName: string;
  lastName: string;
}

export const user: User = {
  items: {
    id: 'ID',
    firstName: '名',
    lastName: '姓',
  }
};
