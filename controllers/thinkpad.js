function create(req, res){
    res.json({ message:"WOOOOO!!!!"});
};


function retrieveAll(req,res){
    res.json({message:"YOU GOT EM ALL!!!"});
};


function update(req,res){
    res.json({message:"you updated!"});
};

function deleter(req,res){
    res.json({message:"DELETE IT!"})
}

module.exports = {
    create, 
    retrieveAll, 
    update, 
    deleter
}