import { allSkills } from "../../../data/skills";
import SkillBox from "./SkillsBox";

export default function Skills() {
    const skills = allSkills;
    return (
        <div className="min-h-screen bg-black py-12 mt-9">
            <div id="skills" className="container mx-auto px-4">
                <div className="text-center font-extrabold mb-12">
                    <span className="text-4xl md:text-7xl text-center font-sans font-bold text-white">
                        Skills
                    </span>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 sm:gap-10 justify-center items-center max-w-7xl mt-32">
                        {skills.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
