import { Controller, Get, Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {

    @Get("/get-all")
    getAllNotes() {
        return{msg: 'all notes'}
    }
}
