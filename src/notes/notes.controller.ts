import { Body, Controller, Get, Post, Delete, Param, Put, Patch } from '@nestjs/common';
import { CreateNotesDto, getNoteDto } from 'src/dto/Notes.d'; 
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get("/get-all")
    getAllNotes() {
        return this.notesService.getAllNotes();
    }

    @Get("/get/:id")
    getNoteById(@Param('id') id: string) {
        return this.notesService.getNoteById(id);
    }

    @Delete("/delete/:id")
    deleteNoteById(@Param('id') id: string) {
        return this.notesService.deleteNoteById(id);
    }

    @Patch("/update/:id")
    updateNoteById(@Param('id') id: string, @Body() data: CreateNotesDto) {
        return this.notesService.updateNoteById(id, data);
    }

    @Put("/publish/:id")
    togglePublished(@Param('id') id: string) {
        return this.notesService.togglePublished(id);
    }

    @Post("/create")
    createNote(@Body() data: CreateNotesDto) {
        return this.notesService.createNote(data);
    }
}
