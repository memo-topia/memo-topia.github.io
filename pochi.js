
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
