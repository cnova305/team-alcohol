// const backEndUrl = "http://10.98.197.66:13000";

export const urls = {
  root: "/",
  patrons: "/patrons",
  patron: "/patron/:id",
  api: {
    getPatrons: `/api/patrons`,
    getPatronById: `/api/patrons/getPatronById`,
    deletePatronById: `/api/patrons/deletePatronById`,
    addPatron: `/api/patrons/addPatron`,
    addDrink: `/api/patrons/addDrink`,
  },
};
