let resume = {
    Name: "Justin Hueni",
    career: "CNC Production",
    info: "This is for a better future"
};

let allCaps = resume.Name.toUpperCase();

let interest = ["* Video Games", "* History", "* TTRPG",
    "* Simulators", "* Keyboard Switches"];

let experience = {
    marine: "* Warehouse worker. Used forklifts to load and unload trucks.",
    atwood: "* Warehouse worker that also tested Water Heaters and A/C untis for RV's",
    lippert: "* Learned the basics of MIG welding, Welding together RV chassis."
};

let myskills = [
    {sname: "forklift certified"},
    {sname: "Editor"},
    {sname: "Writer"},
    {sname: "Amature Mechanic"},
    {sname: "Computer fixer"}
]





function displayPosition(param1, param2, param3) {
    console.log(param1)
    console.log(param2)
    console.log(param3)
};



console.log(displayPosition(allCaps, resume.career,
    resume.info));

console.log("My Interest")

for (x = 0; x <= 4; x++) {
    console.log(interest[x])
};

console.log("Past Experience.")
console.log(displayPosition(experience.marine, experience.atwood, experience.lippert));

function displaySkill(skill, check) {
    check = true, ("BAM: ")
    skill = myskills.sname
    for(i = 0; i <=myskills.length; i++) {
        if (i = 1 , 2 , 3){
            console.log(skill)
        } else {
         console.log()   
        }
    }
}



console.log("My Skills")
console.log(displaySkills(myskills[i].sname))
