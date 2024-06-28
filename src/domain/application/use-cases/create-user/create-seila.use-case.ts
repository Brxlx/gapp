import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { SeiLa } from '@/domain/enterprise/entities/seila';

import { SeilaRepository } from '../../repositories/seila.repository';

interface CreateSeiLaRequest {
  name: string;
}

type CreateSeiLaResponse = {
  seiLa: SeiLa;
};

// @Injectable()
export class CreateSeiLaUseCase {
  constructor(private readonly seilaRepository: SeilaRepository) {}

  public async execute(
    { name }: CreateSeiLaRequest,
    id?: UniqueEntityID
  ): Promise<CreateSeiLaResponse> {
    const seiLa = SeiLa.create({ name }, id);

    const ret = await this.seilaRepository.create(seiLa);

    if (!ret?.id) throw new Error('Unable to create entity');

    return { seiLa: ret };
  }
}
