import RouteNav from "../components/RouteNav"

function Login() {
    return (
        <>
            <RouteNav />
            <div className="container text-center">
            <form action="/#" method="POST" className="form col-5 border p-3">
                <div className="form-group mt-2">
                    <label className="col-2">Username:</label>
                    <input type="text" name="username" placeholder="Username" className="ms-2"/>
                </div>
                <div className="form-group mt-2">
                    <label className="col-2">Password:</label>
                    <input type="password" name="password" className="ms-2"/>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
