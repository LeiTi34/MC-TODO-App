import { Module } from '@nestjs/common';
import { SubtodoController } from './subtodo.controller';
import { SubtodoService } from './subtodo.service';

@Module({
  controllers: [SubtodoController],
  providers: [SubtodoService],
})
export class SubtodoModule {}
