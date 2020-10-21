let information;

let defaultInfo = {
  name: "James Yoba",
  phone: "+420 724 847 202",
  mail: "allo.yoba@etoti.cz",
  adress: "Pushkin st., Kolotushkin, Czech Republic",
  degree: "Master's Degree",
  university: "Czech University of Life Sciences, Prague",
  faculty: "Faculty of Economics and Management",
  experience: "2017 - Now: VVISS a.s. - Accountant",
  about: "Cheerful and round, brave and resourceful, the soul of any company",
};

if (localStorage.info) {
  information = JSON.parse(localStorage.info);
} else {
  information = defaultInfo;
}

export default information;
