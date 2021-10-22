function setCookie(cname, cvalue, exseconds) {
    const d = new Date();
    d.setTime(d.getTime() + (exseconds * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(cookieName) {
    return getCookie(cookieName) !== null ? true : false;
}

function getCookie(cookieName) {
    let cookieStrArr = document.cookie.split(";");
    cookieStrArr = cookieStrArr.map((fullCookieStr) => {
        if(fullCookieStr[0] === " ") {
            return fullCookieStr.substring(1, fullCookieStr.length);
        } else {
            return fullCookieStr;
        }
    })

    let foundCookieVal = null;    
    cookieStrArr.forEach((cookieStr)=> {
        let parsedCookieArr = cookieStr.split("=");
        if(parsedCookieArr[0] === cookieName) {
            foundCookieVal = parsedCookieArr[1];
        }
    });

    return foundCookieVal;
}

export {
    getCookie,
    setCookie,
    checkCookie
}