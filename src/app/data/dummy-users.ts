import { faker } from "@faker-js/faker/locale/en";
import { User } from "../types/user";

export const DUMMY_USERS: User[] = [
  {
    id: 'u1',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'u2',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'u3',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'u4',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'u5',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'u6',
    name: faker.person.firstName() + ' ' + faker.person.lastName(),
    avatar: faker.image.avatar(),
  },
];
