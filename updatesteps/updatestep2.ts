import { DatabaseConnector } from './database-connector';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { UsProductEntity } from './us2-products.entity';

async function run() {
  const connection = await new DatabaseConnector().connect(UsProductEntity);
  const productRepository = connection.getRepository(UsProductEntity);
  const productsWithNoDateUpdates = await productRepository.find({ 'updates.createdAt': null } as any);
  productsWithNoDateUpdates.forEach(product => createDates(product));
  return productRepository.save(productsWithNoDateUpdates)
    .then(entities => Array.isArray(entities) ? entities.length : 0);
}

function createDates(product) {
  for (const update of product.updates) {
    if (!update.createdAt) {
      if (update._id) {
        update.createdAt = update._id.getTimestamp();
      } else {
        update.createdAt = new Date(2018, 0, 1);
      }
    }
  }
}

const logger = new Logger('UpdateStep 2');
run()
  .then(size => {
    logger.log(`Updated ${size} products.`);
    process.exit();
  })
  .catch(e => {
    logger.error(e.message, e.stack);
    process.exit(1);
  });
