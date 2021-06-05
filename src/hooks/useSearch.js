/** @format */
/*/*/ /************************* */
// motaz commit it becuse it make Warning
// import { useEffect, useState } from 'react';
import { dataBase } from '../config/firebase';
// import useDatabase from './useDataBase';

//this custom made hook will help in making the srearching functionality easier to handel
// this hook will retrive the nescassary data form the dataBase server then will start the search Functionality on the data
// our search Functionality is naive that is beacause of time shortage and also on skill shortage in parsing Strings
// our search Functionality works by asking if the given data string includes parts of the serachString given to the function
const useSearch = async () => {
  return await dataBase.collection('News').get();
};

export default useSearch;

// cheacking if the serachString includes one of the 3 Departments if so push it to the results array
/*   Departments.forEach((item) => {
    if (item.includes(serachString)) {
      DepartmentsResults.push(item);
    }
  }); */

// When reciving the data form the dataBase start the Serarch functionality
/*   useEffect(() => {
    if (Researches.docs.length !== 0) {
      Researches.docs.forEach((item) => {
        if (item.name.includes(serachString)) {
          ResearchesResults.push(item);
        }
      });
    }
  }, [ResearchesResults]); */

/* useEffect(() => {
    const collectionRef = dataBase.collection('Departments');
    collectionRef.get().then((value) => {
      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            if (dep.includes(serachString)) {
              secToAdd = [...secToAdd, ...[`${doc.id}/${index}`]];
              setDepartmentsFromDataBaseResults(secToAdd);
            }
          });
        }
      });
      /// I need to countiue coding here
      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            var data = doc.data();
            if (data[dep] !== undefined) {
              if (data[dep].first.includes(serachString)) {
                contentSecToAdd.push({
                  contentText: serachString,
                  contentLocation: `${doc.id}/${index}`,
                });
                setContentSec(contentSecToAdd);
              }
            }
          });
        }
      });
    });
  }, []); */
