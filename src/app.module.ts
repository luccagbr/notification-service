import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DataBaseModule } from './infra/database/dataBase.module';

@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule {}
