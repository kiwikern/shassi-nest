import { DatabaseConnector } from './database-connector';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { UsProductEntity } from './us2-products.entity';

async function run() {
  const connection = await new DatabaseConnector().connect(UsProductEntity);
  const productRepository = connection.getRepository(UsProductEntity);
  const productsWithNoAvailability = await productRepository.find({ 'updates.isAvailable': null } as any);
  productsWithNoAvailability.forEach(product => createDates(product));
  return productRepository.save(productsWithNoAvailability)
    .then(entities => Array.isArray(entities) ? entities.length : 0);
}

function createDates(product) {
  for (const update of product.updates) {
    if (update.isAvailable === null || update.isAvailable === undefined) {
      update.isAvailable = false;
    }
  }
}

const logger = new Logger('UpdateStep 3');
run()
  .then(size => {
    logger.log(`Updated ${size} products.`);
    process.exit();
  })
  .catch(e => {
    logger.error(e.message, e.stack);
    process.exit(1);
  });
