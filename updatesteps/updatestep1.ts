import { DatabaseConnector } from './database-connector';
import { ProductEntity } from '../src/products/entities/products.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';

async function run() {
  const connection = await new DatabaseConnector().connect();
  const productRepository = connection.getRepository(ProductEntity);
  // $type 2 = 'string', type aliases not supported by production db
  const productsWithStringUserId = await productRepository.find({
    userId: { $type: 2 },
  } as any);
  productsWithStringUserId.forEach(
    product => (product.userId = new ObjectID(product.userId)),
  );
  return productRepository
    .save(productsWithStringUserId)
    .then(entities => (Array.isArray(entities) ? entities.length : 0));
}

const logger = new Logger('UpdateStep 1');
run()
  .then(size => {
    logger.log(`Updated ${size} products.`);
    process.exit();
  })
  .catch(e => {
    logger.error(e.message, e.stack);
    process.exit(1);
  });
