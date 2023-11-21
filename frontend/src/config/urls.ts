const backEndUrl = "http://api-service:13000";

export const urls = {
  root: "/",
  patrons: "/patrons",
  patron: "/patron/:id",
  api: {
    getPatrons: `${backEndUrl}/api/patrons/`,
    getPatronById: `${backEndUrl}/api/patrons/getPatronById/`,
    deletePatronById: `${backEndUrl}/api/patrons/deletePatronById/`,
    addPatron: `${backEndUrl}/api/patrons/addPatron/`,
    addDrink: `${backEndUrl}/api/patrons/addDrink/`,
  },
};
