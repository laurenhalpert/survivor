import { promises as fs } from 'fs';

export default async function Contestants() {
    const file = await fs.readFile(process.cwd() + '/lib/db.json', 'utf8');
    const data = JSON.parse(file);

    
}