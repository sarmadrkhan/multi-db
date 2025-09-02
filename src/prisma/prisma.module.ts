import { Global, Module } from '@nestjs/common';
import { PostgresPrismaService } from './postgres.service';
import { MariaPrismaService } from './mariadb.service';

@Global()
@Module({
  providers: [PostgresPrismaService, MariaPrismaService],
  exports: [PostgresPrismaService, MariaPrismaService],
})
export class PrismaModule {}