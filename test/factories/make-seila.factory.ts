import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { SeiLa, SeiLaProps } from '@/domain/enterprise/entities/seila';

export async function makeSeiLa(override: Partial<SeiLaProps> = {}, id?: UniqueEntityID) {
  return SeiLa.create(
    {
      name: faker.person.fullName(),
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
