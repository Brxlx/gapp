import { UniqueEntityID } from './unique-entity-id';
import { UniqueObjectId } from './unique-object-id';

export abstract class Entity<Props> {
  private _id: UniqueEntityID;
  private _oid: UniqueObjectId;
  protected props: Props;

  get id() {
    return this._id;
  }

  get oid() {
    return this._oid;
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID(id);
    this._oid = new UniqueObjectId();
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) return true;

    if (entity._id === this._id) return true;

    return false;
  }
}
