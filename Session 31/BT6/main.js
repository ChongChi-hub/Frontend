const setUsername="huanrose@gmail.com";
        const setPassword="123456";
        function checkLogin(){
            const usernameInput=document.getElementById("username").value;
            const passwordInput=document.getElementById("password").value;
            if(usernameInput==setUsername && passwordInput==setPassword){
                console.log("Đăng nhập thành công");
            }
            else{
                console.log("Đăng nhập thất bại");
                console.log(usernameInput);
                console.log(passwordInput);
            }
        }