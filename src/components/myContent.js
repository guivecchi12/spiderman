import Image from 'react-bootstrap/Image';
import '../CSS/myContent.css';

const MyContent = () =>{
    return(
        <div className="myContent">
            <div className="movies spiderCard">
                <div className="content">
                <a href="https://www.imdb.com/title/tt0145487/" target="_blank" rel='noreferrer'>Movies</a>
                    <p>
                        The Spider-Man films have been generally well-received. They have collectively grossed over $6.3 billion at the global box office, with Far From Home becoming the first Spider-Man film to gross over $1 billion worldwide as well as Sony's highest-grossing film ever. Additionally, Into the Spider-Verse won the Academy Award for Best Animated Feature.
                    </p>
                </div>
                <Image src="https://images.unsplash.com/photo-1608889476501-ea8c0f0b8d3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVyaGVybyUyMG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded />
            </div>

            <div className="music spiderCard">
                <Image src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHJlZCUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded />
                <div className="content">
                    <a href="https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs?si=fcLQN_AMTtyoqb147hlIRw&dl_branch=1" target="_blank" rel='noreferrer'>Music</a>
                    <p>Spider-Man" is the theme song of the 1967 cartoon show Spider-Man, composed by Paul Francis Webster and Bob Harris. The original song was recorded at RCA Studios in Toronto (where the cartoon was produced) featuring 12 CBC vocalists (members of the Billy Van Singers, and Laurie Bower Singers groups) who added to the musical backing track supplied by RCA Studios, New York. The singers were paid only for the session and have had no residuals from its use since then.
                    <br/><br/>
                    The song has since been adopted as Spidey’s official theme, including in-universe.</p>  
                </div>  
            </div>

            <div className="comics spiderCard">
                <div className="content">
                    <a href="https://www.marvel.com/comics/discover/1130/start-here-spider-man" target="_blank" rel='noreferrer'>Comics</a>
                    <p>Including the mind-blowing 12 Milestones of Amazing Spider-Man spanning March 1963 through June 2006. A total of over 575 complete comic books including Annuals, all articles, Spider-Web column pages, Bullpen Bulletins, Pinups and every single advertisement.</p>
                </div>
                <Image src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" thumbnail />
            </div>
        </div>
    );
}

export default MyContent;