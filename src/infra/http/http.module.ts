import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DataBaseModule } from '../database/dataBase.module';

@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification]
})
export class HttpModule {}