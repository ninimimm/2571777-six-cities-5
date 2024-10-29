import { v4 as uuid } from 'uuid';
import { User, UserType } from '../models';

export const userList: User[] = [
  {
    id: uuid(),
    name: 'Петр',
    email: 'pent@main.brawl',
    avatar: 'avatar-max.jpg',
    password: '8hdlsadiuew8y2',
    type: UserType.Pro,
  },
  {
    id: uuid(),
    name: 'Макс',
    email: 'max@main.brawl',
    avatar: 'avatar-max.jpg',
    password: '8hdlsadiuew8y2',
    type: UserType.Pro,
  },
  {
    id: uuid(),
    name: 'Ксюша',
    email: 'ksusha@main.brawl',
    avatar: 'avatar-angelina.jpg',
    password: '8hdlsadiuew8y2',
    type: UserType.Pro,
  },
  {
    id: uuid(),
    name: 'Диана',
    email: 'diana@main.brawl',
    avatar: 'avatar-angelina.jpg',
    password: '8hdlsadiuew8y2',
    type: UserType.Pro,
  },
];
