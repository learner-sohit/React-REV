import Section1 from './components/Section1/section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ducimus nemo odio voluptates nesciunt consectetur.',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ducimus nemo odio voluptates nesciunt consectetur.',
      tag: 'UnderServed',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ducimus nemo odio voluptates nesciunt consectetur.',
      tag: 'Underbanked',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1705091982079-d8bb61603cc2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ducimus nemo odio voluptates nesciunt consectetur.',
      tag: 'Satisfied',
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
