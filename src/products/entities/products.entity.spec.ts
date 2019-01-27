import { ObjectID } from 'mongodb';
import { ProductEntity } from './products.entity';
import { classToPlain, plainToClass } from 'class-transformer';
import { ProductUpdate } from './product-update.entity';
import { ProductSize } from './product-size.entity';

const date = new Date();
date.setMilliseconds(0);

function getProductEntity(updates: ProductUpdate[], size?: ProductSize): ProductEntity {
  const plain = {
    url: '',
    _id: ObjectID.createFromTime(date.getTime() / 1000).toString(),
    updates,
    size,
  };
  return plainToClass(ProductEntity, plain);
}

describe('Product Entity', () => {

  it('should handle empty updates', async () => {
    const entity = getProductEntity([]);
    expect(entity.price).toBe(null);
    expect(entity.isAvailable).toBe(false);
    expect(entity.getCreatedAt()).toEqual(date);
    expect(entity.updatedAt).toEqual(date);
    expect(entity.sizeName).toBe('');
    expect(entity.store).toBe('');
  });

  it('should handle one update', async () => {
    const updateDate = new Date();
    const entity = getProductEntity([{ price: 100, createdAt: updateDate, isAvailable: true }], { id: 'id', name: 'name' });
    expect(entity.price).toBe(100);
    expect(entity.isAvailable).toBe(true);
    expect(entity.getCreatedAt()).toEqual(date);
    expect(entity.updatedAt).toEqual(updateDate);
    expect(entity.sizeName).toBe('name');
    expect(entity.store).toBe('');
  });

  it('should handle multiple updates', async () => {
    const updateDate = new Date();
    updateDate.setFullYear(2010);
    const oldUpdateDate = new Date();
    oldUpdateDate.setFullYear(2009);
    const updates = [
      { price: 100, createdAt: updateDate, isAvailable: true },
      { price: 10, createdAt: oldUpdateDate, isAvailable: false },
    ];
    const entity = getProductEntity(updates);
    expect(entity.price).toBe(10);
    expect(entity.isAvailable).toBe(false);
    expect(entity.getCreatedAt()).toEqual(date);
    expect(entity.updatedAt).toEqual(oldUpdateDate);
    expect(entity.store).toBe('');
  });

  it('should get the correct store name', async () => {
    const entity = new ProductEntity();
    entity.url = 'hm.com';
    expect(entity.store).toBe('H&M');

    entity.url = 'asos';
    expect(entity.store).toBe('ASOS');

    entity.url = 'weekday.';
    expect(entity.store).toBe('Weekday');

    entity.url = 'cosstores';
    expect(entity.store).toBe('COS');

    entity.url = 'aboutyou';
    expect(entity.store).toBe('ABOUT YOU');

    entity.url = 'amazon';
    expect(entity.store).toBe('Amazon');

    entity.url = 'zalando';
    expect(entity.store).toBe('Zalando');
  });

  it('should transform ObjectId to string', () => {
    const entity = getProductEntity([]);
    entity.userId = ObjectID.createFromTime(0);
    expect(typeof (classToPlain(entity) as any)._id).toBe('string');
    expect(typeof (classToPlain(entity) as any).userId).toBe('string');
  });

});
