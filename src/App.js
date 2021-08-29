import logo from './logo.svg';
import './styles/tailwind.css';
import tw from 'tailwind-styled-components'
import './styles/theme.css'

function App() {

    //const [theme, setTheme] = useState(“dark”)

    /*
     const handleSwitchTheme = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark")
     }
    */

    return (<div className="w-full h-screen flex justify-center items-center">
        <StyledButton1>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>

        </StyledButton1>

        <StyledButton1 className="mx-5 flex">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>

            <span className="ml-2">Download</span>
        </StyledButton1>

        <StyledButton1 className="flex">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>

            <span className="ml-2">Bookmark</span>
        </StyledButton1>
    </div>)

    //return <StyledButton>Hello I am tailwind styled</StyledButton>
  // return (
  //     <div className="flex flex-col justify-center items-center h-screen">
  //       <div className="mx-auto max-w-3xl p-4 shadow-lg rounded">
  //
  //         <div className="text-center">
  //
  //           <img src={logo} alt="Logo" className="h-32 my-4 mx-auto" />
  //
  //           <div className="text-gray-500 text-2xl font-bold">
  //             <h1>
  //               Welcome to Tailwind!
  //             </h1>
  //           </div>
  //
  //           <div className="my-4">
  //             <p>
  //               Learn more by <a href="https://tailwindcss.com/docs/utility-first" className="text-blue-400">visiting the docs.</a>
  //             </p>
  //             <StyledButton $primary={false}/>
  //             <p>
  //               Cheers!
  //               <span role="img" aria-labelledby="cheers emoji">
  //               🎊
  //             </span>
  //             </p>
  //           </div>
  //
  //         </div>
  //
  //       </div>
  //     </div>
  // );
}

const StyledButton1 = tw.button`
    btn
    px-4 
    py-3 
    bg-blue-600 
    rounded-md 
    text-white 
    outline-none 
    focus:ring-4 
    shadow-lg 
    transform 
    active:scale-75 
    transition-transform
    `

const StyledButton2 = tw(StyledButton1)`
    mx-5
    flex
    `

const StyledButton3 = tw(StyledButton1)`
    flex
    `

export default App;
