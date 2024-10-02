import { IsNotEmpty } from 'class-validator';

export class NotesDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  short_desc: string

  @IsNotEmpty({ message: 'Content is required' })
  content: string
}
