const skills= require('../models/skills')

module.exports={
    index,
    show,
    new:newSkill,
    create,
    delete:deleteSkill
}


function create(req,res){
    console.log(req.body, '< - contents of the form in variable, req.body')
    skills.create(req.body);
    res.redirect('/skills')
}

function newSkill(req,res){
    res.render('skills/new')
}

function index(req,res){
    //console.log(req.time, 'index function')
    const skillsList=skills.getAll()
     res.render('skills/index',{
         skills: skillsList
     });
 }

 function show (req,res){
     console.log(req.time,'index functions')
     console.log(req.params,'req.params in show route')

     const skill = skills.getOne(req.params.id)

     res.render('skills/show',{
         skills:skill
     })
 }

 function deleteSkill(req,res){
    skills.deleteOne(req.params.id);
    res.redirect('/skills');
 }