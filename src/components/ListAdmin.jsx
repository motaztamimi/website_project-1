/** @format */
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/listAdmin.css'
const ListAdmin = () => {
    const list =["/Admin/EditPages","/Admin/EditNews","/Admin/EditSlideShow","/Admin/AdminResearch","/Admin/AdminEditDoctors","/Admin/EditGallery","/Admin/EditVideo"]
    const listClass =[{class:"active0",stylee:{}},{class:"active1",stylee:{}},{class:"active2",stylee:{}},{class:"active3",stylee:{}},{class:"active4",stylee:{}},{class:"active5",stylee:{}},{class:"active6",stylee:{}}]
    const path = window.location.pathname;
    let flag=-1;
    
    for (let i = 0; i < list.length; i++) {
        if(path===list[i]){
            flag=i;
        }
    }
    if(flag!=-1){
        listClass[flag].stylee={
            background: "#04AA6D",
            color: "white"
        }
    }
    console.log( listClass[flag].stylee);
    return (
        <div className="listAdmin">
            <ul>
                <li style={listClass[0].stylee}><Link to="/Admin/EditPages">עריכת מחלקות</Link></li>
                <li style={listClass[1].stylee}><Link to="/Admin/EditNews">עריכת חדשות</Link></li>
                <li style={listClass[2].stylee}><Link to="/Admin/EditSlideShow">עריכת תמונות מתחלפות</Link></li>
                <li style={listClass[3].stylee}><Link to="/Admin/AdminResearch">עריכת מחקרים</Link></li>
                <li style={listClass[4].stylee}><Link to="/Admin/AdminEditDoctors">רופאים</Link></li>
                <li style={listClass[5].stylee}><Link to="/Admin/EditGallery">עריכת גלאריה</Link></li>
                <li style={listClass[6].stylee}><Link to="/Admin/EditVideo">עריכת סרטונים</Link></li>
            </ul>
        </div>
    )
}

export default ListAdmin
