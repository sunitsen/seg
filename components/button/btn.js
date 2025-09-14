
"use client"
export default function Button({children}) {
     return(
        <button onClick={() => console.log("Button is clicked") } className="bg-blue-950 mt-5 p-2">
          {children }
       </button>
     )
}