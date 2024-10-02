import { Controller, Get, Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {

    @Get("/create")
    getAllNotes() {
        return{msg: 'all notes'}
    }
}
