const skills = [
    {id: 125223, skill: 'Learn Ice Skating', done: true},
    {id: 127904, skill: 'Learn Cello', done: false},
    {id: 139608, skill: 'Become fluent in Swedish', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id){
      return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill){
      skill.id = Date.now()%1000000;
      skill.done = false;
      skills.push(skill);
  }

  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }