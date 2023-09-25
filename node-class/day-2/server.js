const express = require("express")
const fs = require("fs")
const path = require("path")

const outputfolder = "./output";



if(!fs.existsSync(outputfolder))
{
    fs.mkdirSync(outputfolder)


}
const app = express();
const PORT = 3000;
app.get("/createfile",(req,res)=>{
    const currenttime = new Date()

    const year = currenttime.getFullYear().toString();
    const month =(currenttime.getMonth()+1).toString()
    const date = currenttime.getDate().toString()
    const hours = currenttime.getHours().toString()
    const mins = currenttime.getMinutes().toString()
    const secs = currenttime.getSeconds().toString()
     
    const datatimefolder = `${year}-${month}-${date}-${hours}-${mins}-${secs}`;
    const filepath = path.join(outputfolder,datatimefolder)

    fs.writeFile(filepath,currenttime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`ERROR CREATING FILE:${err}`)
            return;
        }
        res.send(`file create sucessfully ${filepath}`)
    })
})
app.get("/getFiles", (req, res) => {
    fs.readdir(outputFolder, (err, files) => {
      if (err) {
        res.status(500).send(`Error reading directory: ${err}`);
        return;
      }
      console.log("files", files);
      const textFiles = files.filter((file) => path.extname(file) === ".txt");
  
      res.json(textFiles);
    });
  });
app.listen(PORT,()=>{
    console.log("the server is working",PORT)
});