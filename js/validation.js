function namevalidation(idname, idmsg) {
    var n = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (n.value.trim().length == 0) {
        m.innerHTML = "Invalid Name !";
        m.style.visibility = "visible";
        n.focus();
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
function percentagevalidation(idname, idmsg) {
    var p = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (p.value.length == 0) {
        m.innerHTML = "Invalid !";
        m.style.visibility = "visible";
        p.focus();
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
function rollnovalidation(idname, idmsg) {
    var r = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    if (r.value.trim().length < 3 || r.value<100) {
        m.innerHTML = "Invalid Roll No. !";
        m.style.visibility = "visible";
        r.focus();
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
function passwordvalidation(idname, idmsg) {
    var p = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (p.value.length < 6) {
        m.innerHTML = "Enter atleast 6 characters !";
        m.style.visibility = "visible";
        p.focus();
        redcolor(idname);
        return false;
    }
    else if (p.length > 10) {
        m.innerHTML = "Maximum 10 Characters !";
        m.style.visibility = "visible";
        p.focus();
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
function cpasswordvalidation(idname, idname2, idmsg) {
    var p = document.getElementById(idname);
    var cp = document.getElementById(idname2);
    var m = document.getElementById(idmsg);

    if (p.value == cp.value) {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        greencolor(idname2);
        return true;
    } else {
        m.innerHTML = "Password Not Match !";
        m.style.visibility = "visible";
        cp.focus();
        redcolor(idname2);
        return false;
    }
}
function otpvalidation(idname, idmsg) {
    var o = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    if (o.value.length==4) {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        greencolor(idname);
        return true;
    }
    else {
        m.innerHTML = "OTP must have 4 digits !";
        m.style.visibility = "visible";
        o.focus();
        redcolor(idname);
        return false;
    }
}
function timevalidation(idname, idmsg)
{
    var t = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    if (t.value=="") {
        m.innerHTML = "Enter a Valid Time !";
        m.style.visibility = "visible";
        t.focus();
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
function datevalidation(idname, idmsg)
{
    var d = document.getElementById(idname);
    var m = document.getElementById(idmsg);
    if (d.value=="") {
        m.innerHTML = "Enter a Valid Date !";
        m.style.visibility = "visible";
        d.focus();
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
function examdurationvalidation(idname, idmsg)
{
    var e = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (e.value.length == 0) {
        m.innerHTML = "Enter Duration of Exam !";
        m.style.visibility = "visible";
        e.focus();
        redcolor(idname);
        return false;
    }
    else if (e.value<=0) {
        m.innerHTML = "Exam Duration Can't be 0 !";
        m.style.visibility = "visible";
        e.focus();
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
function positivemarkvalidation(idname, idmsg)
{
    var p = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (p.value.length == 0) {
        m.innerHTML = "Enter Positive Marking !";
        m.style.visibility = "visible";
        p.focus();
        redcolor(idname);
        return false;
    }
    else if (p.value<=0) {
        m.innerHTML = "Positive Marking Must be<br>greater than 0 !";
        m.style.visibility = "visible";
        p.focus();
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
function negativemarkvalidation(idname, idmsg)
{
    var n = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (n.value.length == 0) {
        m.innerHTML = "Enter Negative Marking !";
        m.style.visibility = "visible";
        n.focus();
        redcolor(idname);
        return false;
    }
    else if (n.value<0) {
        m.innerHTML = "Negative Marking Can't be Negative !";
        m.style.visibility = "visible";
        n.focus();
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
function questionnovalidation(idname, idmsg) {
    var q = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (q.value.length == 0) {
        m.innerHTML = "Enter No. of Questions !";
        m.style.visibility = "visible";
        q.focus();
        redcolor(idname);
        return false;
    }
    else if (q.value<=0) {
        m.innerHTML = "No. of Questions Can't be 0 !";
        m.style.visibility = "visible";
        q.focus();
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
function passingpercentagevalidation(idname, idmsg) {
    var pp = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (pp.value.length == 0) {
        m.innerHTML = "Enter Passing Percentage !";
        m.style.visibility = "visible";
        pp.focus();
        redcolor(idname);
        return false;
    }
    else if (pp.value<0 || pp.value>100) {
        m.innerHTML = "Percentage must be in 0-100 !";
        m.style.visibility = "visible";
        pp.focus();
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
function questionvalidation(idname, idmsg)
{
    var q = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (q.value.length == 0) {
        m.innerHTML = "Enter Question !";
        m.style.visibility = "visible";
        q.focus();
        redcolor(idname);
        return false;
    }
    else if (q.value.length>500) {
        m.innerHTML = "Question length must be less than 500 !";
        m.style.visibility = "visible";
        pp.focus();
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
function optionvalidation(idname, idmsg)
{
    var o = document.getElementById(idname);
    var m = document.getElementById(idmsg);

    if (o.value.length == 0) {
        m.innerHTML = "Enter Option !";
        m.style.visibility = "visible";
        o.focus();
        redcolor(idname);
        return false;
    }
    else if (o.value.length>200) {
        m.innerHTML = "Option length must be less than 200 !";
        m.style.visibility = "visible";
        o.focus();
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
function optiondiff(idop1,idop2,idop3,idop4,idmsg)
{
    var o1=document.getElementById(idop1).value;
    var o2=document.getElementById(idop2).value;
    var o3=document.getElementById(idop3).value;
    var o4=document.getElementById(idop4).value;
    var m = document.getElementById(idmsg);

    if(o1==o2 || o1==o3 || o1==o4 || o2==o3 || o2==o4 || o3==o4)
    {
        m.innerHTML = "Options must be Different !";
        m.style.visibility = "visible";
        return false;
    }
    else {
        m.innerHTML = "";
        m.style.visibility = "Hidden";
        return true;
    }
}




function adminvalidate(ide, idmsg1, idp, idmsg2) {
    if (emailvalidation(ide, idmsg1)) {
        if (passwordvalidation(idp, idmsg2)) {
            return true;
        }
    }
    return false;
}
function studentvalidate(ide, idmsg1, idp, idmsg2) {
    if (rollnovalidation(ide, idmsg1)) {
        if (passwordvalidation(idp, idmsg2)) {
            return true;
        }
    }
    return false;
}
function studentregistervalidate(idsname, idmsg1, idfname, idmsg2, idemail, idmsg3, idpercentage, idmsg4, idpassword, idmsg5, idcpassword, idmsg6) {
    if (namevalidation(idsname, idmsg1)) {
        if (namevalidation(idfname, idmsg2)) {
            if (emailvalidation(idemail, idmsg3)) {
                if (percentagevalidation(idpercentage, idmsg4)) {
                    if (passwordvalidation(idpassword, idmsg5)) {
                        if (cpasswordvalidation(idpassword, idcpassword, idmsg6)) {
                            return true;
                        }
                    }
                }
            }
        }

    }
    return false;
}
function coursevalidate(idcname, idmsg1, idfee, idmsg2) {
    if (namevalidation(idcname, idmsg1)) {
        if (percentagevalidation(idfee, idmsg2)) {
            return true;
        }
    }
    return false;
}
function examvalidate(idename,idmsg1,idstime,idmsg2,idetime,idmsg3,idedate,idmsg4,idduration,idmsg5,idpmark,idmsg6,idnmark,idmsg7,idqno,idmsg8,idpassper,idmsg9)
{
    if (namevalidation(idename, idmsg1)) {
        if (timevalidation(idstime, idmsg2)) {
            if (timevalidation(idetime, idmsg3)) {
                if (datevalidation(idedate, idmsg4)) {
                    if (examdurationvalidation(idduration, idmsg5)) {
                        if (positivemarkvalidation(idpmark, idmsg6)) {
                            if (negativemarkvalidation(idnmark, idmsg7)) {
                                if (questionnovalidation(idqno, idmsg8)) {
                                    if (passingpercentagevalidation(idpassper, idmsg9)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function questionvalidate(idquestion,idmsg2,idop1,idmsg3,idop2,idmsg4,idop3,idmsg5,idop4,idmsg6)
{
    if (questionvalidation(idquestion, idmsg2)) {
        if (optionvalidation(idop1, idmsg3)) {
            if (optionvalidation(idop2, idmsg4)) {
                if (optionvalidation(idop3, idmsg5)) {
                    if (optionvalidation(idop4, idmsg6)) {
                        if (optiondiff(idop1,idop2,idop3,idop4,idmsg6)) {
                            return true;
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