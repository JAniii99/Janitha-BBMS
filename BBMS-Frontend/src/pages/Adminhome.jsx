import React from 'react';
import Card from '../component/card';
import Navbar from '../component/navbar.jsx';
import p2 from '../assets/blood donor card.png';
import p3 from '../assets/blood donation.png';
import p4 from '../assets/two hands.png';
import p5 from '../assets/updating arrows.png';
import p6 from '../assets//discard.png';
import p1 from '../assets/card background.png';
import p7 from '../assets/registration-form.png';
import Footer from '../component/Footer.jsx';

function Home() {
  const carddata = ["Donor Register", "Component Register", "Component Issue", "Component Update", "Component Discard", "User Registration"];
  const cardicons = [p2, p3, p4, p5, p6, p7];
  const images = [p1, p1, p1, p1, p1, p1];
  const links = ["/donor", "/component/rccregister", "/blood3", "/componentupdate", "/blood5", "/register"];

  return (
    <div className='h-screen bg-green-400 sm:grid-cols-1'>
      <div>
        <Navbar />
      </div>
      <div className="grid gap-4 pt-5 sm:grid-cols-3 sm:gap-6">
        {carddata.map((carddata, index) => (
          <Card
            key={index}
            carddata={carddata}
            cardicons={cardicons[index]}
            image={images[index]}
            link={links[index]}
          />
        ))}
      </div>
      <div className='fixed bottom-0 items-center justify-center w-full'>
        <Footer container={true} />
      </div>
    </div>
  );
}

export default Home;
