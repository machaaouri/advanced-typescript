
import * as Destructuring  from './features/destructuring'
import * as Union  from './features/union'
import {UniversityLibrarian} from "./classes"
import  './features/librarianExtension';
import  * as Callback from "./async/callback"
import  * as Promise from "./async/promise"
import  * as Asyns from "./async/async_await"

// Destructuring arrays and objects
Destructuring.mainDestructuring();
// Union Type
Union.MainUnion()

// Merging interfaces and modules
let newLibrarian = new UniversityLibrarian();
newLibrarian.phone = "0661-989"
newLibrarian.hostSeminar("TypeScript");

// Callbacks
Callback.MainCallback();

// Promise
Promise.MainPromise();

// Async/Await
Asyns.MainAsync();