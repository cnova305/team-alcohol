const backEndUrl = "http://localhost:5000";

export const urls = {
  root: "/",
  patrons: "/patrons",
  patron: "/patron/:id",
  api: {
    getPatrons: `${backEndUrl}/api/patrons/`,
    getPatronById: `${backEndUrl}/api/patrons/getPatronById/`,
  },
};
