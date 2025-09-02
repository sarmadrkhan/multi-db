import { Global, Module } from '@nestjs/common';
import { PostgresPrismaService } from './postgres.service';
import { MariaPrismaService } from './mariadb.service';
import { MysqlPrismaService } from './mysql.service';

@Global()
@Module({
  providers: [PostgresPrismaService, MariaPrismaService, MysqlPrismaService],
  exports: [PostgresPrismaService, MariaPrismaService, MysqlPrismaService],
})
export class PrismaModule {}