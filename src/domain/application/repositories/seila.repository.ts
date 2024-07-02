import { SeiLa } from '@/domain/enterprise/entities/seila';

export abstract class SeilaRepository {
  abstract create(seiLa: SeiLa): Promise<void>;
}
