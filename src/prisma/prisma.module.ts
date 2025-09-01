import { Global, Module } from '@nestjs/common';
import { PostgresPrismaService } from './postgres.service';

@Global()
@Module({
  providers: [PostgresPrismaService],
  exports: [PostgresPrismaService],
})
export class PrismaModule {}