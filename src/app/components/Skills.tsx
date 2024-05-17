import { allSkills } from "../../../data/skills"
import SkillBox from "./SkillsBox";


export default function Skills() {
    const skills = allSkills
    return (
        <div>
            <div id="skills" className="my-2 sm:my-12">
                <div className="text-center font-extrabold mt-20 mb-10 ">
                    <span className='text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white p-5'>Skills</span>
                </div>
                <div className="flex justify-around ">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 sm:gap-12 justify-center items-center">
                        {skills.map((skill) => <SkillBox key={skill.name} skill={skill} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}