import { SeilaRepository } from '@/domain/application/repositories/seila.repository';
import { SeiLa } from '@/domain/enterprise/entities/seila';

export class InMemorySeilaRepository implements SeilaRepository {
  public items: SeiLa[] = [];

  async create(seiLa: SeiLa): Promise<SeiLa | undefined> {
    this.items.push(seiLa);

    return this.items.find(item => item.id === seiLa.id);
  }
}
