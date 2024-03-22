import { useEffect, useState } from "react"

interface UserNameProps {
   userName: string;
}

export const Profile = ({ userName }: UserNameProps) => {
   const [loading, setLoading] = useState(false);
   const [profile, setProfile] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const profile = await fetch(`https://api.github.com/users/${userName}`)
         const result = await profile.json();

         if (result) {
            setProfile(result);
            setLoading(false);
         }
      }
      fetchData();
   }, [userName]);

   return (
      <div>
         <p>About me</p>
         {loading ? (
            <span>Loading...</span>)
            : (
               <ul></ul>
            )

         }
      </div>
   )
}