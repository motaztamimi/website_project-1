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
  var sectionsFromSearch = '';
  var secToAdd = [];
  var contentSecToAdd = [];

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
  }, []);

  useEffect(() => {
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
              secToAdd = [
                ...secToAdd,
                ...[{ url: `${id}/${index}`, title: `${dep}/${doc.id}` }],
              ];
              setDepartmentsFromSearch(secToAdd);
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
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd = [
                  ...contentSecToAdd,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd);
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
                var toConnect = removeTags(data[dep].second);
                var temp = toConnect.search(searchString);

                for (var i = temp; i < temp + 40; i++) {
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd = [
                  ...contentSecToAdd,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd);
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
                var toConnect = removeTags(data[dep].theird);
                var temp = toConnect.search(searchString);

                for (var i = temp; i < temp + 40; i++) {
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd = [
                  ...contentSecToAdd,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd);
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
                var toConnect = removeTags(data[dep].fourth);
                var temp = toConnect.search(searchString);

                for (var i = temp; i < temp + 40; i++) {
                  contentText += toConnect[i];
                }
                contentText = removeTags(contentText);

                contentSecToAdd = [
                  ...contentSecToAdd,
                  ...[
                    {
                      contentText: contentText,
                      url: `${id}/${index}`,
                      title: `${dep}/${doc.id}`,
                    },
                  ],
                ];
                setContentSec(contentSecToAdd);
              }
            }
          });
        }
      });
    });
  }, []);

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
      {!sectionsFromSearch && !departmentsFromSearch && !contentSec && (
        <div className='NoResults'>לא נמצא נתונים עבור מה שחפשתה</div>
      )}
    </div>
  );
};

export default Search;

/* contentSecToAdd.push({
  contentText: contentText,
  url: `${id}/${index}`,
  title: `${dep}/${doc.id}`,
}); */
