export type User = {
  userId: number;
  email: string;
  name: string;
  surname: string;
  password: number | null;
  roleId: number;
  avatar: string;
  isRemoved: boolean;
  createdAt: string;
  createdBy: number;
  modifiedAt: string | null;
  modifiedBy: number | null;
  role: string | null;
};
