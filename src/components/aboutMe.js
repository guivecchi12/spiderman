import React from 'react';
import Image from 'react-bootstrap/Image'
import '../CSS/aboutMe.css';

const AboutMe = () =>{
    return(
        <div className="aboutPage">
            <p>
            Kvothe was born to Arliden and Laurian, leaders of an Edema Ruh troupe under the patronage of Baron Greyfallow. His early education is spotty and eclectic, his teachers being troupers and travellers. This changes when his troupe picks up an arcanist named Abenthy.
            <br/><br/>
            Meeting Abenthy was a pivotal moment in Kvothe's life. During his first encounter with the arcanist, he witnesses him call the name of the wind. This ability sparks his interest and ultimately leads him to the University. Abenthy instructs Kvothe in Sympathy, Chemistry, Rhetoric, and Arithmetic, in preparation for his admittance to the University. Abenthy eventually leaves the troupe, much to Kvothe's dismay.
            <br/><br/>
            After Abenthy's departure, Kvothe's eclectic education with the troupe is stepped up to keep him busy. Not long later his troupe is brutally murdered by the Chandrian, Kvothe escapes because he is playing in the forest away from the road. When he returns, he has a brief encounter with the Chandrian until they suddenly leave, seeming to flee discovery from some unseen presence.
            <br/><br/>
            After the horrific discovery of his slaughtered family, and subsequent encounter with Cinder and Haliax, the traumatized Kvothe flees into the nearby woods with nothing but his father's lute. He then spends nearly half a year recovering, completely alone. It is during this time he learns to play the lute so well, he can conjure up specific feelings and images with the notes. He is eventually forced to leave the forest when too many of his lute strings break. After days of walking, and a little help from a humble farmer named Seth, he reaches Tarbean.
            </p>
            <Image src='https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' rounded />
        </div>
    )
}

export default AboutMe;