import vueCookie from 'vue-cookie';

function auth(role){

    if(!vueCookie.get('user-token')){
        window.location.href = "/login"
    }
    let user = JSON.parse(vueCookie.get('user'));
    if(user.role == role || user.role == 'admin')
        return true
    else
        window.location.href = "/"
}

export default auth;
