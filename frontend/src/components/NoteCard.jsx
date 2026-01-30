import { NoteContainer, NoteTitle, NoteContent, NoteFooter, StyledButton } from './styled';

const NoteCard = ({note}) => {

    return (
        <NoteContainer>
            <NoteTitle>{note.title}</NoteTitle>
            <NoteContent>{note.description}</NoteContent> 
            <NoteFooter>
                <span>{note.createdAt}</span>
                <div style={{display:'flex', gap:'10px'}}>
                    <StyledButton>Edit</StyledButton>
                    <StyledButton>Delete</StyledButton>
                </div>
            </NoteFooter>
        </NoteContainer>
    )
}

export default NoteCard;
