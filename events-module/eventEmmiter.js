const {School,message} = require('./schoolPeriod');
const school = new School();

school.on('bellRing', (props)=>{
    const message = `our school is started at ${props}`;
    console.log(message)
});
school.schoolPeriod()
console.log(message)