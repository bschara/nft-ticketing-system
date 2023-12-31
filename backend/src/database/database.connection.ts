import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nft_ticketing_system',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};