import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { User, UserProps } from '@/domain/enterprise/entities/user';

export async function makeUser(override: Partial<UserProps> = {}, id?: UniqueEntityID) {
  return User.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
      password: faker.internet.password({ length: 8 }),
      ...override,
    },
    id
  );
}

// @Injectable()
// export class QuestionFactory {
//   constructor(private readonly prisma: PrismaService) {}

//   async makePrismaQuestion(data: Partial<QuestionProps> = {}): Promise<Question> {
//     const question = makeQuestion(data);

//     await this.prisma.question.create({
//       data: PrismaQuestionMapper.toPrisma(question),
//     });

//     return question;
//   }
// }
