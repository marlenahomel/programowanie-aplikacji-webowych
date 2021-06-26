import {Note}  from '../src/Note';

describe('Note', () => {
    it('TimeStampCheck', () => {
        const note = new Note();
        const tmp = note.getTimeStamp();
        expect(tmp).toBeTruthy();
        })
    });

