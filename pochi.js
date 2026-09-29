const SUPABASE_URL = "https://cwvcpbgjxbyroqnsdctf.supabase.co"; 
const SUPABASE_KEY = "sb_publishable_WTjtS8YZ2P4HYtUibp3l0Q_-LwJ5GJp";
const client = window.supabase.createClient( SUPABASE_URL, SUPABASE_KEY );


async function checkLogin() {
        const { data, error } = await client.auth.getSession();

        if (error) {
            console.error(error);
            return;
        }

        if (!data.session) {
            window.location.href = "login.html";
            return;
        }

        console.log("ログイン中！");
        console.log(data.session.user.id);
    }

    checkLogin();

const logout = document.querySelector(".logout");
logout.addEventListener("click", async () => {
        const { error } = await supabase.auth.signOut();
        checkLogin();
});
