import {  UniversityLibrarian } from '../classes'

// Merging Interface
declare module '../classes' {
    export interface UniversityLibrarian {
        phone: string,
        hostSeminar(topic: string): void;
    }
}

UniversityLibrarian.prototype.hostSeminar = function(topic) {
    console.log("hosting a seminar on " + topic);
}