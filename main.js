import fs from "fs/promises"


async function read () {
    try{
        const d = await fs.readFile("./data/students.txt", "utf8")
        console.log(d.split("\n"));
        

    } catch (e){
        console.log(e);
        
    }
    
}

read()
