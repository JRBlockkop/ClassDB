const classDB = {
  loader:(folderURL,name)=>{
    fetch(folderURL+"/schema.cdbs").then(x => x.text()).then(y => classDB.Files.schema = y);
    fetch(folderURL+"/"+name+".cdb").then(x => x.text()).then(y => classDB.Files.db = y);
  },
  Files:{
    schema:null,
    db:null,
  },
}
