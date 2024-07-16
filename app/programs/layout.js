export const metadata = {
    title: "Programs",
    description: "Welcome to Innive Enrolment Dashboard",
    icons: {
      icon: [{ url: "/logo.svg" }],
    },
  };
  
  export default function ProgramsLayout({ children }) {
    return (
      <>
      <div className='programsLayout_wrap'>
      {children}
      </div>
      </>
    );
  }
  