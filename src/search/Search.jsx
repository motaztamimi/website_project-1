/** @format */

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dataBase } from '../config/firebase';
import './Search.css';
const Search = () => {
  const stringToSearch = useParams();
  const searchString = stringToSearch['stringToSearch'];
  const [newsFromSearch, setNewsFromSearch] = useState(null);
  const [departmentsFromSearch, setDepartmentsFromSearch] = useState(null);
  const sections = ['איתנים', 'כפר שאול', 'שירות קהילתי'];
  const [contentSec, setContentSec] = useState(null);
  const [DoctorsFormSearch, setDoctorsFormSearch] = useState([]);
  var sectionsFromSearch = '';

  sections.forEach((section) => {
    if (section.includes(searchString)) {
      if (section === 'כפר שאול') {
        sectionsFromSearch = section;
      } else if (section === 'איתנים') {
        sectionsFromSearch = section;
      } else {
        sectionsFromSearch = section;
      }
    }
  });

  useEffect(() => {
    dataBase
      .collection('News')
      .get()
      .then((news) => {
        const toAdd = [];
        news.docs.forEach((item) => {
          let data = item.data();
          let id = item.id;
          data = { ...data, id };
          if (data.NewsBody.includes(searchString)) {
            toAdd.push(data);
          } else if (data.NewsSubTitle.includes(searchString)) {
            toAdd.push(data);
          } else if (data.NewsTitle.includes(searchString)) {
            toAdd.push(data);
          }
        });
        setNewsFromSearch(toAdd);
      });
  }, [searchString]);

  useEffect(() => {
    let secToAdd1 = [];
    let contentSecToAdd1 = [];
    const collectionRef = dataBase.collection('Departments');
    collectionRef.get().then((value) => {
      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            if (dep.includes(searchString)) {
              let id = '';
              if (doc.id === 'כפר שאול') {
                id = 'kfarShaol';
              } else if (doc.id === 'איתנים') {
                id = 'Etanim';
              } else {
                id = 'sherotKhelate';
              }
              secToAdd1 = [
                ...secToAdd1,
                ...[{ url: `${id}/${index}`, title: `${dep}/${doc.id}` }],
              ];
              setDepartmentsFromSearch(secToAdd1);
            }
          });
        }
      });

      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            var data = doc.data();
            if (data[dep] !== undefined) {
              if (data[dep].first && data[dep].first.includes(searchString)) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'איתנים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                let contentText = '';
                var toConnect = removeTags(data[dep].first);
                var temp = toConnect.search(searchString);

                for (var i = temp; i < temp + 40; i++) {
                  if (toConnect[i] === undefined) {
                    break;
                  }
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd1 = [
                  ...contentSecToAdd1,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd1);
              } else if (
                data[dep].second &&
                data[dep].second.includes(searchString)
              ) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'איתנים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                let contentText = '';
                toConnect = removeTags(data[dep].second);
                temp = toConnect.search(searchString);

                for (i = temp; i < temp + 40; i++) {
                  if (toConnect[i] === undefined) {
                    break;
                  }
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd1 = [
                  ...contentSecToAdd1,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd1);
              } else if (
                data[dep].theird &&
                data[dep].theird.includes(searchString)
              ) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'איתנים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                let contentText = '';
                toConnect = removeTags(data[dep].theird);
                temp = toConnect.search(searchString);

                for (i = temp; i < temp + 40; i++) {
                  if (toConnect[i] === undefined) {
                    break;
                  }
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd1 = [
                  ...contentSecToAdd1,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd1);
              } else if (
                data[dep].fourth &&
                data[dep].fourth.includes(searchString)
              ) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'איתנים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                let contentText = '';
                toConnect = removeTags(data[dep].fourth);
                temp = toConnect.search(searchString);

                for (i = temp; i < temp + 40; i++) {
                  if (toConnect[i] === undefined) {
                    break;
                  }
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd1 = [
                  ...contentSecToAdd1,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd1);
              }
            }
          });
        }
      });
    });
  }, [searchString]);

  useEffect(() => {
    let temp = [];
    dataBase
      .collection('Doctors')
      .get()
      .then((doctors) => {
        doctors.docs.forEach((doctor) => {
          let data = { ...doctor.data(), id: doctor.id };
          if (data.DoctorName.includes(searchString)) {
            temp.push(data);
          }
        });
        if (temp.length !== 0) {
          setDoctorsFormSearch(temp);
        }
      });
  }, [searchString]);

  const removeTags = (str) => {
    if (str === null || str === '') return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    const stringa = str.replace(/&nbsp;/gi, '');
    return stringa.replace(/(<([^>]+)>)/gi, '');
  };
  return (
    <div className='SearchResults'>
      <div className='NewsFormSearch'>
        {newsFromSearch && newsFromSearch.length !== 0 && (
          <>
            <h1 className='NewsFromSearchTitle'>חדשות</h1>
            {newsFromSearch.map((newsItem) => {
              return (
                <Link
                  to={{
                    pathname: `/News/${newsItem.id}`,
                  }}
                  key={newsItem.id}>
                  <div className='NewsItemfromSearch'>
                    <img src={newsItem.NewsImage} alt='img' />
                    <div>
                      <h1>{newsItem.NewsTitle}</h1>
                      <h3>{newsItem.NewsSubTitle}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
            <hr />
          </>
        )}
      </div>
      {DoctorsFormSearch && DoctorsFormSearch.length !== 0 && (
        <>
          <h1>רופאים</h1>
          <div className='DoctorsFromSearch'>
            {DoctorsFormSearch.map((doctor) => {
              return (
                <div className='DoctorFromSearch' key={doctor.id}>
                  <img src={doctor.DoctorImage} alt='img' />
                  <p>{doctor.DoctorName}</p>
                </div>
              );
            })}
          </div>
          <hr />
        </>
      )}
      {sectionsFromSearch && (
        <div className='SectionFromSearch'>
          <h1 className='SectionFromSearchTitle'>מרפאות</h1>
          <Link to=''>
            <div className='SectionFromSearchContent'>
              {<h1>{sectionsFromSearch}</h1>}
            </div>
          </Link>
          <hr />
        </div>
      )}
      {departmentsFromSearch && departmentsFromSearch.length !== 0 && (
        <>
          <h1>מחלקות</h1>
          <div className='DepartmentsFormSearch'>
            {departmentsFromSearch.map((item, index) => {
              return (
                <Link to={`/${item.url}`} key={`${index}/${item.url}`}>
                  <div className='DepartmentFomSearch'>
                    <span>{item.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <hr />
        </>
      )}
      {contentSec && contentSec.length !== 0 && (
        <>
          <h1>תוכן מחלקות</h1>
          <div className='DepartmentsContentFromSearch'>
            {contentSec.map((item, index) => {
              return (
                <Link to={`/${item.url}`} key={`${index}/${item.url}`}>
                  <div className='DepartmentContentFormSearch'>
                    <p>
                      {item.title}
                      {':'}
                    </p>
                    <p>{item.contentText}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
      {!sectionsFromSearch &&
        !departmentsFromSearch &&
        !contentSec &&
        newsFromSearch &&
        newsFromSearch.length === 0 &&
        DoctorsFormSearch &&
        DoctorsFormSearch.length === 0 && (
          <div className='NoResults'>לא נמצא נתונים עבור מה שחפשתה</div>
        )}
    </div>
  );
};

export default Search;
