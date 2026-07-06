import type { Certificate } from "../types";
import dataAnalyticsEssentials from "../assets/certificates/data-analytics-essentials.png";
import introToDataScience from "../assets/certificates/intro-to-data-science.png";
import sqlBasicCertificate from "../assets/certificates/sql-basic-certificate.png";

export const certificates: Certificate[] = [
  {
    id: "data-analytics-essentials",
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    issueDate: "February 13, 2026",
    image: dataAnalyticsEssentials,
    viewUrl: "/certificates/data-analytics-essentials.pdf",
    downloadUrl: "/certificates/data-analytics-essentials.pdf",
  },
  {
    id: "intro-to-data-science",
    title: "Introduction to Data Science",
    issuer: "Cisco",
    issueDate: "March 12, 2026",
    image: introToDataScience,
    viewUrl: "/certificates/intro-to-data-science.pdf",
    downloadUrl: "/certificates/intro-to-data-science.pdf",
  },
  {
    id: "sql-basic-certificate",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    issueDate: "June 1, 2026",
    image: sqlBasicCertificate,
    viewUrl: "/certificates/sql-basic-certificate.pdf",
    downloadUrl: "/certificates/sql-basic-certificate.pdf",
  },
];
