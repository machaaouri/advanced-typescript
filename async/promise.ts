import { Category } from '../enums';
import * as util from '../lib/utilityFunctions';

 
function getBooksByCategory(cat: Category): Promise<string[]> {

    let p: Promise<string[]> = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
                if(foundBooks.length > 0 )
                    resolve(foundBooks);
                else
                    reject('No books found for that category');
        }, 2000);
    })
    return p;
}

export function MainPromise()
{
    console.log('Beginning search...');
    getBooksByCategory(Category.Fiction)
        .then(titles => {
            console.log(`Fond titles: ${titles}`);
            return titles.length; // this will be the resolve data of the next 'then'
        })
        .then(numberOfBooks => console.log(`Number of books found : ${numberOfBooks}`))
        .catch(reason => console.log(`Error: ${reason}`));
        
    console.log('Serach submitted...')
}