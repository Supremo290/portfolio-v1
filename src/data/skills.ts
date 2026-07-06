import { FcDataSheet } from "react-icons/fc";
import type { Skill } from "../types";
import pythonLogo from "../assets/tech-icons/python-original.svg";
import postgresqlLogo from "../assets/tech-icons/postgresql-original.svg";
import mysqlLogo from "../assets/tech-icons/mysql-original.svg";
import gitLogo from "../assets/tech-icons/git-original.svg";
import html5Logo from "../assets/tech-icons/html5-original.svg";
import css3Logo from "../assets/tech-icons/css3-original.svg";
import typescriptLogo from "../assets/tech-icons/typescript-original.svg";
import angularLogo from "../assets/tech-icons/angular-original.svg";
import numpyLogo from "../assets/tech-icons/numpy-original.svg";
import pandasLogo from "../assets/tech-icons/pandas-original.svg";
import excelLogo from "../assets/tech-icons/excel-official.svg";
import powerbiLogo from "../assets/tech-icons/powerbi-official.svg";
import tableauLogo from "../assets/tech-icons/tableau-official.svg";

export const skills: Skill[] = [
  { name: "SQL", icon: FcDataSheet },
  { name: "PostgreSQL", icon: postgresqlLogo },
  { name: "MySQL", icon: mysqlLogo },
  { name: "Python", icon: pythonLogo },
  { name: "Pandas", icon: pandasLogo },
  { name: "NumPy", icon: numpyLogo },
  { name: "Excel", icon: excelLogo },
  { name: "Power BI", icon: powerbiLogo },
  { name: "Tableau", icon: tableauLogo },
  { name: "Git", icon: gitLogo },
  { name: "HTML", icon: html5Logo },
  { name: "CSS", icon: css3Logo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "Angular", icon: angularLogo },
];
