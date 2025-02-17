
const Header = (props) => {
// const [username, setusername] = useState('')
// if(!data){
//   setusername("hello admin")
// }else{
//   setusername(data.first_name);
// }\
const logOut=()=>{
localStorage.setItem('loggedInUser','')
props.changeUser('')
// window.location.reload()
}
  return (
    <div  className=" text-white w-full flex items-end justify-between">
        <h1 className="text-2xl font-medium">hello <br /><span className=" font-semibold text-3xl">Username 👋</span></h1>
        <button onClick={logOut} className="font-semibold bg-red-500 px-5 py-2 text-lg rounded-sm cursor-pointer">Log out</button>
    </div>
  )
}

export default Header