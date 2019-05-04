
import * as Destructuring  from './features/destructuring'
import * as Union  from './features/union'
import {UniversityLibrarian} from "./classes"
import  './features/librarianExtension';
import  * as Callback from "./async/callback"
import  * as Promise from "./async/promise"
import  * as Asyns from "./async/async_await"
import  * as mcp from "./opp/delegation/types"

/*
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
*/

// Delegation is often a good alternative to inheritance
// if the relationship between two clases fails the "is a" test
let cp =  new mcp.MasterControlPanel()
cp.start();

