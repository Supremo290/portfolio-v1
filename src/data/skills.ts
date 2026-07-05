import { FaGitAlt, FaCss3Alt, FaFileExcel, FaChartBar, FaChartLine } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiPython, SiPandas, SiNumpy, SiHtml5, SiTypescript, SiAngular } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "SQL", icon: TbSql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Python", icon: SiPython },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Excel", icon: FaFileExcel },
  { name: "Power BI", icon: FaChartBar },
  { name: "Tableau", icon: FaChartLine },
  { name: "Git", icon: FaGitAlt },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Angular", icon: SiAngular },
];
