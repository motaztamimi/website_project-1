import '../style/Subject.css'
import Subject from "./Subject";


const Subjects = ({Sub}) => {
    function sayhello(){
        alert("hello word");
    };
    return (
     <section className="Subject_Container">
         <h2> נושאים</h2>
         <section className="Subject_row" >
        {Sub.map((sub)=>{
            return <Subject key={sub.id} 
            subj={sub}/>
        })}

         </section>
         <button key='56' onClick={sayhello} > +עוד נושאים</button>

     </section>
    )
}

export default Subjects
