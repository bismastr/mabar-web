import auth from "../service/auth"


const Login = ({ profile }) => {
    if (profile.ID) {
        return (
            <div className="flex justify-center items-center gap-3">
                <img src={profile.AvatarUrl} className="w-8 h-8 rounded-lg object-cover" alt="image" />
                <p>Welcome, {profile.Username}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <p className="text-9xl font-bold">Mabar App</p>
            <p className="pb-10 text-3xl font-extralight">Find your fellow gamers</p>
            <button onClick={() => auth.loginDiscord()}>Login With Discord</button>
        </div>
    )
}

export default Login