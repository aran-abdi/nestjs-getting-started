import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'competent-brown-56s1tq69m-db',
  port: 5432,
  username: 'root',
  password: 'jrSm6FNNMkgdWJ8UFbjFNHlP',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
}; 