import { writeFile } from 'fs';

/**
 * Creates a file with the given file name and data.
 *
 * @param {any} fileName - The name of the file
 * @param {any[]} data - The data to be written to the file
 * @return {void} 
 */
const createFile = (fileName: any, data: any[]) => {
    return writeFile(
        `./logs/${fileName}.txt`, 
        data.join("") + "\n", 
        err => err ? console.log(err) : console.log('The file has been saved!')
    );
}

export default createFile;
