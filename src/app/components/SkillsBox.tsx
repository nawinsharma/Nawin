import { SkillsType, allSkills } from "../../../data/skills";

export default function SkillBox({ skill }: { skill: SkillsType }) {
  const { name, icon} = skill;
  return (
    <div className="group relative cursor-pointer h-24 w-24 rounded-xl overflow-hidden">
      {/* Glassy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-white/10">
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-2">
          <span className="text-2xl sm:text-3xl text-white/90 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
            {icon}
          </span>
          <p className="mt-2 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium tracking-wide">
            {name}
          </p>
        </div>
        
        {/* Corner highlights */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-white/20 to-transparent rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-white/20 to-transparent rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-white/20 to-transparent rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-white/20 to-transparent rounded-br-xl"></div>
      </div>
    </div>
  );
}
