"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const SearchTable1 = dynamic(() => import("@/components/Tables/SearchTable1"), {
  ssr: false,
});
const data = [
  {
    id: 1,
    name: "Stephan Willicott",
    position: "Paralegal",
    office: "Medpride",
    age: 33,
    date: "8/27/2021",
    salary: "$97757.33",
  },
  {
    id: 2,
    name: "Arney Walczak",
    position: "Senior Editor",
    office: "bareMinerals bareSkin Pure",
    age: 43,
    date: "1/2/2021",
    salary: "$57502.50",
  },
  {
    id: 3,
    name: "Iolanthe Klugman",
    position: "Accounting Assistant I",
    office: "Dexmethylphenidate Hydrochloride",
    age: 19,
    date: "9/9/2021",
    salary: "$80346.60",
  },
  {
    id: 4,
    name: "Daryl Feedome",
    position: "Sales Associate",
    office: "Phenazopyridine Hydrochloride",
    age: 21,
    date: "9/13/2021",
    salary: "$78192.15",
  },
  {
    id: 5,
    name: "Dorris Meacher",
    position: "Senior Quality Engineer",
    office: "Albuterol Sulfate",
    age: 20,
    date: "2/13/2021",
    salary: "$57953.21",
  },
  {
    id: 6,
    name: "Ambrosio Inglefield",
    position: "Electrical Engineer",
    office: "TIGAN",
    age: 22,
    date: "1/2/2021",
    salary: "$46580.54",
  },
  {
    id: 7,
    name: "Latrina Ricciardi",
    position: "Community Outreach Specialist",
    office: "Head and Shoulders 2in1",
    age: 44,
    date: "1/13/2021",
    salary: "$49473.38",
  },
  {
    id: 8,
    name: "Ulrick Grout",
    position: "Financial Analyst",
    office: "Brazil Nut Meat",
    age: 40,
    date: "12/25/2020",
    salary: "$21401.57",
  },
  {
    id: 9,
    name: "Nadine Lodo",
    position: "Engineer II",
    office: "REFISSA",
    age: 28,
    date: "11/4/2020",
    salary: "$63031.92",
  },
  {
    id: 10,
    name: "Allene Silkston",
    position: "Staff Scientist",
    office: "Clotrimazole",
    age: 40,
    date: "4/7/2021",
    salary: "$73082.09",
  },
  {
    id: 11,
    name: "Linet Howles",
    position: "Administrative Officer",
    office: "pain reliever",
    age: 52,
    date: "11/26/2020",
    salary: "$14869.11",
  },
  {
    id: 12,
    name: "Mathe Scrange",
    position: "VP Accounting",
    office: "Magnesium Sulfate",
    age: 35,
    date: "6/27/2021",
    salary: "$37419.91",
  },
  {
    id: 13,
    name: "Elsy Kobierzycki",
    position: "Environmental Specialist",
    office: "skin elements liquid",
    age: 44,
    date: "5/1/2021",
    salary: "$11777.73",
  },
  {
    id: 14,
    name: "Asa Willson",
    position: "Analog Circuit Design manager",
    office: "Simple",
    age: 51,
    date: "4/15/2021",
    salary: "$86413.93",
  },
  {
    id: 15,
    name: "Dallas Deinhardt",
    position: "Web Developer II",
    office: "Pain Relief PM",
    age: 39,
    date: "9/29/2021",
    salary: "$49419.17",
  },
  {
    id: 16,
    name: "Jessee Jendrassik",
    position: "Operator",
    office: "pravastatin sodium",
    age: 19,
    date: "1/4/2021",
    salary: "$94123.29",
  },
  {
    id: 17,
    name: "Care Olford",
    position: "Business Systems Development Analyst",
    office: "Leader Nasal",
    age: 41,
    date: "12/15/2020",
    salary: "$89943.69",
  },
  {
    id: 18,
    name: "Jay Charville",
    position: "Payment Adjustment Coordinator",
    office: "Protective Foundation",
    age: 33,
    date: "4/15/2021",
    salary: "$60371.20",
  },
  {
    id: 19,
    name: "Jesse Lasty",
    position: "Physical Therapy Assistant",
    office: "Naproxen",
    age: 34,
    date: "8/11/2021",
    salary: "$90559.66",
  },
  {
    id: 20,
    name: "Ginelle De Francisci",
    position: "Programmer I",
    office: "Aches - Pains",
    age: 46,
    date: "5/11/2021",
    salary: "$34009.70",
  },
  {
    id: 21,
    name: "Rozele Siaskowski",
    position: "Database Administrator I",
    office: "Zetia",
    age: 20,
    date: "11/30/2020",
    salary: "$23449.43",
  },
  {
    id: 22,
    name: "Mata Bonner",
    position: "Senior Cost Accountant",
    office: "Cyanokit",
    age: 38,
    date: "9/17/2021",
    salary: "$96368.77",
  },
  {
    id: 23,
    name: "Aleen Casina",
    position: "Chief Design Engineer",
    office: "Hydromorphone HCl",
    age: 21,
    date: "5/16/2021",
    salary: "$54407.55",
  },
  {
    id: 24,
    name: "Diahann Coorington",
    position: "Graphic Designer",
    office: "Amlodipine Besylate",
    age: 43,
    date: "4/17/2021",
    salary: "$62936.18",
  },
  {
    id: 25,
    name: "Orazio Atling",
    position: "Recruiting Manager",
    office: "Canary Grass",
    age: 38,
    date: "7/3/2021",
    salary: "$25514.58",
  },
  {
    id: 26,
    name: "Benedict Beminster",
    position: "Electrical Engineer",
    office: "Quinapril",
    age: 50,
    date: "7/31/2021",
    salary: "$13338.71",
  },
  {
    id: 27,
    name: "Shani Banaszczyk",
    position: "Help Desk Technician",
    office: "SOLIDAGO CANADENSIS POLLEN",
    age: 17,
    date: "9/7/2021",
    salary: "$81382.42",
  },
  {
    id: 28,
    name: "Selie Jaycocks",
    position: "Civil Engineer",
    office: "Pediatric Cough",
    age: 16,
    date: "1/1/2021",
    salary: "$99999.69",
  },
  {
    id: 29,
    name: "Tammie Rannigan",
    position: "Assistant Manager",
    office: "Carvedilol",
    age: 41,
    date: "10/8/2020",
    salary: "$34500.33",
  },
  {
    id: 30,
    name: "Blondell Reichert",
    position: "Design Engineer",
    office: "MAKESENSE",
    age: 16,
    date: "3/29/2021",
    salary: "$21193.70",
  },
  {
    id: 31,
    name: "Babs Boagey",
    position: "Pharmacist",
    office: "Plavix",
    age: 21,
    date: "10/29/2020",
    salary: "$47026.14",
  },
  {
    id: 32,
    name: "Molly Stallon",
    position: "Programmer Analyst III",
    office: "ESIKA PERFECT SKIN",
    age: 41,
    date: "11/16/2020",
    salary: "$85778.80",
  },
  {
    id: 33,
    name: "Monique Rankine",
    position: "Senior Sales Associate",
    office: "Smart Sense tussin",
    age: 37,
    date: "6/23/2021",
    salary: "$18865.14",
  },
  {
    id: 34,
    name: "Adolphe Pettitt",
    position: "Registered Nurse",
    office: "Amoxicillin",
    age: 27,
    date: "3/3/2021",
    salary: "$43103.86",
  },
  {
    id: 35,
    name: "Gnni Dilkes",
    position: "Administrative Assistant II",
    office: "ropinirole",
    age: 46,
    date: "6/23/2021",
    salary: "$56070.46",
  },
  {
    id: 36,
    name: "Dino Roote",
    position: "Clinical Specialist",
    office: "Lomotil",
    age: 39,
    date: "4/18/2021",
    salary: "$79342.85",
  },
  {
    id: 37,
    name: "Kendell Ruggs",
    position: "Quality Engineer",
    office: "Targretin",
    age: 18,
    date: "5/15/2021",
    salary: "$75988.03",
  },
  {
    id: 38,
    name: "Conrado Easun",
    position: "General Manager",
    office: "Anxiety Relief",
    age: 37,
    date: "12/5/2020",
    salary: "$57746.29",
  },
  {
    id: 39,
    name: "Sergio Bruneau",
    position: "Safety Technician I",
    office: "Good Neighbor Pharmacy",
    age: 23,
    date: "3/22/2021",
    salary: "$21035.53",
  },
  {
    id: 40,
    name: "Binni Norridge",
    position: "Software Test Engineer II",
    office: "ISOPROPYL ALCOHOL",
    age: 19,
    date: "5/11/2021",
    salary: "$40501.02",
  },
  {
    id: 41,
    name: "Darin Rugiero",
    position: "Design Engineer",
    office: "Triple Flu Defense",
    age: 21,
    date: "9/2/2021",
    salary: "$27497.94",
  },
  {
    id: 42,
    name: "Evania Itzchaky",
    position: "Safety Technician I",
    office: "MEDI-PAK",
    age: 39,
    date: "6/28/2021",
    salary: "$87104.23",
  },
  {
    id: 43,
    name: "Danielle Emanulsson",
    position: "Recruiting Manager",
    office: "NOEVIR 5 TREATMENT",
    age: 32,
    date: "7/25/2021",
    salary: "$88504.35",
  },
  {
    id: 44,
    name: "Helga Cowland",
    position: "Accountant III",
    office: "OTEZLA",
    age: 31,
    date: "8/1/2021",
    salary: "$41986.71",
  },
  {
    id: 45,
    name: "Aeriel Wyche",
    position: "Software Test Engineer II",
    office: "Mustard Seed",
    age: 22,
    date: "6/19/2021",
    salary: "$88888.38",
  },
  {
    id: 46,
    name: "Lawton Le Marquand",
    position: "Account Representative I",
    office: "English Plantain",
    age: 31,
    date: "2/20/2021",
    salary: "$50687.66",
  },
  {
    id: 47,
    name: "Angeli Sebring",
    position: "Teacher",
    office: "Mystic",
    age: 22,
    date: "2/24/2021",
    salary: "$93804.46",
  },
  {
    id: 48,
    name: "Ber Stoving",
    position: "Analyst Programmer",
    office: "Antiseptic Hand Sanitizing",
    age: 22,
    date: "7/27/2021",
    salary: "$54028.06",
  },
  {
    id: 49,
    name: "Priscella Hardbattle",
    position: "Editor",
    office: "Ibuprofen",
    age: 36,
    date: "9/2/2021",
    salary: "$84978.10",
  },
  {
    id: 50,
    name: "Stormy Kneller",
    position: "Human Resources Assistant III",
    office: "bisoprolol fumarate",
    age: 41,
    date: "1/23/2021",
    salary: "$18296.97",
  },
  {
    id: 51,
    name: "Sibeal Palia",
    position: "Office Assistant IV",
    office: "Acid Reducer",
    age: 31,
    date: "2/19/2021",
    salary: "$58730.57",
  },
  {
    id: 52,
    name: "Hunfredo Grigori",
    position: "Pharmacist",
    office: "Meloxicam",
    age: 29,
    date: "3/3/2021",
    salary: "$47522.31",
  },
  {
    id: 53,
    name: "Virginia Balharry",
    position: "Nurse",
    office: "Warfarin Sodium",
    age: 23,
    date: "11/26/2020",
    salary: "$94175.74",
  },
  {
    id: 54,
    name: "Svend McQuaide",
    position: "Business Systems Development Analyst",
    office: "Gongjinhyang Seol Whitening Intensive",
    age: 19,
    date: "4/1/2021",
    salary: "$25813.41",
  },
  {
    id: 55,
    name: "Rriocard Pinwill",
    position: "Web Developer IV",
    office: "ibuprofen",
    age: 55,
    date: "5/5/2021",
    salary: "$20741.48",
  },
  {
    id: 56,
    name: "Janene Haskey",
    position: "Account Coordinator",
    office: "germstarNORO unscented",
    age: 16,
    date: "11/19/2020",
    salary: "$79905.14",
  },
  {
    id: 57,
    name: "Letty Fendt",
    position: "Staff Scientist",
    office: "Rizatriptan Benzoate",
    age: 38,
    date: "11/26/2020",
    salary: "$38503.99",
  },
];

export const columnsData2 = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "POSITION",
    accessor: "position",
  },
  {
    Header: "OFFICE",
    accessor: "office",
  },
  {
    Header: "AGE",
    accessor: "age",
  },
  {
    Header: "START DATE",
    accessor: "date",
  },
  {
    Header: "SALARY",
    accessor: "salary",
  },
];

export default function Home() {
  return (
    <main>
      <Box bg="brand.500" w="full" h={200}></Box>
      <SearchTable1 columnsData={data} tableData={columnsData2} />
    </main>
  );
}
