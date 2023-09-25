import React, { useEffect } from 'react'

function Naver() {

    

    useEffect(() => {
        let  naverLogin = new window.naver.LoginWithNaverId({
          clientId: `QLT5SzItcdf2IOqdZwUX`,
          callbackUrl: `http://localhost:3000/react-basic#/`,
          loginButton: { color: "green", type: 3, height: "50" },
        });
        naverLogin.init();
        naverLogin.logout();

        try {
            naverLogin.getLoginStatus((status) => {
              if (status) {
                console.log(naverLogin.user,'----------------------');
              }
            });
          } catch (err) {
            console.log(err);
          }

      }, []);

      
    
      return (
        <div className="connect">
            <div id="naverIdLogin" />
        </div>
      );
      
}

export default Naver