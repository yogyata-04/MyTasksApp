import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi';
import { NoteListContainer } from './style';
import NoteCard from '../components/NoteCard';


function HomePage() {
    const [isRateLimited,setIsRateLimited]=useState(false);
    const [notes,setNotes]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchNotes=async()=>{
            setNotes([]);
            setLoading(true);
            try {
                const res=await fetch(window.serverConfig.apiBaseUrl+"/api/notes")
                if(res.status===429){
                    setIsRateLimited(true);
                    setNotes([]);
                    setLoading(false);
                    return;
                }
                const data= await res.json();
                setNotes(data);
                setIsRateLimited(false);
                console.log(data);
            } catch (error) {
                console.log("Error fetching notes", error)
            } finally{
                setLoading(false);
            }
        }
        fetchNotes();
    },[])

    return (
        <div>
            <Navbar/>
            {
                isRateLimited && <RateLimitedUi/>
            }
            <NoteListContainer>
                {notes.map((note)=>(
                    <NoteCard note={note}/>
                ))}
            </NoteListContainer>   
        </div>
    )
}

export default HomePage
