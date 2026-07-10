// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    let value = urlParams.get(name) || '';
    // If value contains + signs, decode them properly
    value = value.replace(/%2B/g, '+');
    return value;
}

// Get the dynamic phone number
const phoneNumber = getUrlParameter('bcda');

document.getElementById("elementToFullscreen").innerHTML = `
    <div class="container-fluid">
        <div class="accept-box" style="display:block" id="hidec">
            <div class="ilb top">
                <div class="ilb headers" style="border-bottom:1px solid #d6d5d5">
                    <span class="fl title" id="txtadd">
                        <span class="fl ilb">
                            <img src="ok1.png" class="logo3">
                        </span>
                        Safety Services
                    </span>
                    <span class="fl close title2" id="txts1">
                        <a href="#">
                            <img src="okji.png">
                        </a>
                    </span>
                </div>
            </div>
            <div class="textIntro">
                <span class="text-danger">App: track(2).dll<br>Unsafety Detected: track(2).dll</span>
            </div>
            <img src="nono.jpg" class="alert-banner">
            <div class="text-details">
                Access has been Denied for safety reasons.<br>
                <span class="mynum">Call Apple Agent: +<span class="bcda"></span></span>
            </div>
            <div class="bottom-details">
                <img src="ok2.png" class="bg">
                <span class="ms-title">Apple</span>
                <ul>
                    <li>
                        <a href="#">
                            <div class="fr c-button-css-primary">
                                <span id="dwuybcnbkgiudiwq">Cancel</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="fr scan-now">
                                <span id="dwuybcnbkgiudiwq">Scan</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="blue-box">
            <p class="heading text-center">MacOS - Safety Alert System</p>
            <p>** ACCESS HAS BEEN Denied FOR Safety REASONS **</p>
            <p>Your system has alerted us that it has been infected with Safety issues. The following data has been breached.</p>
            <p>> Email Credentials<br>> Bank Credentials<br>> Facebook ID<br>> Pictures & files</p>
            <p>MacOS firmware has detected potentially unwanted files on this device that may compromise your passwords, online identity, financial information, personal files, photos, or documents.</p>
            <p>You should Give a call immediately so our system engineers can guide you through the removal process over the phone. .</p>
            <p>Call MacOS Toll-Free number now to report this threat, prevent identity theft, and unlock access to this device.</p>
            <br><br>
            <p style="padding-bottom:0;color:#fff;font-size:14px">
                Apple Agent Number (Toll-Free): <strong>+<span class="bcda"></span></strong>
                <div class="action_buttons">
                    <a class="active" id="leave_page" style="cursor:pointer;color:#fff!important">Allow</a>
                    <a class="active" id="leave_page" style="color:#fff!important">Deny</a>
                </div>
            </p>
        </div>
        <div class="page-footer">
            <div class="row">
                <div class="col-md-12">
                    <div class="right-foot" style="text-align:center">
                        <span class="text-font">
                            <img src="ok1.png"> Call the Apple Security Center : 
                        </span>
                        <span style="font-weight:700;padding-left:13px;color:#fff">
                            <span style="border:1px solid #fff;border-radius:5px;padding:2px 5px">+<span class="bcda"></span></span>
                        </span>
                    </div>
                </div>
                <div class="col-md-12">
                    <marquee direction="left" height="100px" width="100%">
                        <small class="text-left" style="color:#eee;font-size:10px">
                            macOS Security has blocked an unrecognized IP application from displaying. Running this IP application may put your PC at risk. MacOS Defender Scan has detected a potentially unwanted threat on this device that can steal your Credentials, online identity, financial credentials, personal information, pictures, or documents.
                        </small>
                    </marquee>
                </div>
            </div>
        </div>
        
    </div>
`;

// Update phone number displays
document.querySelectorAll('.bcda').forEach(element => {
    element.textContent = phoneNumber;
});
