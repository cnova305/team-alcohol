import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { database } from "../../firebase";

export const getPatrons = async () => {
  const patronList: any[] = [];
  const querySnapshot = await getDocs(collection(database, "patrons"));
  querySnapshot.forEach((doc) => {
    const documentData = doc.data();
    documentData.id = doc.id;
    patronList.push(documentData);
  });

  return patronList;
};

export const getPatron = async (id: string) => {
  const patron = await getDoc(doc(database, "patrons", id));
  return patron.data();
};

export const postPatron = async (values: object) => {
  await addDoc(collection(database, "patrons"), {
    ...values,
    drinks: [],
  });
  return;
};

export const deletePatron = async (id: string) => {
  await deleteDoc(doc(database, "patrons", id));
};
