import { SkillsType, allSkills } from "../../../data/skills";

export default function SkillBox({ skill }: { skill: SkillsType }) {
  const { name, icon} = skill;
  return (
    <div className=" bg-indigo-600 cursor-pointer border border-gray-600 text-sm sm:text-md p-4 sm:p-12 flex flex-col justify-center items-center h-20 w-20 rounded-xl">
      <span className={`text-xl sm:text-3xl p-2 rounded-full`}>
        {icon}
      </span>
      <p className="mt-2">{name}</p>
    </div>
  );
}
