
import * as Destructuring  from './features/destructuring'
import * as Union  from './features/union'
import {UniversityLibrarian} from "./classes"
import  './features/librarianExtension';

// Destructuring arrays and objects
Destructuring.mainDestructuring();
// Union Type
Union.MainUnion()

let newLibrarian = new UniversityLibrarian();
newLibrarian.phone = "0661-989"
newLibrarian.hostSeminar("TypeScript");
