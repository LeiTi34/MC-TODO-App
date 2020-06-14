import {
  Controller,
  UseGuards,
  Post,
  Request,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/entity/user.entity';
import { Attachment } from 'src/entity/attachment.entity';

@Controller('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async save(
    @Request() req: any,
    @Param('id') id: number,
  ): Promise<Attachment> {
    return await this.attachmentService.save(
      req.user as User,
      id,
      req.body as Attachment,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(
    @Request() req: any,
    @Param('id') id: number,
  ): Promise<Attachment> {
    return await this.attachmentService.findOne(req.user as User, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: number): Promise<boolean> {
    return await this.attachmentService.remove(req.user as User, id);
  }
}
