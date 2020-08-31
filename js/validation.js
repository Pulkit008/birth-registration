function namevalidation(idname, idmsg) {
    var n = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (n.value.trim().length == 0) {
        m.innerHTML = "Invalid Name !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else {
        m.innerHTML = "";
        n.value=n.value.toUpperCase();
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
}

function addressvalidation(idname, idmsg) {
    var n = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (n.value.trim().length == 0) {
        m.innerHTML = "Enter Address !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else if (n.value.length > 100) {
        m.innerHTML = "Length Exceeded !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else {
        m.innerHTML = "";
        n.value=n.value.toUpperCase();
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
}

function emailvalidation(idname, idmsg) {
    var e = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    var regem = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if (regem.test(e.value)) {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
    else {
        m.innerHTML = "Invalid Email !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
}

function loginpasswordvalidation(idname, idmsg) {
    var p = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (p.value.trim().length == 0) {
        m.innerHTML = "Enter Valid Password !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
}

function datevalidation(idname, idmsg)
{
    var d = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    if (d.value=="") {
        m.innerHTML = "Enter a Valid Date !";
        m.style.visibility = "visible";
        redcolor(idname);
        return false;
    }
    else
    {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
}

function loginvalidate(ide, idmsg1, idp, idmsg2) {
    if (emailvalidation(ide, idmsg1)) {
        if (loginpasswordvalidation(idp, idmsg2)) {
            return true;
        }
    }
    return false;
}

function registervalidate(idname, idmsg1, iddob, idmsg2, idpob, idmsg3, idmo, idmsg4, idfa, idmsg5, idaddr1, idmsg6, idaddr2, idmsg7) {
    if (namevalidation(idname, idmsg1)) {
        if (datevalidation(iddob, idmsg2)) {
            if (namevalidation(idpob, idmsg3)) {
                if (namevalidation(idmo, idmsg4)) {
                    if (namevalidation(idfa, idmsg5)) {
                        if (addressvalidation(idaddr1, idmsg6)) {
                            if (addressvalidation(idaddr2, idmsg7)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}


function greencolor(str) {
    document.getElementById(str).style = "border-bottom: 1px solid green !important;box-shadow: 0 1px 0 0 green !important;";
}
function redcolor(str) {
    document.getElementById(str).style = "border-bottom: 1px solid #ff4b4b !important;box-shadow: 0 1px 0 0 red !important;";
}